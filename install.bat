@echo off
REM Starting Installation
echo Starting Installation!!

cd ci-cd-automation
npm install
cd ..

cd nanosoft-app
npm install
cd ..

cd api
npm install
cd ..

echo Finish Installing!!
