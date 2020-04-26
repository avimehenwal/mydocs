---
title: NativeScript
tags:
- native
- nativescript
- mobile
- development
- android
- ios
---

# :iphone: Native Script

> Create Native iOS and Android Apps with JavaScript

::: tip
Write codebase once and use everywhere (both in android and iOS) philosophy

:star: saves development times
:::

* Tools for developing [NativsScript] apps
  * Playground
    * Run app development directly on device
    * Avoid hassle to install android virtual device AVD in the first place
  * Sidekick
    * electron based desktop App
    * Prebuilt [templates] (including Authentication)
    * cloud builds
    * sidekick uses CLI under the hood
  * CLI
    * automatically detect devices and deploy app to them

### Advantages

> Where it shines

1. Apps are truly native
   1. :star: Writing native code without knowing a line of swift and java
2. Nativescript Marketplace
3. with VueJS + [NativeScript] Framework
   1. Code Sharing - new plugin
   2. Using devTools
   3. Typescript + vue (vue3 is going to be rewritten in typescript from ground up)

```
npm install -g nativescript

tns create my-app-name --template tns-template-master-detail
cd my-app-name
tns run

```

::: danger On Ubuntu 20.04 LTS

```
dpkg: dependency problems prevent configuration of nativescriptsidekick:
 nativescriptsidekick depends on gconf2; however:
  Package gconf2 is not installed.
 nativescriptsidekick depends on gconf-service; however:
  Package gconf-service is not installed.
 nativescriptsidekick depends on libappindicator1; however:
  Package libappindicator1 is not installed.
```
:::

How to solve dependency problem automatically?

```sh
sudo apt --fix-broken install

# Instruct dpkg to "fix" itself
sudo dpkg --configure -a

# This will instruct apt-get to correct dependencies and continue to configure your packages.
sudo apt-get -f install

sudo apt install libavahi-glib1 --reinstall
```

[How to installing Android SDK](https://stackoverflow.com/questions/34556884/how-to-install-android-sdk-on-ubuntu)
```sh
sudo apt update
sudo apt install default-jdk
```

::: details java --version
```
openjdk 11.0.7 2020-04-14
OpenJDK Runtime Environment (build 11.0.7+10-post-Ubuntu-3ubuntu1)
OpenJDK 64-Bit Server VM (build 11.0.7+10-post-Ubuntu-3ubuntu1, mixed mode, sharing)
```
:::

## Android Studio

[Donload Android Studio for Linux](https://developer.android.com/studio#download)

```
sudo snap install android-studio --classic
android-studio

sudo unzip ./commandlinetools-linux-6200805_latest.zip -d /usr/local/android/sdk

sudo $ANDROID_HOME/tools/bin/sdkmanager --sdk_root=$ANDROID_HOME "tools" "emulator" "platform-tools" "platforms;android-28" "build-tools;28.0.3" "extras;android;m2repository" "extras;google;m2repository"

sdkmanager --list
```

::: details Gtk-WARNING Locale not supported by C library
Gtk-WARNING **: 10:15:00.032: Locale not supported by C library.

```
sudo apt install -y language-pack-en-base
sudo dpkg-reconfigure locales
```

Yourself only - $HOME/bin like @waltinator said
You and other local users - /usr/local/bin
root only - /usr/local/sbin
:::

::: details Failed to load module "canberra-gtk-module"
Install the missing modules
```
sudo apt install libcanberra-gtk-module libcanberra-gtk3-module
```
:::

Add AVD (Android Virtual Device) - image might be as big as 1GB

* How to connect with community when we need help?
* markup is NOt translated to HTML but rather completely native iOS and android native componetnts
  * `<Label>` :arrow_forward: UI Label on iOS and `.widget.text` on android
* Native mobile contrils, UI Table view for iOS,  optimizes whne bulk data is loaded
* Need to you have native android and iOS SDK setup in place to setup your system

* How is mobile development different from traditional web development?
  * Ddevelopers have to worry about hardware buttons, back and up
  * Need to request device sensor data access
* What makes mobile development unique experience?
  * Access to device sensor data to Apps
  * like geolocation, camera, sound, touchscreen gestures
* Why is it today so popular? Some research facts
  * Popple use Apps more than the webbased apps in cell phone - fact/data
* Examples on who is using what framework? Techlead technologies
* Mobile App Expectations
  * Butter smooth animations, UX
* Available Technologies

![Framework](/framework.svg)

## Tarot Card Reading App

* How does the app look like? Solve the problem first
* How many screens, pages would it have?
  * Card of The Day screen
  * a list of All Cards with a modal popup giving standard and reversed meanings,
  * a screen showing cards for Past, Present and Future, a simple Tarot layout
* [Choose from prebuilt CSS themes](https://docs.nativescript.org/ui/theme)
* Device Navigation Strategy
  * [manual routing](https://nativescript-vue.org/en/docs/routing/manual-routing/#app)
* Build DataStructrures to display data

## Apps Usecards

1. Grocery List
2. ToDo List
3. Tic Tac Toe Game
4. Daily Quotes
5. Any interesting topic from wikipedia
6. Weather App
7. Chakra App
8. Anime Listing App
9. Anime Quotes
10. Ticketing Application

## Layouts

* Can place Objecct horizontally or vertically in stacked layouts
* Grid Layouts - most widely used
* Nested Layouts are possible
* Identify device type to take styling changes
  * isTablet
  * isMobile
* Request Access to camera - `nativescript-camera`

## Nativescript + Firebase Platform

> collection of service to build apps on top of reliable cloud infrastructure

* Register each individual app and platform we are running on
* Firestore
*


## Examples

https://github.com/jlooper/mixology-mobile
https://github.com/NativeScript/sample-Groceries




---

### Resources

* [Native script Worksop](https://nsvue-workshop.netlify.app/docs/)
* https://github.com/nativescript-vue/vue-cli-template
* https://github.com/EddyVerbruggen/footplr

[NativeScript]: https://www.nativescript.org/
[sidekick]: https://www.nativescript.org/nativescript-sidekick
[templates]: https://market.nativescript.org/?tab=templates
[NativeVue]: https://www.nativescript.org/vue
[projects]: https://github.com/topics/nativescript-vue