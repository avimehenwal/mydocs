---
title: E-Commerce
tags:
- electronic
- commerce
- ecommerce
- payment
- online
---

# E-Commerce

<TagLinks />

* Supply chain management
* Internet Marketting
* Online transaction Processing
* Inventory management
* Data Collection

::: quote wikipedia
E-commerces is the largest sector of electronic industry
:::

Shopping car is like git staging area for next commit. Subsets of products to process paynment for.

## Online goods and services

* e-books
* music - iMusic
* Softwares - SaaS
* Royality

> Unprecedented increase in e-commerce after COVID 2020

<a href="https://www.statista.com/statistics/274708/online-retail-and-auction-ranked-by-worldwide-audiences/" rel="nofollow"><img src="https://www.statista.com/graphic/1/274708/online-retail-and-auction-ranked-by-worldwide-audiences.jpg" alt="Statistic: Most popular online retail websites worldwide in June 2020, by unique visitors (in millions) | Statista" style="width: 100%; height: auto !important; max-width:1000px;-ms-interpolation-mode: bicubic;"/></a><br />Find more statistics at  <a href="https://www.statista.com" rel="nofollow">Statista</a>

## Payment Processing Services

* Unified Payments Interface (UPI) - India
  * Unlike traditional mobile wallets, which takes a specified amount of money from user and stores it in its own accounts, UPI withdraws and deposits funds directly from the bank account whenever a transaction is requested.

## Sell PDF

* on Amazon
* [e-junkie](https://www.e-junkie.com/wiki/pricing)

## Digital delivery system

1. User window shops
2. User selects his purchases 0-*
3. Makes Payment
4. Post payment Processing - Deliver goods.
   1. Redownload window in case they loose it
5. Launch your own affiliate program


## Digital Media

1. Files like `PDF`, `epub`
2. Videos like mp3
3. Presentations
4. animations
5. Artwork

* Webhooks and APIs differ in how they make requests.
* https://cloud.google.com/free/
* Firebase Functions - `javascript`
  * Google cloud functions in python, Go, java, nodejs

## Stripe Payment

> What should happen before payment?

* Enter CC info
* parse and send back to us a unique ID
* Use `dotenv` only when `NODE_ENV` (set by node itself) is **not** production
  * use dotenv only when in development mode
* Add prices in pennies (avoid floating point errors)
* `StripeCheckout`, `token` function is called when after card information is captured and submitted
* To use your API key, assign it to stripe. The Node.js library will then automatically send this key in each request.
* [Idempotence](https://en.wikipedia.org/wiki/Idempotence) operations
* Can add discount coupons, Promotion Code
* Payments from client side needs to be verified by server as they could be manipulated by attacker
  * Charge customer based on the price on backend
  * strip will verify and return a token
  * firebase cloud function to handle verification
  * Client Side
    * you define your products directly in the Stripe Dashboard and reference them by ID on the client side.
* Prebuilt UI Elements
* Webhook - like sending an order confirmation email to your customer, logging the sale in a database, or starting a shipping workflow
* https://youtu.be/jJH56H67yOE
* Would have to use firebase middleware to add `cors` middleware to request
  * else request might not pass
  * might work from browser but not from postman
* Checkout page should load `stripe.js` direcctly from server to remain PCI compliant

> What should happen after payment? <Refu></Refu>nd, decline

* [Pricing](https://stripe.com/en-de/pricing)
* Can send emails, invoices post payment to customer for free
* [Currency Support](https://stripe.com/docs/currencies)
* [Currency conversion](https://stripe.com/docs/currencies/conversions)
  * Stripe supports processing charges in 135+ currencies allowing you to present prices in a customer’s native currency. Doing so can improve sales and help customers avoid conversion costs.
* Link with [transferwise account](https://transferwise.com/help/19/transferwise-for-business/2977935/does-stripe-work-with-my-transferwise-account) to accept payments in USD, EUR, GBP, NZD, AUD
* **Payout** When you start processing live payments from your customers with Stripe, you won’t receive your first payout until 7–14 days after receiving your first successful payment.
* [Stripe with google pay](https://stripe.com/docs/google-pay)

![Stripe payment workflow](https://stripe.com/img/docs/payments/accept-a-payment-web.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/lQUI2R7XbiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Resources

* https://stripe.com/docs/google-pay
* https://www.digitalocean.com/community/tutorials/vuejs-stripe-elements-vue-integration


## NOdejs Hosting

RedHat OpenShift is highly recommended for first timers because it offers free Node.js hosting forever


## Questions

* https://www.reddit.com/r/webdev/comments/6aiw4d/vuejs_vs_express/
* How to secure client calls to backends hosted on cloud functions?

## How to design a ecommerce websites?

* Usecases
  * Create user profile
  * List products
  * add/remove product to cart
  * Purchase products
  * Payment processor API
  * Track order
* Database Model
  * users
  * products
  * orders
* Concurrency
  * What if 2 users tryign to buy same thing
* APIs
* Split page information into sections
* UI Features
  * Keyboard shortcuts
  * How to use tutorial? Help

## Payment Standards

* https://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard


## Implement Authentication with route guards

* https://github.com/ErikCH/FirebaseTokenFrontend

## Resources

* [ ] https://github.com/sdras/ecommerce-netlify
* [ ] https://codepen.io/balboacodes/pen/NWKeBMY
* [ ] https://github.com/Hujjat/vue-shop


<Footer />
