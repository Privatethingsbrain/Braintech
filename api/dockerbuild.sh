#!/bin/sh

echo "Starting Docker to Serve Static HTML Pages"

docker build -t my-apache-test -f Dockerfile ./

docker run --name my-apache-cont -it --rm -p 4000:3000 my-apache-test

echo "Docker Job Done!!!"