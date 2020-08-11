---
title: Inkscape
tags:
- inkscape
- vector
- graphics
- svg
- illustrator
---

# Inkscape

<TagLinks />

## Introduction

> Similar to Adobe illustrator

* generate SVG crossplatform, for free
* extend Inkscape SVG Filters
  * part of SVG spec 1.0
  * modify render pipeline of graphic application to modify intrim bitmaps
  * lot of artistic control, to pop up design
* Kind of similar how node editor works
* [SVG Spec](https://www.w3.org/TR/SVG2/)
* Live preview
* SVG vs OpenGL primitives where viewing medium is browser
* https://gould.cx/ted/presentations/
* https://gitlab.com/inkscape/inkscape

## PDF to SVG

```bash
inkscape --without-gui `pwd`/screenshot.pdf --export-plain-svg=`pwd`/screenshot.svg
svgo screenshot.svg
```

Pull filters out of SVG images?
:   Put all SVG from web into a special directory. Put all really cool images here to pull filters

    ```bash
    mkdir -p ~/.config/inkspace/filters/
    cp grass.svg ~/.config/inkspace/filters/
    ```

* [Askubuntu - capture svg screenshots](https://askubuntu.com/questions/247878/create-an-svg-screenshot)
* [Possible to take screenshots in vector format](https://apple.stackexchange.com/questions/113869/is-it-possible-to-take-a-screenshot-in-vector-format)
*


## Operations

* How to pan around the screen

Object to Path | Stroke to Path difference?
:   Predefined objects in svg specification like `circle`, `rectangle`, `ellipse`

    Stroke are curves likes, which could be converted to svg `paths`

## Tools and Libraries

Tools             | Description
------------------|--------------------------------
[Cairo](https://en.wikipedia.org/wiki/Cairo_%28graphics%29)   | Vector graphics library written in `C`

## PDF - Portable Document Format

* PDF was standardized as [ISO 32000 in 2008](https://www.iso.org/standard/51502.html), and no longer requires any royalties for its implementation
* independent of hardware, os, application. Looks same everywhere
* written in postscript, LaTex
* created by adobe in 1990's


## :cyclone: References

* [Elements of design](https://inkscape.org/doc/tutorials/elements/tutorial-elements.html)
* [Openclipart](https://openclipart.org/)
* https://www.checkbot.io/article/web-page-screenshots-with-svg/
* [Buys ISO standards at ISO store](https://www.iso.org/store.html)


<Footer />
