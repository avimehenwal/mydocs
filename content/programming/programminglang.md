---
title: Programming Languages
tags:
  - programming
  - languages
  - scripting
  - compiled
  - interpreted
---

# Programming Languages

<TagLinks />

Generally programming languages are either compiled or interpreted. It depends on their implementations

::: tip
Some languages could both be compiled and interpreted at the same time.
For example, `python`, `perl` etc.
:::

What is the difference between scripting and programming languages?
: Major differences

    1. Scripting languages are generally dynamically types.
    2. `javascript`, `php`, `python`, `bash`
    3. Generally interpreted, do not have compiled step
    4. [List of compiled programming languages](https://en.wikipedia.org/wiki/Compiled_language)

```mermaid
graph TD
A([Programming Language]):::green
B(Syntax):::blue
C(Semantics):::yellow
A --> B & C
classDef green fill:#1f9,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
```

Javascript vs php? Which stack to use
: Longetivity, probably javascript os going to be there for a long time

```mermaid
graph TB
subgraph MEAN_stack
  C(mongodb):::purple
  A(expressjs):::green
  B(vuejs/react/angular):::orange
  D(nodejs):::blue
end
classDef green fill:#1f9,stroke-width:0px;
classDef orange fill:#f96,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
classDef purple fill:#f9f,stroke:#333,stroke-width:0px;

```

```mermaid
graph TB
subgraph LAMP_stack
  E(Linux):::purple
  F(apachey / Larvel):::green
  G(MySQL):::orange
  H(php):::blue
end
classDef green fill:#1f9,stroke-width:0px;
classDef orange fill:#f96,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
classDef purple fill:#f9f,stroke:#333,stroke-width:0px;
```

## PHP - Hypertext Preprocessor

| PHP                            | Javascript                          |
| ------------------------------ | ----------------------------------- |
| Server side scripting language | Client side scripting language      |
| cross-platform                 | cross-platform                      |
| multi-threaded                 | single threaded                     |
| web-backend                    | web-interface                       |
| direct db access               | interactions via HTTP calls to APIs |

<Footer />
