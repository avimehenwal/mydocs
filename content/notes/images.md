---
title: Images
tags:
- image
- png
- jpeg
- gif
---

# Images

<TagLinks />

* iPad Apps Adobe Fresco and GoodNote exports in `pdf` format
  * I want `svg` format. Saves data sent over network
* Inkscape can make svg's
* HOw to capture screenshots in svg format?

Filetype | Size | Quality Remark
---------|------|-----------------
png     | 83.2kb  | decent
svg     | 114.2kb | decent

Caputure screenshots directly in SVG?
* https://superuser.com/questions/579933/is-it-possible-to-take-a-screenshot-of-a-web-page-as-an-svg-image

## Why use Vector Images

1. Looks better on bigger displays,
   1. Raster images as per design are made to be of fixed dimensions and details and do not scale
2. Smaller data than full bitmap image


## Raster to Vector Image converter tools

* Pixels
* Bit depth
  * jpeg images are already 8-bit. Details are already lost
  * Use raw format for better manupulation

* [Image File Formatss](https://en.wikipedia.org/wiki/Image_file_formats)

### Raster Formats

* gif
* png
* tiff

### Vector Formats

* svg



### Inkscape

Doesnt traces the image, just embed the raster content into vector elements.
We do not get the advantage

How do we circumvent this problem?

```sh
potrace
```

[Trace Bitmap](https://inkscape.org/doc/tutorials/tracing/tutorial-tracing.html)

## Image Compression Techniques

* https://en.wikipedia.org/wiki/WebP

### How do computers store image?

as $0$ and $1$

$$ Pixel = Picture + Element$$

Unicode encoding

What we as a specie can accompilish

Transistor , Wheel, Fire

4 Billion transistor inside a 2x2 CPU chip

It takes about 400,000 transistors in our computer to render a image on screen. This is how
hard your computer works

<iframe width="560" height="315" src="https://www.youtube.com/embed/EXZWHumclx0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Postscript

* Programming language develpoped by adobe
* big languauge with 400 operators in all
* Far more than 2 dimensional graphics language
  * Turining complete language
* Interpreted languague
  * like python, javascript, bash
* stack based
* Ghostscript
  * is GNU interpreter for postscript


## Resources

* https://en.wikipedia.org/wiki/Spatial_anti-aliasing

<Footer />
