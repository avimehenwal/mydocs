---
title: Vuejs 3
tags:
- vue
- javascript
---

# Vuejs 3

<TagLinks />

## Why vue3

<mark>Major changes</mark>

* Rendering improvements
  * Additional Compiler switches sent with code
* Written in typescript
* Composition API

Bottleneck of traditional DOM

The performance of traditional virtual DOM is determined by the total size of template
rather than the amount of synamic content in it.

How to solve this problem? Tackeling performance problem

Template --prase usinf compiler->
javascript render functions returning vurtual DOM treees
 --> internal rendering engine and diffing

Look for synamic content in templates, like v-for and v-if for logical block
* Lot of people write lot of markup in theor template
* If a piece of tempalte only containe a single dynamic binding, its inefficient to walk throught the whole template tree and diffing everything just to find out a single {{message}} has changed
* Divide templates into blocks, block tree
* reduce the amount of recursive traversal by magnitude
* All static content hoisted outside render functions
* Average improvement is more than 100% in chrome

## New Vue Compiler

* Full sourcce map support
* Plugin based transform pipeline
* Layered design for higher order compiler
* Advanced block basedsynamic part tracking'
* Static tree hoisting
* Event handler caching
* Stable slots detection

https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%3EHello%20World!%3C%2Fdiv%3E%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22prefixIdentifiers%22%3Afalse%2C%22optimizeBindings%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%7D%7D

* HOw vuew compiles template
* HOisting helpful during hydration
* Server Side Rendering

3X better SSR performance than vue2

* New SSR compilation strategy

## DOM

* Programming interface, wholedocument as XML tree structure
* Connects JS to HTML
  * What pages to render
  * Which events to respond to
* UPdating the DOM s inefficient
* What creates DOM tree?
  * Rendering Engine => webkit in chrome
* Which porblem does virtual DOM solves?
  * Instead of applying all the changes to real DOM we first apply them to virtual DOM
  * Which doesnt get rendered in real browser
  * it is really cheap
  * Editing a blueprint, raher than rebuilding the whole building
  * Batch changes together for efficiency

## Virtual DOM

* Tree datastructure with JS objects
* Exists in memory and never rendered
* Same idea used by Angular, React and vue2
* Also workd for mobile devices like ReactNAtive, NativeScript

How does it handles State Changes?

* Tree is rebuilt completely on state changed
* At any given point there are 2 virtual trees that exists in memory at the same time
* Compare 2 trees, get the difference between them and then reconsile the changes by creating the patch
* Diffing Algorithm - minimum number of operations necessary
* Diffing vs Reconcialation
  * O(n3) complexity problem
  * O(n) heuristic
  * Breadth First Search
* Createa a whole copy of exactly real DOM
* Javascript representation of real DOM nodes
  * Compare virtual DOMs and get the minimal number of changes each time we nedd to update the DOM


When the first specification for the DOM was released in 1998, we built and managed web pages in very differently. There was far less reliance on the DOM APIs to create and update the page content as frequently as we do today.

Simple methods such as document.getElementsByClassName() are fine to use on a small scale, but if we are updating multiple elements on a page every few seconds, it can start to become really expensive to constantly query and update the DOM.

The virtual DOM was created to solve these problems of needing to frequently update the DOM in a more performant way. Unlike the DOM or the shadow DOM, the virtual DOM isn't an official specification, but rather a new method of interfacing with the DOM.

https://vuejsdevelopers.com/2017/02/21/vue-js-virtual-dom/

<SimpleNewsletter/>
<Disqus />
