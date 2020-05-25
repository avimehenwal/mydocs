---
title: Websockets
tags:
- websocket
- ajax
- ws
- polling
- socket
---

# Websockets

<TagLinks />

Web IDL
: Web IDL is an interface description language (IDL) format for describing application programming interfaces (APIs) that are intended to be implemented in web browsers.

XHR - Xml HTTP Request
: is an API, whose objects are provided by the browser's JavaScript environment.

## How to get realtime updates from server?

1. Short Polling
2. Long Polling - poll and then wait for sometime, until server sends response
3. Websockets - full duplex communication

Send HTTP GET request via telnet

```
telnet www.google.com 80
GET /

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

## Websockets

> HTTP is unidirectional, **stateless**

```
**ws**://www.google.com
**wss**://www.google.com
```

::: tip devtools inspect ws
Chrome -> devtools -> Netowrk tab -> WS
:::


* providing full-duplex communication channels over a single TCP connection
* being standardize by W3C in Web IDL
* works at Layer 7 in OSI model
* 2 parts
  * Handshake to establish connection
    * Uses [HTTP upgraer header](https://en.wikipedia.org/wiki/HTTP/1.1_Upgrade_header)
  * then actual data transfer
  * similar to network MAC Protocols, CSMA/CA
* Nginx has supported WebSockets since 2013
* Masks data from other connections

::: danger
WebSocket servers must validate the "Origin" header against the expected origins during connection establishment, to avoid Cross-Site WebSocket Hijacking attacks
:::

Works in 3 stages

1. Opening Handshake
2. Data Exchange
3. Close Connection


### Where and when websockets can be used?

> feeds are updated in realtime by websockets

* Gaming Applications
* Chat Applications
* Realtime online crypto exchanges
  * [pro.coinbase.com](https://pro.coinbase.com/trade/BTC-USD)
* Social feeds
* Collaborative editing/coding
* SPorts update

### Beginners Guide to Websockets

> upgrade to HTTP

* How fast are they over traditional HTTP
* Transport Layer
  * TCP, UDP
* Internet Layer
  * IPv6, IPv4
* Application Layer
  * HTTP, Websocket, SSL, IMAP, POP
* Meet AJAX
* How to implement it?
* [Browser Support](https://caniuse.com/#search=websocket)
* cannot communicate with REST

<Quote text="SocketIO is to websocket what jQuery is to Javascript" by="Dion Misic" />

* namespaces
* fail backs

1. Polling
2. Long Polling, keep connection open until new data has arrived
3. Server Sent Events
   1. Event source API
   2. not truly bi-directional
   3. need a event loop
   4. works well with existing APIs

<embed type="text/html"
       src="https://caniuse.com/#feat=websockets"
       width="100%"
       height="400"
/>

@flowstart ant
a=>operation: traditional HTTP
b=>operation: AJAX calls
c=>condition: Websockets
d=>operation: WS client API
e=>operation: WS Server API

a->b->c
c(yes)->d
c(no)->e
@flowend


###### Websockets vs AJAX


## HTTP 2

* Decrease latency to improve page load speed in web browsers by considering:
* data compression of HTTP headers
* HTTP/2 Server Push
* pipelining of requests
* fixing the head-of-line blocking problem in HTTP 1.x
* multiplexing multiple requests over a single TCP connection

![HTTP handhsake sequence diagram](/screenshots/http-handshake.png)

## How is it websocket different from HTTP?

### How does HTTP work?

* connection is opened and closed by server
*



## Make realtime application that updates data from server?

* Browserstack
* pro.coinbase
* financial exchanges
* realtime news/social feeds
* realtime chat
* uber - watch cars moving

## How to implement and use WS?

### .NET Framework

* [Signal IR library](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/websockets?view=aspnetcore-3.1)
*  we recommend SignalR over raw WebSockets
   *  SignalR provides transport fallback for environments where WebSockets is not available
* A variable which holds socket connection, initialized on document load

* Sysnchronous vs Asynchronous principles
* HTTP, XMLHTTPRequest and websockets concepts
* Websocket API
  * Methods
    * send
    * close
  * Events
    * open
    * Message
    * Error
    * close
* [How SignalR library works internally](https://stackoverflow.com/questions/7807066/how-signalr-works-internally)

## Socket Programming | Nettwork Programming

> To build any networked application, we need socket Programming

* Basics of TCP/IP Protocol connection
* What and how do we program a connection?
* Client Server Model
* What are `requests` and `response`?
* Which program generates them?

## Berkley's Socket API

* What are [Socket]? to be specific Berkley Sockets
* [Are GPC different from sockets?](https://stackoverflow.com/questions/46128598/what-is-the-difference-between-socket-and-rpc)
  * Yes, RPC are meant for OS whereas sockets are for communication b/w computers over the network

::: warning Good Questions

1. How does traditional HTTP protocol works?
2. How did AJAX changed it?
3. What do websockets offer? and at what cost?
:::




[websockets]: https://en.wikipedia.org/wiki/WebSocket
[RFC 6455 - websocket]: https://tools.ietf.org/html/rfc6455
[Socket](https://en.wikipedia.org/wiki/Berkeley_sockets)


*[AJAX]: Asynchronous Javascript and XML
*[WS]: Web Sockets
*[ASP]: Active Server Pages
*[XHR]: XML HTTP Request

### Resources

1. [websocket.org](https://www.websocket.org/index.html)
2. [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
3. [dotnet env websocket implementation](https://docs.microsoft.com/en-us/dotnet/api/system.net.websockets.websocket?view=netcore-3.1)
4. [Free book on operating system](http://pages.cs.wisc.edu/~remzi/OSTEP/)


<Footer />
