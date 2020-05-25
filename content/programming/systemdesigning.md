---
title: System Design
tags:
- interview
- questions
- system
- design
---

# System Design

<TagLinks />

::: tip Why learn system design?
Its about building large scale systems like Facebook, Google, Twitter, Netflix, Amazon etc.
Make systems distributed by design
:::

Lets break it down to see to what system design might mean at first,

![System Design steps diagram](/diagrams/system_design.svg)

System
: A system is a group of interconnected entities that form a single unit. Eg: **Human System**,
too much going on inside a human system, we have :heart: heart, lungs, :eyes: eyes and to make the matters
worse a conscious self absorbing brian :joy:

Design
: A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process


Systems design
: is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements

<Quote text="How do you put enough blocks on top of each other to build a creative structure
such that everything doesnt fall apart" by="avi" />



###### How to glue entire system together?

Its about solving design challenges using

* Frameworks
* APIs
* Design Patterns
* Scalability
* desing choices

... or anything else that mankind has to offer us to solve the problem at hand.

1. Architectural design
   1. structure
   2. behavious
   3. views
2. Logical design - Abstraction
   1. data flows
   2. input / output
   3. modelling techniques
      1. Entity Relationship Modelling
3. Physical design
   1. How data enters the system?
   2. How data is authenticated?
   3. How data is processed?
   4. How data is displayed?

## Expectations

* Handling Ambiguity
* Systematic Approach
  * design
  * Accessibility
  * Scale
  * Multiple entry/exits Concurrency problems
  * Pricing Strategy
    * Premium, delux strategy

## Loadbalancing a service

* niginx
  * route requests b/w multiple IP addresses
* DNS load balancing
  * URL can resolve to multiple IPs addresses serving the web-service
* Load Balancing Algorithms
  * Round robin
  * MRU - Most Recently Used
  * Least Frequently used

## Caching

Quiet often, its not your webserver that would go down first, its your database server. Why? you may ask,
mostly due to excessive reads and writes load for a prolonged period of time.

How do we solve it?

* In-memory caching - redis
  * very fast to access
  * memcaches
  * CDNs networks
    * video and video streaming
* For images
  * distributed filesystem like amazon S3

## Databases Schemas

**Indices** are improtant because, because they make your quierie fast

* Dating App - users active within your neighbourhood
  * Filter user based on latitude, logitude and based on last active timestamp
* How to deal with database Load
  * Replication Techniques
  * Master - Slave architectures
* Database consistency
  * Able to retrieve data immediately after write
  * may not be super important

## How to Scale - Take a step back

1. Web server / Application server
   1. Loadbalancers
2. Database server
   1. Caching
   2. Indexing
   3. Replication
   4. Data base write? Hammer DB with new data
      1. Sharding
      2. Multiple Master databases
      3. Vertical Sharding
      4. HOrizontal Sharding
3. Image Server
   1. Hosted distributed netowor, services like S3
4. Video / Asset Server
   1. CDNs
5. APIs

## How to design Twitter

### List all (at least the obvious ones) services, microservices that Twitter offers?

1. Authentication System
2. Tweet databse - will get huge
   1. sending a tweet, tweeting
   2. opportunuty to use SHARDING techniques
   3. Database scaling techniques - horizontal, vertical
   4. Superfast read function than write, as many people read tweet than writen them
   5. Compromise little bit on consistency, tweet may be accessabile to pther people in sometime, not immediately
   6. Database replication factor?
      1. redis - in memory
   7. What if Lady Gaga or Justin bieber tweets somethign?
      1. People seeing the reaction to tweets
      2. faster than the original tweet
      3. take care of Edge cases
3. Tweet Tagging
4. Tweet subscription based on topic of interest
   1. pub-sub system
5. Security
6. Performance
7. Tweet feeds on Timeline
   1. User Timeline
   2. Home Timeline
8. Notification system
9.  Following

### Considerations

* Each tweet can have multiple hashtags
* Tweet text could have @mentions, or place, location
  * Reg Ex search - parsing?


### Database Relationsships

* One to Many data relationship between User and Tweets Tables
  * meaning one user can have multiple tweets

## Global and Fast code deployment system

## Design a system like Uber

* Asynchronous Multiple tasks
* Service oriented system?
* Serve Mobile Service
  * everything uses GPS

## Pizza confimation in a store


### Why System Design?

* Milltions of active users all the time
* Service should never fail
  * Both Hardware and Software failure resilient
* Scaling should be easy - preferably **auto** scaling
* Infomration on each distributed server is same
  * User should not get contradicting info when requesting info from different servers
* Distribute load fairly
* Ensure requests are responded to in timely fashion
  * Optimization
* Messaging Queues



### References

* [System design - wikipedia](https://en.wikipedia.org/wiki/Systems_design)
* [designing Instagram](https://www.educative.io/courses/grokking-the-system-design-interview/m2yDVZnQ8lG)
* [Designing TinyURL service](https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR)
* [system design Primer github](https://github.com/donnemartin/system-design-primer)
* [Interview questions](https://github.com/checkcheckzz/system-design-interview)
* [design Netflix](https://medium.com/@narengowda/netflix-system-design-dbec30fede8d)

*[DB]: Database

<Footer />
