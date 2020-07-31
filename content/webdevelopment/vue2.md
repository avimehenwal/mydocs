---
title: VueJS
tags:
- vue
- javascript
- frontend
- framework
---

# Vue 2

<TagLinks />

* `Template` section in components needs one top level root element, in contrast to vue3 which can have multiple root elements.
* Use `props` and named `v-slots` with components
* [Vue Components | Vue Plugins | Vue Mixins](https://stackoverflow.com/questions/50474317/vue-js-components-vs-plugins-vs-mixins#:~:text=Components%20can%20be%20extended%2C%20doing,functionality%20to%20an%20existing%20component.)
  * component is individual unit in itself
    * Vue components by nature are meant to be re-used. SFC
    * [How to package vue components for npm ?](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html)
  * Mixin add functionality to an existing component
    * could be global
  * Plugins - distribute components
    * Plugins usually add global-level functionality to Vue

```mermaid
graph LR
A(Component.vue):::blue
B([Vue-2,3 compiler]):::green
C(html, css, js):::yellow
A -- source --> B -- compiles --> C
classDef green fill:#1f9,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
```

### How Properly packaging your SFC for distribution via npm?

* Universal Module Definition (UMD) API
* https://unpkg.com/
* [How to add components from npm with nuxtjs?](https://stackoverflow.com/questions/60735985/cant-add-npm-package-to-nuxt-js-vue-star-rating/60743990#60743990)
* https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
* https://github.com/craigh411/vue-star-rating

```mermaid
graph LR
A(draw 1 SVG star.vue):::yellow
B(Draw 5 in a row.vue):::green
C([.ts export 5 stars]):::blue

A -- exports --> B == exports ==> C

classDef green fill:#1f9,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;

click A "https://github.com/craigh411/vue-star-rating" "Click to open Github Repository"
click B "https://github.com/craigh411/vue-star-rating" "Click to open Github Repository"
click C "https://github.com/craigh411/vue-star-rating" "Click to open Github Repository"
```



*[SFC]: Single File Component

<Footer />
