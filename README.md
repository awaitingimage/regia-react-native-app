#  Regia Anglorum App

A mobile application for iOS and Android, built using React Native and [Ignite](https://github.com/infinitered/ignite). Regia Anglorum (an ancient term meaning Kingdoms of the English) is one of the world's largest medieval living history and re-enactment societies. This appliction contains: 
* A calendar of events for the society, including both public and private events. 
* Contact and About us information. 
* A color picker and dye guide, by taking pictures of material you can match it to the closest matching colour that has been reproduced using authentic methods.

## :arrow_up: How to Setup

**Step 1:** git clone this repo

**Step 2:** cd to the cloned repo

**Step 3:** Install the Application with `yarn` or `npm i`

**Step 4:** Link native libraries using `react-native link`

**Step 5:** Make sure you have Android or iOS development dependencies installed on your machine. React Native guide [here](https://facebook.github.io/react-native/docs/running-on-device.html)


## :arrow_forward: How to Run App

**Step 1:** cd to the repo

**Step 2:** Run `react-native start`

**Step 3:** Run Build for either OS using `react-native run-ios` or `react-native run-android`


## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
GA_TRACKING_NUMBER=xzy
HOCKEYAPP_ID_ANDROID=xyz
HOCKEYAPP_ID_IOS=asd
```

and access them from React Native like so:

```
import Config from 'react-native-config'

Config.GA_TRACKING_NUMBER  // 'xzy'
```

The `.env` file is ignored by git keeping those secrets out of your repo. You will need to create it locally to get this project working correctly.
