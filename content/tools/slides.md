---
title: "Custom Options With Frontmatter"
theme: night
highlightTheme: tomorrow-night-bright
slidenumber: true
---

# Title

* Point 1
* Point 2

set theme and title from frontmatter

Press <kbd>esc</kbd> or <kbd>o</kbd> for overview mode
---

## Second slide

<!-- .slide: data-background="./image1.png" -->

> Best quote ever.

set background image with [reveal-js attributes](https://revealjs.com/markdown/#slide-attributes)

Note: speaker notes FTW!

---

### Export to

1. pdf
2. static site

---

```js
console.log('Hello world!')
```

---

## Fragments

place below the object to be delayed

![image](./image1.png)
<!-- .element: class="fragment" -->

---

## Maths

$$ J(\theta_0,\theta_1) = \sum_{i=0} $$

----

## Vertical Slide

using 4 dashes `----`

---

<section data-transition="zoom">
  <h2>This slide will override the presentation transition and zoom!</h2>
</section>

<section data-transition-speed="fast">
  <h2>Choose from three transition speeds: default, fast or slow!</h2>
</section>

---

<section data-transition="slide">
    The train goes on …
</section>
<section data-transition="slide">
    and on …
</section>
<section data-transition="slide-in fade-out">
    and stops.
</section>
<section data-transition="fade-in slide-out">
    (Passengers entering and leaving)
</section>
<section data-transition="slide">
    And it starts again.
</section>