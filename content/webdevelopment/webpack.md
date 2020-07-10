---
title: Webpack
tags:
- webpack
- buildtool
- build
- tool
---

# Webpack

<TagLinks />

## Why do we need webpack?

Generic way of consuming JS on on webpage

* Script tags
  * jQuery repreccursions
* Put everything into one BIG JS file
  * scoping
  * maintenance
* Modules
* ESM

webpack
: javascript bundler. Creates bundles

loaders
: By default, webpack deals only with JS files, but we might need other assets as well
like images, vue files, css, html templates files, preprocessing, postprocessing etc

plugins
: do fancy stuff with loaded files. Vuetify etc

* builds internal dependency graph
* configure webpack to give us the static bundles
* Use vue-cli to make custom webpack configs
  * `vue.config.js`


## Rollup

> Another build tool similar to webpack, grunt, browserfy

* Bundles only the packages which are actually used in source, unlike webpack which bundles everything together
* results in small final source bundle
* built for ES6
* compiler a JS



*[JS]: JavaScript

<Footer />
