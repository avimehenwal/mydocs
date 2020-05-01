---
title: Data Structures
tags:
- programming
- fundamentals
- data
- structures
---

# Data Structures

<TagLinks />

<object type="image/svg+xml" data="/diagrams/dataStructure.svg" class="logo" width="100%" height="200px">
  <!-- Fallback Image -->
   ![Computer Architecture and data structure diagram](/diagrams/dataStructure.svg)
</object>

Data Structure
: A [data structure] is a format to
<mark>store, manage and organize</mark>
data in such a way that enables
efficient **data access** and **data modification**.

ADT abstract data type
: is a mathematical model for data types.

Different types of data structures are suited to different kinds of **applications**, and some are highly specialized to specific tasks.

###### Some examples,

1. Relational **databases** commonly use *B-tree indexes* for data retrieval
1. while **compiler** implementations usually use *hash tables* to look up identifiers.


> Usually, efficient data structures are key to **designing efficient algorithms**.

Abstraction levels on data

@flowstart
a=>operation: Softwares & Applications
b=>operation: Programming Languages
c=>operation: Algorithms
d=>inputoutput: Data Structures
e=>operation: Raw binary Data
f=>end: Computer Memory

a->b->c->d->e->f
@flowend

Data structures are generally based on the ability of a computer to fetch and store data at any place in its memory, specified by a pointer—a bit string, representing a memory address, that can be itself stored in memory and manipulated by the program

## Data structure Types

There are numerous types of data structures, generally built upon simpler primitive data types:

1. Linear data Structures
   1. can be traversed in singled run
   2. Examples
      1. Arrays
      2. Stacks
         1. LIFO
         2. FIFO
      3. Queues
2. Non Linear data structures
   1. cannot be traversed in single run
   2. Examples
      1. Trees
      2. Graphs
      3. Linked lists
         1. sequence of nodes
         2. Dynamic Data structures
         3. Grow and shrink at run-time

* What are Binary trees
* Binary Heaps
* Linear Search
* Binary Search
  * Divide and conquer
* Linear Sort
* Difference between stacks and Queues
* What are recursive algorithms
* Sorting algorithms
  * Merge Sort
* Heap vs Tree and Stack , Advantages and disadvantages

## Trees

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


### Spanning Tree

* Operations
  * Tree generations
  * Tree traversal
    * in-order
    * preorder
    * post-order
  * Tree searching
  * Tree modification
  * Node deletion
  * Balancing tree
* Heaps
  * max heap
  * min heap
  * Operations
    * insertion
    * self-balancing
    * removal - pop from the root
    * Sorting
    * Heapify
  * Priority Queue

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



### Some good Questions

* [Are Data-Structure and Algorithm same for all programming languages?](https://stackoverflow.com/questions/26181785/is-data-structure-and-algorithm-same-for-all-programming-languages)
* [Is there a difference between 'data structure' and 'data type'?](https://stackoverflow.com/questions/18940961/is-there-a-difference-between-data-structure-and-data-type/18940989)


::: warning Major Takeaways before you leave

1. What are Data Structures?
2. Why are they important?
3. What is the point of data structure?

:::


<Disqus />
<SimpleNewsletter/>


[data structure]: https://en.wikipedia.org/wiki/Data_structure
*[HTML]: Hyper Text Markup Language
*[ADT]: Abstract Data Type
*[primitive data types]: character, char, integer, int, short, long, byte, float, double, real, double, boolean, reference
[tree]: https://en.wikipedia.org/wiki/Tree_(data_structure)
[graph]: https://en.wikipedia.org/wiki/Graph_(abstract_data_type)