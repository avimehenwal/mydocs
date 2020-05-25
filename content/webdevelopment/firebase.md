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

<Footer />
