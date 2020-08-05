#!/usr/bin/env bash

set -e 

TMP_WORKDIR=$(mktemp -d)

cleanup()
{
    if [ -d "$TMP_WORKDIR" ]; then
        rm -r $TMP_WORKDIR &>/dev/null
    fi
}
trap cleanup EXIT

cd $TMP_WORKDIR
openssl genrsa -out bbkey
openssl pkcs8 -nocrypt -in bbkey -out bbkey.pkcs8 -topk8
openssl rsa -in bbkey -pubout -out bbkey.pub

BB_CONSUMER_KEY=$(openssl rand -base64 10 | tr -dc 'a-zA-Z0-9')
BB_PUBLIC_KEY=$(cat $TMP_WORKDIR/bbkey.pub | head -n-1 | tail -n+2 | tr -d '\n')
BB_PRIVATE_KEY=$(cat $TMP_WORKDIR/bbkey.pkcs8 | head -n-1 | tail -n+2 | tr -d '\n')

echo "=> These are your secrets for Bitbucket Server. Please keep them in a safe place."
echo ""
echo "# consumerKey"
echo "$BB_CONSUMER_KEY"
echo ""
echo "# consumerPublicKey"
echo "$BB_PUBLIC_KEY"
echo ""
echo "# consumerPrivateKey"
echo "$BB_PRIVATE_KEY"
