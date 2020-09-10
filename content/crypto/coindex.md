---
title: Coindex
tags:
- coindex
---

# Coindex

<TagLinks />


Web services, systems

## Portals

1. e2e - consumers
2. e2c - retail

## Backend

1. customer
2. portfolio
3. exchange - 3rd party apis
4. sutor bank - euro conversion
5. index - collection of index
6. market apis - fetch realtime prices of currencies

[Ripple Payment Protocol](https://en.wikipedia.org/wiki/Ripple_(payment_protocol))

* http://localhost:8080/dashboard/portfolios/2a131ede-6553-4b7b-8645-49ff93300a67
* https://0pvhbp9i0f.execute-api.eu-central-1.amazonaws.com/dev/customer

Where is the backend url?
:   `load_service_deails` seeps into webpack default plugin

## Lib.js

* backend serverless, on AWS lambda functions, API keys are required

## Workflows

### Login

* Requires bitcoin.de account. Why? they are the official traders
  * based in Germany, largest
  * trade with real currency, have tie up with a bank
  * Fidor Bank
  * 4 crypto currency to real money in euros
* `intl` namespace of js internationalization api
* https://github.com/Billy-/Exchange-rates

### B2C

* [ ] Internationalization and multiple languages support
* [ ] NEW Account creation ONLY with bitcoin.de
  * Is there a test user?
  * https://coindex.office.foo-server.net/de/cdx/authorization?granted_url=https://www.b2c.x.dev.coindex.de/registrieren/bitcoinde-passwort&denied_url=https://www.b2c.x.dev.coindex.de/registrieren/account-auswahl
  * Use fake data to create bitcoin portfolio

### React

* React treats `<Div>` as component and `<div>` as an HTML element, casting matterns in naming
* all rect components acts like js functions with props
* unmounting when component is deleted/removed
* use `setState()` to modify states, never update them directly, maybe asynchronous
* [Lifecycle hooks diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
* How to debug react components?
* `onChange` handler when inpput field is changed.
* Routes are also changed as per the language selected
* Wire store to all react components automatically `<Provider store={store}>`
* PersistGate delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.
* Redux actions, [dispatch](https://redux.js.org/basics/actions)


### Refactor

* [ ] Remove [unsafe/deprecated versions of lifecycle hooks](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount)
  * UNSAFE_componentWillMount --> componentDidMount() | 14 occourences
  * [componentWillReceiveProps](https://stackoverflow.com/questions/49599656/can-getderivedstatefromprops-be-used-as-an-alternative-to-componentwillreceivepr)
  * [legacy code context](https://reactjs.org/docs/legacy-context.html)
* [ ] [react-hot-reload](https://github.com/gaearon/react-hot-loader) is depricated, use [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin/)
* [ ] change classes to functions


```
Warning: The <ThreeBounce /> component appears to be a function component that returns a class instance. Change ThreeBounce to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `ThreeBounce.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.
```

### Deployment

* aws cloudfront and aws bucket
* aws cloudformation
  * Model and provision all your cloud infrastructure resources
* webpack configuration
* aws cognito
  * Simple and Secure User Sign-Up, Sign-In, and Access Control

Code Sections       | Description
--------------------|-------------------
routing             | webapp/src/utils/routing.js
base html template  | webapp/src/static/index.html
app.js 	            | webapp/src/App.js


Libraries | Description
----------|-------------
[shell.js](https://www.npmjs.com/package/shelljs) | sed, grep, cd, chmod
[prop-types](https://www.npmjs.com/package/prop-types) | prop types for react components
[react-responsive](https://www.npmjs.com/package/react-responsive) | sueMediaQuery, isTablet
[SNS]() | simple notification service, pub/sub, sms, mobile push


* lib-js -> webapp backend
* utils -> actions -> api
* api -> store -> redux provider {shared with all components}


*[HMR]: Hot module reload

<Footer />
