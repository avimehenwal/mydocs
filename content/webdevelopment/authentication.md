---
title: Authentication Mechanisms
tags:
- authentication
- mechanism
- authorization
- accounting
- session
- jwt
---

# Authentication Mechanisms

<TagLinks />

## JWT - Javascript Web Token

* Only for Authorization and NOT authentication
* JWT is signed by server by its own key
* Traditional approach - user information on server
* JWT approach - user information within the token
* Encode , decode JWT [jwt.io](https://jwt.io/)
* Why use it? Use case?
  * 2 seperate web applications like Bank and Retirement Plans, how to enable SSO?
  * share the same secret key b/w servers then same session could be reused on multiple services
  * used to authenticate within microservices

<figure>
  <img src="/screenshots/session-based-authorization.png" alt="session based authorization">
  <figcaption>
    Traditional cookie based session ID exchange
  </figcaption>
</figure>

![jwt based authorization](/screenshots/jwt-based-authorization.png)

<Footer />
