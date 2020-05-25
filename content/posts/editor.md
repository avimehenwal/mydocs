---
tags:
- editor
- vscode
---


# Editor Hacks

## vsCode

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


## Resource

* https://stackoverflow.com/questions/50571130/vs-code-how-to-create-templates-for-file-extensions