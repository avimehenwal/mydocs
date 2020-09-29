---
title: asciidoctor
tags:
- documentation
- asciidoctor
---

# asciidoctor

<TagLinks />

## Pros

* `include` files as snippets
* diagrams

## How it works?

* Parses one file at a time, markup to HTML
* Template Engine [tilt](https://github.com/rtomayko/tilt)

## How to write a book?

> Code your documentation

* Why not use google docs? Throw in some code, text and images and it works.
  * Biggest problem is analyzing what has changed
* import, embedd, include code, images in chapters
* Google docs is not good for version control


HTML, PDF, ePUB, MOBI

### Parts of a book

1. https://en.wikipedia.org/wiki/Colophon_(publishing)
2. Preamble

COnvert all `*.adoc` files
```
asciidoctor -o out *.adoc
```

## References

* https://github.com/apisyouwonthate/book-surviving-apis
* https://github.com/asciidoctor/asciidoctor-reveal.js/tree/master/examples
* https://github.com/bentolor/java9to13
* https://asciidoctor.org/docs/user-manual


<Footer />
