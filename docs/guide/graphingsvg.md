---
tags:
- graphviz
- svg
- plott
- chart
---

# [Graphviz]

> Programm the graph plotting

[[toc]]

::: warning
29 years ago, written in **C**
:::

[DOT language scripts](https://en.wikipedia.org/wiki/DOT_(graph_description_language))

  * Directed Graph
  * Undirected graph

## [graphviz] tools

tool  | description
:----:|:-------------
dot   |  hierarical model layout
neato |  spiral model layout
fdp   |  spiral - Fruchterman-Reingold heuristic
sfdp  |  multiscale version on fdp
twopi |  radial layouts
circo |  circular layouts

### What can graphwiz do?

1. Plott Graphs
   1. directed
   2. undirected
2. Flowcharts - changing graph node shape
3. Entity Relation model - ER models
4. Tabular, hoerarical Database Schemeas
5. Finite Automata FAM
6. Network Connections

### Graphviz alternatives

1. [plantuml]
   1. java based
2. [graphviz]

### Interesting Use cases

1. plott package dependency graphs
   1. in yocto
   2. in PyCharm
2. plott directory hierarchy / Folder structure
3. Network diagrams

### Others

* How to make charts with just vanilla SVG[^1]
  * Sparklines - lines at an angle
  * Pie charts - circle with and an arc
  * Bar chart / histogram - filled rectangles
* Use vsCode SVG snippets and extensions to help writing SVG markup
* [SVG snippets examples](https://github.com/jorgeatgu/SVG-Snippets)

## How to make vsCode snippets and Extension and publish them?

> Emmet shortcuts

* `!TAB` to print html boilerplate
* tab stops `$0`, `$1` where you want your cursor to be after snippet is pasted
* Placeholders are tabstops with values, like `${1:foo}`
* Placeholders can be nested, like `${1:another ${2:placeholder}}`
* Placeholders can have choices as values. The syntax is a comma-separated enumeration of values, enclosed with the pipe-character, for example `${1|one,two,three|}`
* Assign Keybinding to snippets

[How to publish vscode snippet as an extension](https://medium.com/@makhmud.islamov/publish-your-vs-code-snippet-extension-in-4-steps-2ed7cc4fccc3)

Use yoeman, scaffolding tool
call snippet.json inside package.json
publish to npm using vsce tool

[publishing extension]: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
[plantuml]: https://plantuml.com/
[graphviz]: https://www.graphviz.org/
[snippets]: https://code.visualstudio.com/docs/editor/userdefinedsnippets

[^1]: https://css-tricks.com/how-to-make-charts-with-svg/

