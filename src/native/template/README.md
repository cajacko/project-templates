# React Native Skeleton

[![Build Status](https://travis-ci.org/cajacko/react-native-skeleton.svg?branch=master)](https://travis-ci.org/cajacko/react-native-skeleton)

## Android Setup

* Setup new app on Google Play Console
* Manually sign the app an upload first build
* Setup fastlane
* Create an account with https://deploygate.com
* Copy `~/android/.env.default` to `~/android/.env` and change values accordingly
* Publish to Testers via DeployGate with `yarn release:android:testers`
* Publish to Google Play with `yarn release:android`
  * Note, the versionCode and versionName in ~/android/app/build.gradle needs to be different from whats in Google Play Console
*

## Manually sign the app an upload first build

See: https://facebook.github.io/react-native/docs/signed-apk-android.html

Key is valid for 1000 days

* `keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`
* Name - Charlie Jackson
* Organisational Unit - Development
* Organisation - Curious Squid
* City - London
* State - London
* Country Code - UK
* This creates `my-release-key.keystore`
* Put in android/app/my-release-key.keystore
* .gitignore this
* Create a new file or add the following to ~/android/gradle.properties
* This file should be in .gitignore

```
# Project-wide Gradle settings.

# IDE (e.g. Android Studio) users:
# Gradle settings configured through the IDE *will override*
# any settings specified in this file.

# For more details on how to configure your build environment visit
# http://www.gradle.org/docs/current/userguide/build_environment.html

# Specifies the JVM arguments used for the daemon process.
# The setting is particularly useful for tweaking memory settings.
# Default value: -Xmx10248m -XX:MaxPermSize=256m
# org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

# When configured, Gradle will run in incubating parallel mode.
# This option should only be used with decoupled projects. More details, visit
# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects
# org.gradle.parallel=true

android.useDeprecatedNdk=true
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

* Override \*\*\*\*\* with the passwords entered above
* Run `yarn release:android`
  * Added `-x lintVitalRelease` to this command is the linting was failing for some reason
* APK built to: ~/android/app/build/outputs/apk/release/app-release.apk
* Upload to Google Play Console, under App Releases/Internal test

## Setup fastlane

https://docs.fastlane.tools/getting-started/android/setup/#setting-up-supply

* Create a service account on Google Developers Console, and link with Google Play Console
  * https://docs.fastlane.tools/getting-started/android/setup/#setting-up-supply
* Save the json key to `~/android/google-service-account-key.json`
* `fastlane init`
  * Service acount json file is: google-service-account-key.json
  * Package name is the one fonud in the Google Play Console, when you click on "All Applications" and you see the name underneath the app title. Will be something like com.reactnativeskeleton

Follow the rest of the setup for "Set up environment variables" and "Use a Gemfile"

From now only when using fastlane use via: `bundle exec fastlane [lane]`
On CI first step should be `[sudo] bundle install`

## Travis setup

* Make sure the app runs locally and can run fastlane on your local machine
* Run `yarn archivecredentials` to create a tar of all the secrets/.env/certificates etc.
* Run `yarn addcredentialstotravis` to encode the tar and add the before_install command to the .travis.yml
