---
title: Trees
tags:
- tree
- data
- structure
- fundamental
---

# Trees

<TagLinks />


* Trees data structure can represent some form of <mark>hierarchy</mark>
* A tree can be empty with no nodes or a tree is a structure consisting of one node called the root and zero or one or more sub-trees.
* Tree is a acyclic connected graph
  * If not connected, could be a **forest**

$Tree = <Vertices, Edges>$

In every tree $T$, Maximum number of edges $|E|$ = number of vertices $|V|$ minus 1

$|Edges| = |Vertices| - 1$

proof by Induction

where,

Isomorphic Trees
: Greek "same shape", 2 trees with same number of nodes, edges might have different connections

Vertices
: set of all Nodes for a given tree T

Edges
: ordered-pair of set of connecting nodes in the associative Array format (generally).
Eg: `{(a,b), (b,c), (a,c)}`

![A Isomorphic Tree examples](/diagrams/isomorphicGraph.svg)

::: tip Graphs
All Trees are graphs, but all graphs are **not** tree.

why? because trees are **Acyclic**, meaning cannot have cycles
:::

[Cayley's formula](https://en.wikipedia.org/wiki/Cayley%27s_formula)
: Calculate how many trees could be formed from given number of nodes

$Trees = n^{n-2}$

### Memory Representation of Tree

1. Linear using Array
2. Linked Lists using pointers

#### Linear using Array

<span class="w3-text-red"></span>

Element | formula
--------|----------
Root Node | $a[0]$
Left Child | $[2*i+ \color{red}{\textbf{1}}]$
Right Child | $[2*i+ \color{red}{\textbf{2}}]$
Parent | $[(i-1)/2]$

Example: To Do


::: warning text
Always analyze your solution, space time complexity
:::


* Function to implement unival trees?
* How to implement auto-completion?
* K-th largest number
  * Brute force technique
  * Improve your solution

### Operations on trees

#### Traversal

* BFS Breadth first Search
* DFS Depth First Search


## Applications




<SimpleNewsletter/>
<Disqus />

[tree]: https://en.wikipedia.org/wiki/Tree_(data_structure)
[graph]: https://en.wikipedia.org/wiki/Graph_(abstract_data_type)