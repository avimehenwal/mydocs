---
title: Dotnet Core
tags:
- dotnet
- react
---

# Dotnet Core

<TagLinks />

Free. Cross-platform. Open source. A developer platform for building **all your** apps.

## DotNet core

> .Net initiative

* successor to .NET-Framework
* corss-platform
* .NET Core supports four cross-platform scenarios: ASP.NET Core web apps, command-line apps, libraries, and Universal Windows Platform apps.
* Build web apps and services, Internet of Things (IoT) apps, and mobile backends.

> Learn to use ASP.NET Core to create web apps and services that are fast, secure, cross-platform, and cloud-based. Browse tutorials, sample code, fundamentals, API reference and more.

![dotnet framework mindmap](/diagrams/dotnet.svg)

#### What does blue and read line mean in devtools?


The Blue line (DOM content loaded event):
It happens when the browser finished parsing the main document.

The Red line (Load event):
It happens when the browser finished retrieving all the resources required by the main document.

After the red line: Here you will see loading of asynchronous and cached resources required by the main document and by other resources.

DNS Lookup

When you connect to a website, it has to look up the IP from the DNS. For example, your computer will contact a DNS asking if it knows where "google.com" is. If it does, it'll give you an IP. If it doesn't, it'll either give you the IP of another DNS or it will contact that DNS itself (I'm not sure which implementation applies where) until eventually you end up with the IP of the host you're looking for.

Connecting

Time it takes to connect with that IP. I'm not sure of the details here.

Sending

After connecting, you send the request to the server. It can be a request to view a page or submit data or anything.

Waiting

After sending your request, you wait for the server to respond to it. It can be busy or might take a while to process whatever you requested.

Receiving

Once the server has processed your request, it'll send data back to you.

###### What is the difference between cshtml and html?


::: tip
$cs = C \ Sharp$

$cshtml = html + server Code$
:::

cshtml is the file extension that refers to the **razor view engine**. In addition to straight html, these files also contain C# code that is compiled on the server prior to the pages being server up to the browser..

## C#

* [C#] (musical notes)
* strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines

The original C# compiler wasn't written in C#, it was in C and C++. The new Roslyn compiler was written in C#, but was initially compiled with the old compiler. Once the new compiler was done, it was able to compile its own source code: this is called bootstrapping.

* namespaces
  * system defined, prebuilt
  * user defined
* comments
* Variables
  * keywords
  * literals
  * delimiters
* data-types
  * operations on datatypes
  * enums
* Type casting
  * implicit type casting
  * Explicit type casting
* User Input and Output using stdio
* operators
  * logical operators
  * arithmetic operators
  * Assignmnet operators
  * Comparision operators
  * precidence
  * operator overloading
* How do you do math with a language?
  * `Math.XXX`
* String operations
  * length
  * concatination
  * [INTERPOLATION](https://en.wikipedia.org/wiki/Interpolation)
    * interpolation is a type of estimation, a method of constructing new data points within the range of a discrete set of known data points.[
* Conditional, branching statements
  * if, else, switch
    * break, default
* Loops
  * for
  * do..while
  * while
  * foreach
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
    * Subtyping
  * Dynamic dispatch/message passing
    * select the procedural code to execute in response to a method call, typically by looking up the method at run time in a table associated with the object.
  * recursion
* How to create classes and instantiate objects from it?
  * class constructor
  * Access Modifiers
    * Public
    * Private
    * Proteccted
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


###### What is the difference b/w JS and ECMA?

https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/

## React

* javascript libraty
* maintained by facebook
* react-md

###### How to update UI when server data has changed

* Server Push
* Websocket protocol
  * HTML5 is introducing technologies such as websockets for maintaining a persistent connection to a server, you could look into websockets as a solution, but it's a brand-new technology and I don't think the spec is even finalized yet, so it will only be implemented in the very latest versions of browsers, if at all.
  * implemented in browser?
  * Protocol Handshake
  * WebSockets enable the server and the client to send messages to each other at any time. The connection is established only once at the beginning, and after that, there is an open channel for sending and receiving data.
  * Web sockets also have no reconnect mechanisms. We have to implement our own comprehensive mechanism or use one provided by WebSocket third-party libraries.
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
  * order how to add MIddleware is important
* Interface - contract
* Controller names are pluralised
  * model - command, controller - CommandsController

### Interfaces

> class with Abstract methods

* Representa a conract that an object may decide to support
* Usually have names which are Adjectives, because modifying nouns
* usually prefixed with capital **I**
* How do you implement an interface?
* What are they good for?

Eg: IDrivable

### Resources

* [stackoverflow - .net-core](https://stackoverflow.com/questions/tagged/.net-core)
* [Comparision of javascript Frameworks](https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks)
* [WebSockets - friend or foe? How to achieve real-time experience in your web application](https://www.nexocode.com/blog/posts/websockets-friend-or-foe/)


[C#]: https://en.wikipedia.org/wiki/C_Sharp_(programming_language)
[OOP]: https://en.wikipedia.org/wiki/Object-oriented_programming
[.NET]: https://dotnet.microsoft.com/
[ASP]: https://en.wikipedia.org/wiki/Active_Server_Pages


*[SSE]: Server Sent Events
*[OOP]: Object Oriented Programming
*[ASP]: Active Server Pages

<Footer />
