---
title: Database
tags:
- relational
- database
- sql
- nosql
---

# Database

<TagLinks />

[Database] in itself is data-structure problem at scale. How do we organize, collect, store data
in a way such that we can use relationships / associations to query targeted data.

DBMS - [Database] management system
: is the **software** that interacts with end users, applications, and the [Database] itself to capture and analyze the data.

[Database] Model
: How data is <mark>stored, organized and manipulated</mark> internally by the DBMS.

![Database Relationships with UML](/diagrams/database_relationships.svg)

1. Hierarchical [Database]
2. Object Model - JavaScript in browser v8 engine
3. Document Model - page data on browser when a URL response is rendered
4. Relations [Database] Models - SQL and MySQL
5. Non-Relational [Database]s aka noSQL - MongoDB, Firebase

### SQL based Terminologies

todo add examples to each :exclaimation:

DCL - Data control language
: controls access to data;

DDL - Data definition language
: defines data types such as creating, altering, or dropping tables and the relationships among them;

DML - Data manipulation language
: performs tasks such as inserting, updating, or deleting data occurrences;

DQL - Data query language
: allows searching for information and computing derived information.

Relationships
: are a logical connection between different tables, established on the basis of interaction among these tables.

Transactions
: ACID Transactions to support rollback in case of failures

SP - Stored procedures
: restrict access to DBMS only through SP

## Database Features

* Replication
  * storage redundancy, to increase data availability and resilience in case of partial failure
* Security
* Transactions and concurrency
* Easy Migrations
* Easy Backup and Restores
* [Database] logs, Querying tools like FQL Facebook query language
* Scaling
  * Sharding
  * Multiple Master - Multiple Slave
  * Horizontal and vertical scaling techniques

## Database Normalization


## Database Relationships

Applicable to Relational DBMS, but concept extends to all other (no-SQL) DBMS as well.

A table relationship is established when a child table defines a **Foreign Key** column that references the **Primary Key** column of its parent table.

$Parent(PrimaryKey) \xrightarrow{Relationship} Child(ForeignKey)$

Every [Database] table relationship is, therefore, built on top of Foreign Key columns

<!-- Add Examples -->

#### one-to-many
is the most common relationship, and it associates a row from a parent table to multiple rows in a child table.

###### Examples,
* Customers and Orders tables.


#### one-to-one
requires the child table Primary Key to be associated via a Foreign Key with the parent table Primary Key column.

###### Examples,

* in a marriage, each spouse has only one other spouse. This kind of relationship can be implemented in a single table and therefore does not use a foreign key.

#### many-to-many

requires a link table containing two Foreign Key columns that reference the two different parent tables.

###### Examples,

* relationship between the Orders and Products table. An order can contain multiple products, and a product could be linked to multiple orders: several customers might submit an order that contains some of the same products.


###### Considerations when designing a database schema

* Collect as much data as possible
  * you  may never know what you might need in future to scale, add new feature, analytics
* Group data logically together
  * based on readability
  * efficiency
  * usage






### References

Most popular [Database] choices and why?

* [Databases - Wikipedia](https://en.wikipedia.org/wiki/Database)
* [Database Models](https://en.wikipedia.org/wiki/Database_model)
* [Comparison of database](https://en.wikipedia.org/wiki/Comparison_of_database_tools)
* [The 3 Types of Relationships in Database Design](https://database.guide/the-3-types-of-relationships-in-database-design/)
* [System design cheat-sheet](https://gist.github.com/vasanthk/485d1c25737e8e72759f)
* [System Design for Interview](https://www.freecodecamp.org/news/systems-design-for-interviews/)
* [Many to many datamodel](https://en.wikipedia.org/wiki/Many-to-many_(data_model))

[Database]: https://en.wikipedia.org/wiki/Database
[ACID]: https://en.wikipedia.org/wiki/ACID

*[DBMS]: Database Management System
*[SQL]: Structured Query Language
*[ACID]: Atomicity Consistency Isolation Durability

<Footer />
