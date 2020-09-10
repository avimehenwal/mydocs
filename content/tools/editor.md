---
title: Text Editor
tags:
- editor
- text
- processing
- vscode
---

# Text Editor

<TagLinks />

* [vim and vscode cheatsheet](https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/cheatsheet/)

## Features I use

* Relative numbering - useful for vim jumping
* map CASP as ESC, close to hand and easier to press
* Refactor -> extract string to local variable

## vsCode

* Lead by [Erich Gamma] - author of Gang of Four design pattern book
* Language Server Protocol - RPC
  * debugger - can change values
  * compiler
  * linting
  * widgets
  * for java written by Red Hat
  * code lens
* Java language server built on top of eclipse platform

* vim like smart selection `editor.action.smartSelect.expand` <kbd>ctrl</kbd> + <kbd>w</kbd> and <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>w</kbd>

### Snippets

* Nested snippet arguments are possible, one inside other
* look at how the extensions work for yourself
  * `cd ~/.vscode; code -n .`

### Extension API

* https://code.visualstudio.com/api
* steps
  * first make
  * then publish `vsce`
* Hello World
  * Register a command
    * in package.json
  * alert window on command execution
* When to activate extension? Activation Events
* contributions Points in package.json file
* languague syntax higlighting
  * Tokenization
  * Grammer rules by regex
    * textmate grammer language `xml`, `json` or `yaml` format
    * look for **tmbundles** or `plist` in source repose
      * like for **stylus**
* [Capabilities](https://code.visualstudio.com/api/extension-capabilities/common-capabilities)
* Webview API
  * markdown rendered preview


### How to create a file from a template?

#### Tools already using it

1. hugo new
2. hacking CLI tools
3. vue CLI
4. vim snippets

#### Tools to make scaffold

1. Templating languages - python
   1. jinja
   2. cheetah
2. Yeoman - nodejs

::: tip
why not create your own? CLI tool
:::



### Debugger

> conditional debugging

* What if I want to add breakpoint only when a specific value (url request) is made?
* How to watch for variable value change?
* or a value of a variable is of some special interest type

## Text Editor vs IDE

* IDE like xCode for swift,
* Provides widgets

### Online website idea

* https://realusermonitoring.io/
* https://testfort.com/qa-consulting
* Puppeteer vs Selenium
* https://www.webpagetest.org/
* https://developers.google.com/web/tools/chrome-devtools
* https://stackoverflow.com/questions/42854865/what-is-the-difference-between-cloud-functions-and-firebase-functions


*[IDE]: Integrated Development Environment

[Erich Gamma]: https://en.wikipedia.org/wiki/Erich_Gamma

## Resource

* https://stackoverflow.com/questions/50571130/vs-code-how-to-create-templates-for-file-extensions

<Footer />
