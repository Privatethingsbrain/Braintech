@echo off
REM Starting Docker to Serve Static HTML Pages
echo Starting Docker to Serve Static HTML Pages

docker build -t my-apache-test -f Dockerfile.static.test ./

docker run --name my-apache-cont -it --rm -p 4000:80 my-apache-test

echo Docker Job Done!!!
