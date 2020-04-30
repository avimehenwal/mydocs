---
title: Typescript
tags:
- javascript
- typescript
---

# Typescript

<TagLinks />

javascript is a language that people love to hate

most of the backend stuff is abstracted using technological solutions like
* cloud platforms AWS, GCP
* docker
* APIs like stripe/paypal for payment

So where is the majority of development?

What got you interested? Why research it?

::: tip vue3
Vue3 totally re-written in typescript
:::

![vue3 next repo on github code breakdown](/webdevelopment/vue3-source-code-github.png)

What C++ is to C is the same for
what Typescript is to Javascript

* It is a superset of Javascript

Let see an important landmark in the history of Javascript:

It was launched in September 1995, and It took just ten days to develop this e scripting language which was initially called Mocha
In November 1996, Netscape submitted JavaScript to ECMA (European Computer Manufacturers Association) International
ECMAScript 2 was released in 1998
ECMAScript 3 was released in 1999
In 2005, Eich and Mozilla join ECMA to develop E4X Java script
In January 2009, the CommonJS project was launched with the aim of defining a common standard library
In June 2011, ECMAScript 5.1 was released
In June 2015. ECMAScript 2016 was released
The current version is ECMAScript 2017 which was released in June 2017

![Javascript vs Typescript google trends results for last 5 years](/public/google-trends.png)

* Programming Languague maintained by Microsoft
* Adds [static type checking](https://en.wikipedia.org/wiki/Type_system#STATIC) to javascript
* Typescript code needs to be compiled
* As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.
* The TypeScript compiler is itself written in TypeScript and compiled to JavaScript.

TypeScript is a strict superset of ECMAScript 2015, which is itself a superset of ECMAScript 5, commonly referred to as JavaScript.

The TypeScript compiler, named tsc, is written in TypeScript.

s a result, it can be compiled into regular JavaScript and can then be executed in any JavaScript engine (e.g. a browser). The compiler package comes bundled with a script host that can execute the compiler. It is also available as a Node.js package that uses Node.js as a host.

Would you rather have **silly** errors during development or insanity induced error in production!

* Learn it incrementally as you go
* transpile to it multiple javascript flavours
* try writing async await in TypeScript
* By default tsc transpiles to ES3 syntax
* tsconfig.json file for compiler options
  * target ES syntax
  * watch the files?
  * lib -include native dom classes in your applications
    * get free vscode autocomplete and intellisense

tsc hello.ts -> hello.js        // vanilla

Remove type checcking for a variable

```js
let lucky: any = 23;
lucky = '23'
```

Pascal Case

* Restrictign the value of variable to certain values `|`
* Create type interfaces for structs
* String typing a function
  * argumsnt annotation
  * return types

```js
function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

// Arrays, Tuples
// make them optional
type MyList = [number?, string?, boolean?]

//Generics
class Observable<T> {
  constructor(public value: T) {}
}
```

## Debug like a pro

* computed property nams, adding variables to object
  * `console.log({foo, bar, baz})`
* Add custom CSS styles to logs
* Display objects as tables
* console.trace()
  * where was fucntion defined and where was it called?
* Object Destructuring
* Template Literals
* Spread Syntax
* A comma in the end would not break modern JS
* Modern Arrays
  * array reduce
  * array map
  * array filter
* Async await
  * express asynchronous code in synchronous format
  * one of the best things that has ever happened to JS

```js
console.log('%c My Friends', 'color: orange;')
console.log([foo, bar, baz])

// Equivalent of array push
pokemon = [...pokemon, 'Balbasaur']
```

### References

* https://www.guru99.com/typescript-vs-javascript.html
*

<SimpleNewsletter/>
<Disqus />

[vue3]: https://github.com/vuejs/vue-next
[wiki]: https://en.wikipedia.org/wiki/TypeScript
[ECMA]: https://en.wikipedia.org/wiki/ECMAScript
[typescript]: https://www.typescriptlang.org/
[repo]: https://github.com/microsoft/TypeScript
