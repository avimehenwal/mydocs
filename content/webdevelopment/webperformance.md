---
title: Web perfromance
tags:
  - web
  - performance
---

# Web perfromance

<TagLinks />

- People who press the buttons once
- People who dont press it at all
- People who press it 100 times, they think it loads faster that way
  - Level of frustration
- Calculate Page Weight Percentiles
- 40% of brands regress on web performance after 6 months
- Perfromance BUdgets
  - less than < 2sec on 2G
  - having less than 150 KB of js on Page
  - Lighthouse scores
- Wallmart and Twitter uses theor own Performance budget tools
- LightWallet
  - PErformance budget tooling for Lighthouse
- Images - single most important aspect
  - Lazy loading
  - SVG placeholder
- Responsive Images
  - Unnecessary to serve images beyond retina desnsity
  - Image CDN
    - Akamai Image manager
    - Imgix
- 3rd Party Code
  - 57% of JS execution code on 3rd party code
  - Defer Google Tag MAnager
  - Lazy load embedded resources
    - Like click to play youtube video controls
- How to deal with expensive libratries
  - bootstrap, jquey, moment.js etc
  - Depricate
  - Replace
  - Defer
  - Tree-shakable dependencies
  - Update dependencies for improvements
- Code -Splitting -React
- JS has a real cost
  - DOwnload JS
    - small bandwidth devices working on 2G, 3G
  - And time to execute JS
    - devices with slower CPUs
  - small JS bundles
- By deafult, browser hide text until the font is loaded
  - its not ideal
  - but fix is also simple, `display-font: swap`
- Pre Fetcing
  - eBay- prefect search results
  - Preddictive prefetching
- Critical CSS
  - in Lining CSS
- Data Saver Modes

- Native Image lazzy loading to google chrome
  - use chrome native lazy loading or
  - fallback to JS library
- Lazy loading also in iFrames

* Examples Sites
  - Netflix
  - Jaboung
    - PRPL pattern
  - Shopy
  - Wallmart Grocery
  - Twitter light for mobile
    - Emoji picker alone is 50kB
  - Google shopping

> Hwo to fit this righ internet content on the smallest package possible

- Find things which you can easily remove, without affecting the performance
  - Text Compresson
  - Minifying JS, CSS
  - Not send resources twice unless necessary
  - Always compress your assets
  - Let browser help load the Critical resourcces first
- Machine Learning to guess and prefetch the resources

- Test and imporove/optimize a sample website

1. Indentify Optimization changes, Audit your page
   - Only use lighthouse on Incognito window
2. Experiment optmization changes in isolation to test each chage performance improvement
   1. Run one change at a time and then audit
3. External stylesheet in a browser
   1. Browser must DOwnload
   2. pasrse
   3. execute that fiels before it can load thast page
   4. Render Blocking
   5. CTRL + SHOFT + P
4. Main thread is busy because of this mineBitcoin function - from our investigation
5. Webpack mode: prodcution
   1. Tree shaking
6. Use Audit reports for improvements
7. Introduce changes one at a time

- Rendering / Shipping HTML, JS, CSS or any other resource from server to client will always have some cost
  - can be runtime
  - or buildtime
- Client Side Rendering
  - They only shipe the shell of HTML content at first request
  - Then client library blocks and attaches itself to repaint DOM, totoal recreation of DOM
  - Is client sidde renderign really a problem in general sense?
  - Larget the client bundle, longer efore user can see ameaningful paint
- Server Side Rendering
  - Everything is pre rendered at server
  - Browser and paint as soon as data is loaded and parsed
  - SEO
  - Performance
  - Data Fetching
- We need both CSR and SSR
  - SSR with Hydratrion
  - vue-server-render

![Cloudnary](https://res.cloudinary.com/avimehenwal/image/upload/v1588335908/blog2/Screenshot_from_2020-05-01_11-41-38_fmmjhh.png)

Your sales can go high up, just because there are more people who can access your content you didnt knew about !

How fast is my WebApp? and on which metric?

`/(?<= )/` -- Look behind RegEx

https://webpack.js.org/guides/code-splitting/
https://discuss.httparchive.org/

Image Optimization
https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization

https://iamakulov.com/notes/optimize-images-webpack/

Cloudinary

- Create cloud account
- Could based
  - media hosting service
  - media transformation servicce
  - Like amazon S3 and photoshop combined
- Upload Imagese to cloud using API Key from UI or from CLI

Image optimizations https://images.guide/

https://httparchive.org/

https://youtu.be/5fLW5Q5ODiE
https://www.youtube.com/watch?v=k-A2VfuUROg

<SimpleNewsletter/>
<Disqus />

[hydration]: https://ssr.vuejs.org/guide/hydration.html
[prpl]: https://web.dev/apply-instant-loading-with-prpl/
