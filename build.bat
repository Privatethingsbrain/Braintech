@echo off
REM Build Step
echo Building Production Level Code!!

cd nanosoft-app

npm run build

cd ..

echo Building is Done!!

REM Copying Step
echo Copying and Zipping the Compiled Code

echo Deleting Any Previous compiled-prod-code

rmdir /s /q compiled-prod-code

xcopy /E /I nanosoft-app\out compiled-prod-code

tar -cf compiled-prod.tar compiled-prod-code

echo Copying and Zipping Done!!

REM CI/CD Auto Deployment Step
echo Customizing CI/CD

cd ci-cd-automation

node custom-ci-cd.js

cd ..

echo Customizing CI/CD Done!! Push Your Code!

REM Cleaning Step
echo Cleaning Step

rmdir /s /q compiled-prod-code

echo Cleaning Done!!
