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

* workd offline mode
* Security Rules
* Listen for data changes - optimize them
* **5$** per GB download
* Can import, export as `JSON`
* Use `push` to auto generate ID

```
ref().push()
```

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


<Footer />
