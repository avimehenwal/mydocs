---
title: Nuxt JS Framework
tags:
- nuxt
- nuxtjs
- js
- javascript
- vue
- framework
---

# Nuxt JS Framework

<TagLinks />


How to use external resources, on all pages or on a particular page? `<script>`, `<link>` tags?
:   Add `head` Object

    Also possible to add external resource at the end of body using `body: true`

    ```html
    <script>
    export default {
      head() {
        return {
          script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
          ],
          link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
          ]
        }
      }
    }
    </script>
    ```

how to use route guards with nuxt?
:   Using [nuxt middlewares](https://nuxtjs.org/api/pages-middleware/)

Does nuxt uses lazy route loading like vue-router?
:   It's likely preloaded, which is a benefit rather than a disadvantage.

    That means that components for the current route are loaded first, then the other components will be preloaded/prefetched.

    But you can[ disable that behavior if you need to.](https://nuxtjs.org/api/configuration-render#resourcehints)

    Code splitting and lazy loading already work out of the box as you described it.

    [Stop prefetching](https://stackoverflow.com/questions/60500122/how-to-disable-lazy-loading-for-specific-routes-in-nuxt-js)

How to use and add google fonts in project?
:   Use google fonts

    ```js
    link: [
      { rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:300,600|PT+Serif&display=swap'
      }
    ]
    ```




<Footer />
