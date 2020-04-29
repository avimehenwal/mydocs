---
title: SVG
tags:
- svg
- w3c
- standard
---

# SVG

<TagLinks />

dot language parser
<Dot />

* Emojis area rendered as standard Unicode in browser
* [twemoji](https://twemoji.twitter.com/)
  * multiple image formats - `svg`, `png` and latest Unicode version
  * free to use
  * For open source project to succeed it needs 3 things
    * Fire
    * Light
    * Love

> Do you understand all of the SVG attributes?

viewbox
: art board of the element

g - grouping tag, group
: Folder that contains other paths

svg optimization
: svgo tool
* svgo --pretty file.svg

> very similary to CSS

#### SVG Forkflow

Sensible starting settings
* Define it once in DOM and the use it in the entire project
* Social icons / logos - define them once and then `use`
  * Put them in footer
  * social-twitter
  * social-facebook
  * etc
  * these pathways are defined only once in page in DOM,
  * then target them to any page on in the entire project
* `<use>` tag
  * can set width and height in use
  * call indiviual pathway or group in a SVG calling it by ID
* Capable of so many crazy things, and building performant sites
* Conver JPEGs to SVGs - 38kb to 16kb
  * Image Trace
* How to make SVG accessable - add aria attributes role=presentation
  * Do not want screen reader to read out the entire DOM
  * id attribute is important for accessabile screenreaders
  * Add lang attribute to specify language
*



https://jakearchibald.github.io/svgomg/

<Quote text="SVG is a total party" by="Sarah Drasner" />

### WHy SVG matter

* Can be Tiny, extremely Tiny
  * 2kB gzipped
  * Comparedd to HEro images which are 100 of KBs
* Almost 2/3rds of our performance budgets are spent on busted on images
* Bitmaps vs vector graphics
  * Bitmaps are like Battleship game from childhood, A2, b7
* Beautyful and performant animations
* Accessable settings
* Scales with container
* Adjust Logos on the fly
* Can use it for Layout too
  * preserve aspect ration none
    * scale to whatever container it is in
*

The HTTP Archive Tracks How the Web is Built.
https://httparchive.org/

<Quote text="You cant be a web performance expert without being an image expert" />

::: tip text
One SVG to rule them all.
:::

With SVG its already its own unit in DOM, just put a `g` over that whole sucker and move it around. Animate everything

Font vs SVGs


https://www.google.com/search?q=average+bytes+per+page+by+content+type&newwindow=1&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjFuYPRvIvpAhXpx6YKHcVLAFcQ_AUoAXoECDQQAw&biw=1294&bih=641



```
svg, img, iframe, video {
  max-width: 100%;
}
```

### Fun stuff

> Gaming style SVG, with lightning effects

1. Filters
3. Gradients
4. Gaussian Blur
5. Lightning effects, Glowing effect
6. Distortion Filters - performance negative obviously

## What purpose does xmlns=“http://www.w3.org/2000/svg & version=“1.1” serve?

A thorough explanation would be too much for a post or even a topic. As can be seen here
https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#NamespaceAndDTDIdentifiers 410
the “xmlns” is “XML Namespace” which is needed to use the correct “DTD” - “Doctype Declaration”
Kind of like the “rules” about what elements are allowed, what attributes elements can have, what child tags elements can have, what parent tags elements can have, what they must have, etc.

In other words, it’s kind of like a way of telling browsers “parse the mark-up according to these rules”

How, or even If, browsers actually parse according to the DTD varies, but having a definition to go by is a good thing.

https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#NamespaceAndDTDIdentifiers

All user agents (browsers) ignore the version attribute, so you can always drop that.

If you embed your SVG inline in a HTML page and serve that page as text/html then xmlns attributes are not required. Embedding SVG inline in HTML documents is a fairly recent innovation that came along as part of HTML5.

If however you serve your page as image/svg+xml or application/xhtml+xml or any other MIME type that causes the user agent to use an XML parser then the xmlns attributes are required. This was the only way to do things until recently so there is a lot of content served like this.


## Text Analysis[^1]

> Text mining on the command line

::: tip Linux Tools to help
 ‘grep,’ ‘sed,’ ‘tr,’ ‘column,’ ‘sort,’ ‘uniq,’ ‘awk’
 `wc`, `cut`, `head`, `tail`,

 `tr`
 : translate or delete characters

:::


1. Spellchecker
2. Word count
3. Frequency count
4. Highlight SEO keywords
5. Command line browser [w3m](http://w3m.sourceforge.net/)
6. `diction` - commonly mis phrased words
7. Tokenization is the first step in NLP

```
cat shakes_new.txt | wc | awk '{print "Lines: " $1 "\tWords: " $2 "\tCharacter: " $3 }'

diff --unified=3 --color=always (bat svg.md | psub) (bat svg.md | uniq | psub)

tr ' ' '\n' < svg.md \                  // Tokenization
   | tr '[:upper:]' '[:lower:]' \       // convert uppercase to lowercase
   | sort \                             // sort
   | uniq --repeated --count            // display only repeated results with count
   | sort --reverse --numeric-sort      // displays most frequently used at the top
```

[^1]: https://www.techrepublic.com/blog/linux-and-open-source/automatically-analyze-text-with-these-simple-command-line-tools/

### Spell check markdown files

<quote text="Never send a man to do machines job" by="Agent Smith | Matrix Trilogy" />

Aspell tool with markdown filter can do it
: interactive spell checker

[Hunspell](https://en.wikipedia.org/wiki/Hunspell)
: used by Firefox and chrome
* written in `C++`
* The most popular spellchecking library
*

    find . -name "*.md" -exec Hunspell {} \;



<mark> Highlighted text </mark>

## Markdown-it emoji system

@flowstart ant
m=>operation: markdown-it-emoji
t=>operation: Twemoji-project

m->t
@flowend

## [yarn] Package Manager

* Installs and caches all downloaded packages and then uses them to resolve dependencies


```
[yarn] init                          // generates empty package.json
[yarn] add / remove / list
[yarn] -D                            // dev dependencies
[yarn] cache dir | clean             // list cache packages
[yarn]
```
[yarn]: https://yarnpkg.com/

::: warning latina-1 Unicode decode error
```
UnicodeEncodeError: 'latin-1' codec can't encode character '\u2587' in position 0: ordinal not in range(256)
```
:::

[Glyph](https://en.wikipedia.org/wiki/Glyph)

termgraph  --custom-tick "😀" data//ex1.dat
TICK - bar is the problem

Test if terminal supports Unicode

echo -e '\xe2\x82\xac'
echo $TERM
echo $LANG

https://www.cl.cam.ac.uk/~mgk25/ucs/examples/UTF-8-demo.txt
https://pixelia.me/

> You might want to use basic HTML for accessability

Do not create radio buttons without radio buttons HTML markup

## SVG animations

::: tip [SVG Animation - WIkipedia](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics#Scripting_and_animation)
SVG drawings can be dynamic and interactive. Time-based modifications to the elements can be described in SMIL, or can be programmed in a scripting language (e.g. ECMAScript or JavaScript). The W3C explicitly recommends SMIL as the standard for animation in SVG.[8]

A rich set of event handlers such as "onmouseover" and "onclick" can be assigned to any SVG graphical object to apply actions and events.

SVG images, being XML, contain many repeated fragments of text, so they are well suited for lossless data compression algorithms. When an SVG image has been compressed with the gzip algorithm, it is referred to as an "SVGZ" image and uses the corresponding .svgz filename extension. Conforming SVG 1.1 viewers will display compressed images.[9] An SVGZ file is typically 20 to 50 percent of the original size.[10] W3C provides SVGZ files to test for conformance.[11]

SVG Tiny (SVGT) 1.1 and 1.2 are mobile profiles for SVG. SVGT 1.2 i
:::

Content Type: application/smil+xml

## [SMIL](https://en.wikipedia.org/wiki/Synchronized_Multimedia_Integration_Language)

Synchronized Multimedia Integration Language (SMIL (/ˈsmaɪl/)) is a World Wide Web Consortium recommended Extensible Markup Language (XML) markup language to describe multimedia presentations. It defines markup for timing, layout, animations, visual transitions, and media embedding, among other things. SMIL allows presenting media items such as text, images, video, audio, links to other SMIL presentations, and files from multiple web servers. SMIL markup is written in XML, and has similarities to HTML.

SMIL 3.0 became a W3C Recommendation in December 2008. It was first submitted as a W3C Working draft on December 21, 2006.[2] The last draft revision was released on October 6, 2008.[3][4]

The internet video site Hulu uses SMIL as part of its media playing technology.[citation needed]

[Chrome SMIL deprecation notice](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/5o0yiO440LM%5B126-150%5D)

[SMIL Browser support](https://caniuse.com/#feat=svg-smil)

https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL

[SVG Animation](https://en.wikipedia.org/wiki/SVG_animation)

[Browser ACID3 test](http://acid3.acidtests.org/)

### Image tracig softwares

https://en.wikipedia.org/wiki/Image_tracing


## Webpack

[How to add source-map to webpack](https://youtu.be/qWDwHRZfbDo)
: use source maps
* to eactly pin point which file and line number error is at in chrome devtools
* From gemeric `bundle.js` errors to specific file and line no in error messages

https://codepen.io/shshaw/pen/LVKEdv
https://jakearchibald.github.io/svgomg/

Jobs at guthub
https://boards.greenhouse.io/github


### Quora Business model

* Run ads on specific questions, topic
* Greatly Increase the amount of knowledge in workd
* Try making new Internet Products

## Build a web product with SVG

https://github.com/SVG-Edit/svgedit

> change SVG images properties on click events from UI

* What makes SVG different from png, JPEGs
* Manupulate it on the fly in browser

So you are looking for raster to vector graphics converter/tracer. potrace & autotrace both are in Ubuntu repository. Myself I tried potrace before which gave nice results with default options. As I remember, both tools do not support compressed formats as input, only bitmap images.

See Potrace examples
convert [input-options] input-file [output-options] output-file
his embeds a raster image in the SVG instead of converting to a vector image

  potrace 1.16. Transforms bitmaps into vector graphics.

BMP is both uncompressed and lossless. PNG is compressed but lossless. Thus, with a lossless format the only visible difference is the file size. I'd recommend using PNG over BMP unless you can't for compatibility reasons.

There's no quality difference between BMP & PNG format (except PNG is compressed using deflate algorithm).

BMP8 can be compressed using RLE (run-length-encoding) algorithm, but BMP16/24/32/64 doesn't support compression yet.

BMP32 support alpha channel just like PNG32 support transparency.

convert 2017.png 2017.pnm
potrace 2017.pnm -s -o 2017.svg

https://en.wikipedia.org/wiki/Comparison_of_raster-to-vector_conversion_software

https://github.com/jankovicsandras/imagetracerjs

https://stackoverflow.com/questions/8190684/differences-and-similarities-between-svg-and-css3-animations

<SimpleNewsletter/>
<Disqus />
