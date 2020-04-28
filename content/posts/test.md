---
tags:
- test
- markdown
---

# Sitegenerator home

* where to place assets files, dot files
  * https://code.visualstudio.com/docs/editor/variables-reference\
* https://github.com/z3by/vuepress-theme-modern-blog
* https://github.com/FriendlyUser/vuepress-theme-cool-starter
* https://github.com/wowthemesnet/mediumish-vuepress-blog-theme
* [vuepress themes](https://jamstackthemes.dev/ssg/vuepress/)

```
docker run --name blog --rm -d -p 8080:8080 -v (pwd):/blog avi/vuepress

docker stop blog; && docker container ls

docker stop blog; docker container ls; docker run --name blog --rm -d -p 8080:8080 -v (pwd):/blog avi/vuepress
```

![One](/one.png)
![Two](/two.png)
![Three](/three.png)

[[toc]]

#  Hello VuePress

> adsnfiosndfon nosdfn bnsiodnf ds

Labore esse cupidatat sint pariatur ad consequat et sit aute eu non cupidatat cupidatat proident. Dolore qui labore amet ea excepteur fugiat sunt veniam laboris occaecat esse nostrud. Laboris amet ipsum irure irure minim tempor quis. Sunt dolor et amet Lorem eu. Aliqua amet excepteur consequat id ad. Ut exercitation magna excepteur ex ex sint id anim deserunt.

something
:: define that


::: v-pre
`{{ This will be displayed as-is }}`
:::

<mark> Hihlighted text </mark>

## Badge

<Badge text="warning" type="warning"/>
<Badge text="tip" type="tip"/>
<Badge text="danger" type="danger"/>
<Badge text="default theme"/>

:tada: :100:

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

1. nskodnf
2. dsnfiosdnf
3. nio fnadsiofn
4. ndsaio fnsdpfm
5. aodfpnopsdfm[sadf
6. adsfm
7. ]

<Bar text="Skill - 1" color="red" len=20 />
<Bar text="Skill - 2" color="yellow" len=40 />
<Bar text="Skill - 3" color="green" len=60 />
<Bar text="Skill - 4" len=100 />


# Heading 1

## Heading 2

**bold** text

### Heading 3

*italics* text

#### Heading 4

some `code` text

##### Heading 5

~strikedout~ text

###### Heading 6

* nsioadfni nioasdnf[anything]
* boasidnfion sd
* fnsioad fnosdin
  * niosdanfio sndf
  * ns iodfnsodnf
    * ndsnfiods fnosdinfo [nsdopf]
    snfios nfnspdfm
    n iofdsnofns'df
    n osdnfo'dsfn
    * siofdbiosadfnsd
    * nidsonfiosndf
  * bidofnsdiof
* ikknsfonosdnfsnd

## New nodejs env setup

```
sudo apt install nodejs
sudo apt install npm

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn

yarn global add vuepress
```

https://www.npmjs.com/package/vuepress-plugin-mailchimp

---

[anything]: https://github.com/avimehenwal/mydocs
[nsdopf]: https://github.com/avimehenwal/mydocs

## Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

## Abbreviations

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

How to add ads on vuepress website
: https://www.npmjs.com/package/vuepress-plugin-google-adsense