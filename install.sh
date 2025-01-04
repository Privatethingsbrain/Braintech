#!/bin/sh

# set -x

echo "Starting Installing!!"

cd ci-cd-automation && npm install && cd ..

cd nanosoft-app && npm install && cd ..

cd api && npm install && cd ..

echo "Finish Installing!!"
