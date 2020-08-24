---
title: Quality Assurance Testing
tags:
- testing
- qa
---

# Quality Assurance Testing

<TagLinks />

<Quote text="There is no 100% bug-free software" />

* Fully online and remote model
* Customer UI, business UI
* Watch test results getting updated as they happen in realtime

## Mock Objects

> Interaction testing

A mock object is a fake object that is inserted into the system and later helps test decide
if the system indeed interacted with the other objects.

* In Real life projects testing really becomes a challenge. Why?
* Mock vs Stub difference?

::: tip Test requirnment
If the object has a specific property then it should send an email.

How do we test it?

1. :x: check inbox using email API if email has been recieved!
2. :x: check on filesystem if a file is written
3. :white_check_mark: Just test the interaction b/w your class (being tested) to emailSender class.
:::

* Unittest - runs only in memory, is repeatable, does not touch any external resources
* As soon as you touch an external service it becomes a Integration test. Why?
  * because you are now contaiminating the environment. Other tests, systems might depend on it.
  * like database, email sender, filesystem etc.
* Was emailSender called?
  * in production code, instead of using real values accept values through an Interface
  * then create that Interface in test
* Sometimes you have to simulate the situations, we need to fake objects
  * Test when email server is full?
  * Out of memoery exception?
* Thing that you assert on is Mock Object. `FakeLogWriter`
* Everything else that helps run a test is stub. `FakeEmailSender`

> how the function has been called and what the function returned is kept in mock property

### Resources

* [List of top QA companies](https://hackernoon.com/top-10-software-testing-companies-for-2020-fiff3ubf)
* [jest mocking](https://jestjs.io/docs/en/mock-functions)

<Footer />
