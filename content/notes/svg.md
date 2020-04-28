---
title: SVG
tags:
- svg
- w3c
- standard
---

# SVG

<TagLinks />

* Emojis area rendered as standard Unicode in browser
* [twemoji](https://twemoji.twitter.com/)
  * multiple image formats - `svg`, `png` and latest Unicode version
  * free to use
  * For open source project to succeed it needs 3 things
    * Fire
    * Light
    * Love

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


## Webpack

[How to add source-map to webpack](https://youtu.be/qWDwHRZfbDo)
: use source maps
* to eactly pin point which file and line number error is at in chrome devtools
* From gemeric `bundle.js` errors to specific file and line no in error messages


<Bar text="Skill3" color="red" len=20 />
<Bar text="Skill1" color="yellow" />
<Bar text="Skill2" len=100 />



<SimpleNewsletter/>
<Disqus />
