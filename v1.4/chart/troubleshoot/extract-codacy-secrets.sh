#!/usr/bin/env bash

usage()
{
    echo "Retrieves secrets used to encrypt sensitive data on the database from the Codacy logs."
    echo "Usage: $0 -n <NAMESPACE>"
    echo "Example: '$0 -n codacy' retrieves secrets from Codacy running on the cluster namespace 'codacy'"
    exit 3
}

while getopts "n:" option; do
    case ${option} in
        n )
            NAMESPACE=${OPTARG}
            ;;
        \? )
            usage
            ;;
    esac
done

[ -z "$NAMESPACE" ] && usage

echo "Starting secrets extraction"

# Check if kubectl or microk8s.kubectl is available
echo "Checking if kubectl is installed..."
KUBECTL=$(which kubectl || which microk8s.kubectl)
if [ $? -ne 0 ]; then
    echo "kubectl not installed"
    echo "Please install the kubectl version specified in Codacy's documentation (https://codacy.github.io/chart/install/) or the version used when installing your cluster"
    echo "To install kubectl see https://kubernetes.io/docs/tasks/tools/install-kubectl/, or https://microk8s.io/docs/ if you are running a MicroK8s kubernetes cluster"
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
    echo "Configure your kubernetes cluster context to access the cluster where Codacy is running"
    exit 6
fi

echo "Checking if the deployment exists..."
DEPLOYMENT_INFORMATION=$($KUBECTL -n $NAMESPACE get deployments | grep codacy-api)
if [ $? -ne 0 ]; then
    echo "Failed to get the 'codacy-api' deployment, for namespace $NAMESPACE"
    echo "Are you sure you are in the right kubernetes cluster context?"
    exit 7
fi

DEPLOYMENT_LOGS_COMMAND="$KUBECTL -n $NAMESPACE logs deployment/codacy-api"
SECRET_MESSAGES=$($DEPLOYMENT_LOGS_COMMAND | grep -i "Sensitive data on the database will be encrypted using the secret")
if [ $? -ne 0 ]; then
    echo "Failed to get the logs for the 'codacy-api' deployment, for namespace $NAMESPACE"
    echo "You can try running the command by hand ('$DEPLOYMENT_LOGS_COMMAND') or contacting support@codacy.com"
    exit 8
fi

echo "$SECRET_MESSAGES"
