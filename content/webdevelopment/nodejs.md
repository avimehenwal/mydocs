---
title: NodeJS
meta:
  - name: description
    content: nodejs
  - name: keywords
    content: node js nodejs
tags:
- nodejs
- node
- js
- javascript
---

<TagLinks />

# NodeJS

::: quote Nodejs
![nodejs logo](/svg/logo/nodejs.svg =200x100)

Single threaded
[event loop architecture](https://blog.usejournal.com/nodejs-architecture-concurrency-model-f71da5f53d1d)
:::


What is the difference between javascript and NodeJS?
:   Javascript script or ECMA Script is a programming language standard

    NodeJS is a runtime interpreter and environment written in `C++` which support ECMA Script

    ::: tip JS Engine
    Both google chrome and node js both uses v8 javascript engine.
    Nodejs runtime is written in `C++`
    :::

    <iframe width="560" height="315" src="https://www.youtube.com/embed/zFRuGk52X-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


* [Blocking and Non blocking calls](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)
  * How is non-blocking achieved? Implemented
  * Event Loops
* [Callback Pattern](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/)
  * Foundations of nodejs
* WebAssembly System Interface (WASI)

A function is passed as an argument. aka **call-after**. Could be synchronous or asynchronous

```js
function processData (callback) {
  fetchData(function (err, data) {
    if (err) {
      console.log("An error has occurred. Abort everything!");
      return callback(err);
    }
    data += 1;
    callback(data);
  });
}
```

::: tip What is IO
$$IO = Disk, Network \, operations$$

"I/O" refers primarily to interaction with the system's disk and network supported by
[libuv.](https://github.com/libuv/libuv)

libuv
:   libuv is a multi-platform support library with a focus on asynchronous I/O.

:::

What is v8 javascript engine?
:   V8 is Google’s open source high-performance JavaScript and [WebAssembly] engine, written in C++.

    It is used in **Chrome** and in **Node.js**, among others.
    It implements [ECMAScript] and [WebAssembly], and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors.
    V8 can run standalone, or can be embedded into any C++ application.

[What the difference between nodejs and v8 engine?](https://stackoverflow.com/questions/42616120/what-is-the-relationship-between-node-js-and-v8)
:   v8 - only client side in browser

    nodejs allows you to run [ECMAScript] event at server-side, provices a runtime ecosystem for js independent of browser.

    * Ffeatures like package manager and debugger availble in node ecosystem

Python and nodejs share some similarities
:   Both are implemented in low level languages like `C` and `C++`

    * both provides runtimes and package managers, use RFCs for language development
    * Uses C API

* NodeJs project uses lots of python tooling as well
  * ix failing tests
  * Improve code coverage
* [Project contribution, todo](https://www.nodetodo.org/)
* [HTTP/2]
  * compressed headers
  * Server Push
* [Python vs nodejs JIT compiler performance difference](http://www.cdotson.com/2014/08/nodejs-vs-python-vs-pypy-a-simple-performance-comparison/)
* [Benchmarking Games](https://benchmarksgame-team.pages.debian.net/benchmarksgame/)

![Nodejs Architecture](https://miro.medium.com/max/1000/1*5USTrYHazNhCrEDnUeozLw.png)

* [How Blink Works?](https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLNYkxOF6rcICgS7eFJrGDhMBwWtdTgzpx" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[v8]: https://v8.dev/
[ECMAScript]: https://tc39.es/ecma262/
[WebAssembly]: https://webassembly.github.io/spec/core/
[HTTP/2]: https://en.wikipedia.org/wiki/HTTP/2
[blink]: https://www.chromium.org/blink


## Resources

<Footer />
