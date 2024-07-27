# FontsTestApp



## Installation
Assuming you have react native setup on your machine
```bash
git clone https://github.com/phaneendra-rao/FontsTestApp.git

cd FontsTestApp

yarn
```

## How to run the app
```bash
# To run in ios
yarn ios
# To run in android
yarn android
```
If you still face issues running these commands, please open ios folder in xcode and android folder in android studio.

Build and run.

## Issues

Issue 1: Letter spacing issue in ios in RTL

Issue 2: In LTR text clipping issue with Original **assets/fonts/duCoBrand_A_Bd_arabic** (it is **duCoBrand_A_Bd** just renamed) in both iOS and android

##### *Solution:*
In LTR text clipping issue resolved with modified **assets/fonts/duCoBrand_A_Bd_english** in both iOS and android

##### NOTE: In RTL still using original **assets/fonts/duCoBrand_A_Bd_arabic** both iOS and android

Please refer to **App.tsx** file for testing.

##### Refer assets folder for the scripts that I used to modify .ttf files