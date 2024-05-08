#!/usr/bin/env bash

set -euo pipefail

echo "==================="
LOCALSTACK_HOST=localhost
AWS_REGION=ap-southeast-1
ACCESS_KEY=dummy
SECRET_KEY=dummy
PROFILE=default

aws --version
aws --profile $PROFILE configure set aws_access_key_id $ACCESS_KEY
aws --profile $PROFILE configure set aws_secret_access_key $SECRET_KEY
aws configure set region $AWS_REGION --profile $PROFILE
aws configure set output table --profile $PROFILE