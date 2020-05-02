---
title: vueppress
lang: en-US
tags:
- static
- site
- generator
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

## Vuepress

* All images in `public` folder
* Documentation websites, present how to write code
* Google Analytics
* `READNE.md` translates to `index.html`
* How do we get a Sidebar?
* vuepress is still a SPA
  * navigating inside the same application, faster
  * same goodie for SEO
* vuejs - frontend framework
  * uses vue SSR server side rendering capabilities to genetate HTML
  * runs both on server and client
* vuepress skips server part
* JS is fetched onces, thats why we see loading bar only once
* [ ] Responsive Layout
* [ ] Service Workers
  * locally cached
* Embed interactive vue components into your markdown
* Use noramal HTML
* Register components in `.vuepress/components` folder
* `$site` - metadata for the entire website
* Use relative url

{{ 3+4 }}

The `<pre>` tag defines preformatted text.


<pre style="color:white">
 {{ $page }}
</pre>

<div v-for="i in 3">
 Hello {{ i }}
</div>


### Special README.md file

A subdirectory is invisible to VuePress unless it has a README.md in it. Those README.md files can be blank

The root README.md file must start with a header. It doesn't have to be an H1 (# as shown above) but it should be either H2 (##) or H3 (###) for proper generation of search indexes and sidebars.