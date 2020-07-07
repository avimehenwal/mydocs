---
title: Dotnet Core
tags:
- dotnet
- react
---

# Dotnet Core

<TagLinks />

Free. Cross-platform. Open source. A developer platform for building **all your** apps.

## Dotnet core

> .Net initiative

* successor to .NET-Framework
* cross-platform
* .NET Core supports four cross-platform scenarios: ASP.NET Core web apps, command-line apps, libraries, and Universal Windows Platform apps.
* Build web apps and services, Internet of Things (IoT) apps, and mobile back-ends.

> Learn to use ASP.NET Core to create web apps and services that are fast, secure, cross-platform, and cloud-based. Browse tutorials, sample code, fundamentals, API reference and more.

![dotnet framework mind-map](/diagrams/dotnet.svg)


###### What is the difference between cshtml and HTML?


::: tip
$cs = C \ Sharp \implies cshtml = \{ csharp + html \}  \sim server Code$
:::

cshtml is the file extension that refers to the **razor view engine**. In addition to straight HTML, these files also contain C# code that is compiled on the server prior to the pages being server up to the browser..

## C#

* [C#] (musical notes)
* strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines

The original C# compiler wasn't written in C#, it was in C and C++. The new Roslyn compiler was written in C#, but was initially compiled with the old compiler. Once the new compiler was done, it was able to compile its own source code: this is called bootstrapping.

* name-spaces
  * system defined, prebuilt
  * user defined
* comments
* Variables
  * keywords
  * literals
  * delimiters
* data-types
  * operations on datatype s
  * enums
* Type casting
  * implicit type casting
  * Explicit type casting
* User Input and Output using stdio
* operators
  * logical operators
  * arithmetic operators
  * Assignment operators
  * Comparison operators
  * precedence
  * operator overloading
* How do you do math with a language?
  * `Math.XXX`
* String operations
  * length
  * concatenation
  * [INTERPOLATION](https://en.wikipedia.org/wiki/Interpolation)
    * interpolation is a type of estimation, a method of constructing new data points within the range of a discrete set of known data points.[
* Conditional, branching statements
  * if, else, switch
    * break, default
* Loops
  * for
  * do..while
  * while
  * for-each
* Parameters -> Methods | Functions
  * return values
  * Named Arguments
  * Method Overloading
* OOP
  * Abstraction
  * Composition, inheritance, and delegation
  * Encapsulation
    * data hiding
  * Polymorphism
    * Sub-typing
  * Dynamic dispatch/message passing
    * select the procedural code to execute in response to a method call, typically by looking up the method at run time in a table associated with the object.
  * recursion
* How to create classes and instantiate objects from it?
  * class constructor
  * Access Modifiers
    * Public
    * Private
    * Protected
    * Internal
    * Protected Internal
  * A property is like a combination of a variable and a method, and it has two methods: a get and a set method
* Working with Files
* [Dealing with Lists](https://www.learncs.org/en/Lists)
* Dealing with Dictionaries
  * IDictionary<int, string> dict = new Dictionary<int, string>();
* Difference b/w static and non-static methods?
* C# supports two types of class methods, static methods, and non static methods. Any normal method is a non static method.


```C#
List<int> numbers = new List<int>();
numbers.Add(1);
```


::: tip syntax
$<Type> \ <Variable \ Name>$
:::

##


* [What is the difference b/w JS and ECMAscript?](https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/)

### Related Pages

[React js framework](./react.md)

###### How to update UI when server data has changed

* Server Push
* Web-socket protocol
  * HTML5 is introducing technologies such as web-sockets for maintaining a persistent connection to a server, you could look into web-sockets as a solution, but it's a brand-new technology and I don't think the spec is even finalized yet, so it will only be implemented in the very latest versions of browsers, if at all.
  * implemented in browser?
  * Protocol Handshake
  * Web-sockets enable the server and the client to send messages to each other at any time. The connection is established only once at the beginning, and after that, there is an open channel for sending and receiving data.
  * Web sockets also have no reconnect mechanisms. We have to implement our own comprehensive mechanism or use one provided by Web-socket third-party libraries.
  *
* Polling
  * long polling
  * short polling
* SSE - Server Sent Events
* HTTP Streaming

abuse of HTTP protocol to establish bidirectional data transfer.
https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/
https://blog.bitlabstudio.com/a-simple-chat-app-with-react-node-and-websocket-35d3c9835807


The main difference between .NET and ASP.NET is that .NET is a software framework that allows developing, running and executing applications while ASP.NET is a web framework which is a part of .NET that allows building dynamic web applications.

ASP.NET Core Razor Pages is a page-focused framework for building dynamic, data-driven web sites with clean separation of concerns. Based on the latest version of ASP.NET from Microsoft - ASP.NET Core, Razor Pages supports cross platform development and can be deployed to Windows, Unix and Mac operating systems.

Razor Pages makes use of the popular C# programming language for server-side programming, and the easy-to-learn Razor templating syntax for embedding C# in HTML markup to generate content for browsers dynamically.

### Why need it? What can it do?


* Anatomy of dotnet project
* https://dotnetplaybook.com/
* https://www.youtube.com/user/binarythistle/videos
* Understand Request pipeline
* Asynchronous programming with .NET


```
sudo snap install dotnet-sdk --channel 3.1/stable --classic

```

## ASP

* ASP uses server-side scripting to generate content that is sent to the client's web browser.
* The ASP interpreter reads and executes all script code between <% and %> tags, the result of which is content generation. These scripts were written using VBScript, JScript, or PerlScript. The @Language directive, the <script language="manu" runat="server" /> syntax or server configuration can be used to select the language. In the example below, Response.Write Now() is in an HTML page; it would be dynamically replaced by the current time of the server.
* ~ Templating engine
* C# code blocks are enclosed in `@{ ... }`

## MVC REST API application

* DB Context
* startup.cs is application entrypoint
* How to set up a request pipeline?
  * order how to add Middle-ware is important
* Interface - contract
* Controller names are pluralized
  * model - command, controller - Commands-controller

### Interfaces

> class with Abstract methods

* Represents a contact that an object may decide to support
* Usually have names which are Adjectives, because modifying nouns
* usually prefixed with capital **I**
* How do you implement an interface?
* What are they good for?

Eg: IDrivable

## Installation

Install multiple run-times

```
sudo ./dotnet-install.sh -v 2.2.107 --install-dir /usr/share/dotnet --dry-run
dotnet tool install -g Microsoft.Web.LibraryManager.Cli
```

### CORS

```
Error during Web-socket handshake: Unexpected response code: 404
```

* request headers could be hacked and modified

### Resources

* [stack-overflow - .net-core](https://stackoverflow.com/questions/tagged/.net-core)
* [Comparison of JavaScript Frameworks](https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks)
* [Web-sockets - friend or foe? How to achieve real-time experience in your web application](https://www.nexocode.com/blog/posts/websockets-friend-or-foe/)


[C#]: https://en.wikipedia.org/wiki/C_Sharp_(programming_language)
[OOP]: https://en.wikipedia.org/wiki/Object-oriented_programming
[.NET]: https://dotnet.microsoft.com/
[ASP]: https://en.wikipedia.org/wiki/Active_Server_Pages


*[SSE]: Server Sent Events
*[OOP]: Object Oriented Programming
*[ASP]: Active Server Pages

<Footer />
