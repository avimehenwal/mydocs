---
title: Firebase
tags:
- firebase
---

# Firebase

<TagLinks />


* Project Settings > you Apps
* Initialize Firebase in your app (no need to include your Firebase config object when using reserved Hosting URLs):
* If I add firebase.js to head in config.js, it gets loaded for every page. Thats not what is required. For efficiency, should only load on contact me page
* [How to add external JS scripts to VueJS Components](https://stackoverflow.com/questions/45047126/how-to-add-external-js-scripts-to-vuejs-components)
  * https://github.com/vuejs/vue-loader
  * One could ask, why would you event want to include a `<script>` tag inside a template in Vue. The reason why I stumbled into it was to load an external script only on specific pages.
  * Multiple solutions
    * Embed script tag direcctly into template
    * Use javascript to add script tag to DOM
    * Use webpacka nd vue-loader to do your work
* If you use reserved Hosting URLs, your Firebase config is automatically pulled from your Firebase project, so you don't need to explicitly provide the object in your code.
* Associate project to use firebase use --add
* https://github.com/pagekit/vue-resource
* Auto saving forms from vue and firestore
  * something like google docs
* vue dependencies
  * firebase
  * vuefire
    * firestore() methos is exposed to component properties by vuefire plugin
  * debounce


How javascript is parsed by browser?

* Image tags are fetches asynchronously, non blocking
* script tags are blocking, parsing stops until script is fwetched
  * thats why script tags are at the very bottom of page, so that images can load nbefore that

## Authentication

* maintains session
* unique id acrosss all platforms
* Note: By default, authenticated users can read and write data to the Firebase Realtime Database and Cloud Storage.

## Realtime Database

> Immutable snapshots of data references

* workd offline mode
* Security Rules
* Listen for data changes - optimize them
* **5$** per GB download
* Can import, export as `JSON`
* Use `push` to auto generate ID
* use `metadata` to add public flags
  * easy to write rules that way

Database rules language

```json
"games": {
  // wildard location
  "$gameId": {
    // metadata object in data
    "metadata": {
      ".read": true
    },
    // rules cascade
    "gameContent": {
      ".read": "auth != null || data.child('isPublic').val() === true"
    }
  }
}
```

```sh
ref().push()
```

![firebase database rules](../.vuepress/public/screenshots/firebase-database-rules.png)

![firebase request object](../.vuepress/public/screenshots/firebase-request-object.png)
![database schema](../.vuepress/public/screenshots/database-schema.png)

## Cloud Firestone

> use this, its newer

* If the document does not exist, it will be created. If the document does exist, its contents will be overwritten with the newly provided data, unless you specify that the data should be merged into the existing document, `{ merge: true }`
* with an auto-generated ID, `.doc().set(...)`
* To update some fields of a document without overwriting the entire document, use the `update()`
* Transaction and batched writes

```
collect.doc()
```

## Google Big Query

Connected Sheets allows users to analyze billions of rows of live BigQuery data in Google Sheets without requiring SQL knowledge.

## Emulators

Run and test database rules locally and generate reports.

* Emulator first development

## Security

1. Authentication
   1. verifying users who they say they are
      1. Anonymous Authentication
      2. username / password
      3. OAuth from external providers
2. Authorization - Firebase Rules
   1. who has access to what

## Storage

* security rules may look different but concepts are same

![storage schema](../.vuepress/public/screenshots/storage-bucket.png)

![storage security rules](../.vuepress/public/screenshots/storage-security-rules.png)

## Analytics

* How to measure if you app (business) is working or not?
* Completely free and completely unlimited, cross platform

## Cloud Functions

> Managed backend solution

* [SDk Reference](https://firebase.google.com/docs/reference/functions)
* [Source Code](https://github.com/firebase/firebase-functions)
* Event triggers a function (database change, https call, new user register)
  * great for webhooks, stripe, twilio, slack
* scales up and down
* write complex thoughts clearly
* play with code before - **Pyramid of Doom**
* node version 8 adds `async` and `await` - Hey I need a value and not a promise
  * async/await, simplifying promise management

* [cloud function Examples](https://github.com/firebase/functions-samples/tree/fa9f9dedd8d4ebd74752fb44ece9ffeedfde390e)

### Cloud Function Security

> Restricting access

* https://stackoverflow.com/questions/58178243/is-there-a-way-to-restrict-public-access-from-firebase-callable-could-functions
* https://stackoverflow.com/questions/47948561/are-google-cloud-functions-protected-from-ddos-attacks/49282490


```js
const functions = require('firebase-functions');

exports.scheduleSampleJob = functions.https.onRequest((req , res) => {
     let auth = req.header('Authorization');

     if(auth == 'YOUR_API_AUTHORIZATION_KEY'){
         // valid Authorization key, process the call
     }else{
         //send forbidden if Authorization key not valid
         return res.status(403).send('Access is Forbidden');
     }
});
```

## No SQL database for SQL developers

> Structure your data as it would be needed in the view

* firebase databse provides security language to put constraints on JSON entered
  * based on rules language it can accept/reject
* How would we model a events app database in noSQL?
  * Users, Events and Attendes Tables
  * SQL - join query to get all attendes for an event

```sql
SELECT
  event.Name as EventName,
  event.Data as EventDate,
  user.Name as UserName
FROM Events as event
INNER JOIN Attendes as a
  ON e.Id === a.EventId
INNER JOIN Users as User
  ON u.UId = a.UId
WHERE e.Id == 4;
```

![Event Planner app schema](../.vuepress/public/screenshots/events-planner-app-scema.png)

* Pagination using query limiters
* Can attach value listener to data values, realtime updates
* joins using callback references
* NOrmalization vs Denormalization (duplication of data to remove querying)
* When to denormalize data?
  * Based on your view
* Add lookups in your json object to cross query tables

```json
userEvents: {
  eventId: {
    fm: true,
    otherEvent: true,
    coolEvent: true
  }
}
```

* Multipath updates using promises


<Footer />
