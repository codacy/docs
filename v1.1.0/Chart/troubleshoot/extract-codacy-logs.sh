#!/usr/bin/env bash

#### Helper functions ####

usage()
{
    echo "Usage: $0 -n <NAMESPACE> [-d <DAYS_OF_LOGS>]"
    echo "When using the -d flag, <DAYS_OF_LOGS> must be between 1 and 7"
    echo "Example: '$0 -n codacy -d 3' would retrieve the last 3 days of logs from the 'codacy' namespace of the kubernetes cluster"
    exit 3
}

date_days_ago() {
    OS=$(uname)
    if [[ "$OS" == "Darwin" ]]; then
        date -v -$1\d "+%Y-%m-%d"
    elif [[ "$OS" == "Linux" ]]; then
        date -d '-$1 day' "+%Y-%m-%d"
    else
       echo "Unsupported operating system '$OS'"
       exit 11
    fi
}

cleanup()
{
    echo "Cleaning temporary files, exiting..."
    if [ -d "$LOGS_DIR" ]; then
        rm -r $LOGS_DIR &>/dev/null
    fi
}
trap cleanup EXIT

#### Log extraction script ####

while getopts "n:d:" option; do
    case ${option} in
        n )
            NAMESPACE=${OPTARG}
            ;;
        d )
            if [ $OPTARG -le 0 ] || [ $OPTARG -ge 8 ]; then
                usage
            else
                DAYS=$((${OPTARG}-1)) # Day 0 is today
            fi
            ;;
        \? )
            usage
            ;;
    esac
done

[ -z "$NAMESPACE" ] && usage

CURRENT_DATE_TIME=$(date "+%Y%m%d-%H%M%S")
LOGS_DIR="$(mktemp -d)/codacy_logs_$CURRENT_DATE_TIME"

echo "Starting log files extraction"

# Check if zip is available
echo "Checking if zip is installed..."
if ! zip --version &>/dev/null; then
    echo "zip not installed"
    echo "Please install zip"
    exit 4
fi


# Check if kubectl or microk8s.kubectl is available
echo "Checking if kubectl is installed..."
KUBECTL=$(which kubectl || which microk8s.kubectl)
if [ $? -ne 0 ]; then
    echo "kubectl not installed"
    echo "Please install kubectl version specified in Codacy's documentation (see here - https://codacy.github.io/chart/install/) or the version used when installing your cluster"
    echo "To install kubectl see https://kubernetes.io/docs/tasks/tools/install-kubectl/ (or https://microk8s.io/docs/ if you are running a microk8s kubernetes cluster)"
    exit 4
fi

# Check current cluster context
echo "Checking access to kubernetes cluster..."
KUBE_CTX=$($KUBECTL config current-context)
if [ $? -ne 0 ]; then
    echo "No kubernetes cluster context configured"
    exit 5
fi

read -p "Is '$KUBE_CTX' the correct kubernetes cluster for log extraction? (yes/[no]): " ANSWER
if [[ ! "$ANSWER" =~ ^y(es)?$ ]]; then
    echo "Please configure correctly your current kubernetes cluster"
    exit 6
fi

# Create temporary directory for copying logs
if ! mkdir -p $LOGS_DIR; then
    echo "Failed to create temporary directory $LOGS_DIR , for log files extraction"
    exit 7
fi

# Get pod name for the logs pod
echo "Checking if the logs kubernetes pod exists..."
LOGS_POD_NAME=$($KUBECTL get pods -n $NAMESPACE -l app=minio -o jsonpath='{.items[*].metadata.name}')
if [ $? -ne 0 ]; then
    echo "Failed to get the name of the logs kubernetes pod, for namespace $NAMESPACE"
    echo "Are you sure you are in the right kubernetes cluster context?"
    exit 8
fi

# Copy logs to local filesystem
echo "Extracting log files..."
if ! $KUBECTL cp $NAMESPACE/$LOGS_POD_NAME:/export/logs $LOGS_DIR; then
    echo "Failed to extract log files from kubernetes pod $LOGS_POD_NAME to local directory $LOGS_DIR"
    echo "Are you sure you are in the right kubernetes cluster context?"
    exit 9
fi


echo "Compressing extracted log files..."
if [ -n "$DAYS" ]; then

    # Incrementally generate dates with the format specified below, for each day of logs, to make pattern matching easier
    while [ $DAYS -ge 0 ]; do
        LOGS_DATE=$(date_days_ago $DAYS)

        # Find all log files that match the pattern and add them to the ZIP archive (-9 is maximum, slowest, compression)
        find $LOGS_DIR -iname $LOGS_DATE\* -type f | xargs -L 10 zip -ur9 codacy_logs_$CURRENT_DATE_TIME.zip

        # Incremental zipping might fail
        if [ $? -ne 0 ]; then
            echo "Failed to compress logs (located in $LOGS_DIR) to a ZIP file"
            echo "If this step continues to fail, you can compress the files manually"
            exit 10
        fi

        DAYS=$(($DAYS - 1))
    done

else
    # Compress logs in ZIP file (-9 is maximum, slowest, compression)
    if ! zip -r9 codacy_logs_$CURRENT_DATE_TIME.zip $LOGS_DIR; then
        echo "Failed to compress logs (located in $LOGS_DIR) to a ZIP file"
        echo "If this step continues to fail, you can compress the files manually"
        exit 10
    fi
fi

echo "Log file extraction completed"
