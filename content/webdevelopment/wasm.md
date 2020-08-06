---
title: WebAssembly
tags:
- webassembly
- assembly
- wasm
---

# WebAssembly

<TagLinks />


> WebAssembly (abbreviated Wasm) is a binary instruction format for a ==stack-based virtual machine==.
> Wasm is designed as a portable compilation target for programming languages,
> enabling deployment on the web for client and server applications.

```mermaid
graph LR
subgraph stacked_VM
  A((wasm module)):::green
end
B{HTML + JS glue code}:::yellow
subgraph source_code
  D(Rust /Go /kotlin):::yellow
  E(Swift/AssemblyScript):::purple
  F(Pascal/Zig):::orange
  C(C /C++ /C# /D /F#):::blue
end
C & D & E & F -- Emscripten SDK --> A -- execute --> B
classDef green fill:#1f9,stroke-width:0px;
classDef orange fill:#f96,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
classDef purple fill:#f9f,stroke:#333,stroke-width:0px;
click A "https://webassembly.org/getting-started/developers-guide/" "Click to open wasm"
click B "https://webassembly.org/getting-started/developers-guide/" "Click to open wasm"
click C "https://webassembly.org/getting-started/developers-guide/" "Click to open wasm"
click D "https://webassembly.org/getting-started/developers-guide/" "Click to open wasm"
click E "https://webassembly.org/getting-started/developers-guide/" "Click to open wasm"
click F "https://webassembly.org/getting-started/developers-guide/" "Click to open wasm"
```

* wasm became a [w3c] approved specification in 2019
* `wasm` is 4th language to run natively in browser alongside `html`, `css`, `js`
* Compiler LLVM supported languague to wasm using [Emscripten]
* WebAssembly is usually either ahead-of-time (AOT) or just-in-time (JIT) compiled

## :monkey_face: History

```mermaid
gantt
  dateFormat  YYYY
  title WebAssembly History
  Completed :2010,
  Google Native Cloud   :done,2011
  asm.js                :done,2013
  Unity angry bots      :done,2015
  w3c REC               :done,crit,2019
  GC, multithreading    :active,2022
```

Timeline | Events   | Description
---------|----------|--------------------
2011     | precursor technology | [Google Native Client](https://en.wikipedia.org/wiki/Google_Native_Client)
2013     | precursor technology | [asm.js]
2015     | 1st demonstration    | executing Unity's Angry Bots in Firefox,Chrome,Edge
2019     | Became [w3c] recommendation (REC)| Web client now supports 4 language. `html`, `css`, `js` and `wasm`|
Future   | plans to support multithreading and garbage collection | support `python`, `ruby` as well|

::: tip Old browser support
For older browsers, Wasm can be compiled into [asm.js] by a JavaScript polyfill.

In web development, a polyfill is code that implements a feature on web browsers
that do not support the feature.
:::


### :question: Questions

* How to compile your code js to wasm?
* How to debug it from devtools?

## :card_index_dividers: open sourced projects

* https://github.com/termoshtt/wasm-svg-example


## :cyclone: Useful Links

* [Official website](https://webassembly.org/)
* [Emscripten]
* [wiki]
* [Virtual Machine](https://en.wikipedia.org/wiki/Virtual_machine)
* [wasm project on github](https://github.com/WebAssembly)
* [Rust wasm](https://www.rust-lang.org/what/wasm)

[Emscripten]: https://en.wikipedia.org/wiki/Emscripten
[w3c]: https://en.wikipedia.org/wiki/World_Wide_Web_Consortium
[wiki]: https://en.wikipedia.org/wiki/WebAssembly
[asm.js]: https://en.wikipedia.org/wiki/Asm.js

*[w3c]: World Wide Web Consortium

<Footer />
