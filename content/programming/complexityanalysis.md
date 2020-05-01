---
title: Space Time Complexity and Algorithm Analysis
tags:
- complexity
- analysis
- algorithm
---

# Space Time Complexity

<TagLinks />

How much **time** does this algorithm need to finish?
How much **space** do I need to run this algorithm?
What is the relation between **input size** and time it takes to finish?

Asymptotic Notation to represent standardised way to gauging algorithms performance
Big-O Notation - worst case scenarios
Fit approximation

How time scales with respect to some input variables

Frequently seen symbols, $n$ is the number of input

Symbols  | Interpretation
:-------:|----------------
$O(1)$         | constant time<br> this is what everybody wants
$O(log(n))$    | Logarithmic time
$O(n)$         | Linear time
$O(n.log(n))$   | **Linearithmic** time
$O(n^2)$        | Quadratic time
$O(n^3)$        | Cubic time
$O(b^n)$        | Exponential time, $b > 1$
$O(n!)$         | Factorial time

## Big-O Properties

1. $$ O(n + c) = O(n)$$
2. $$O(c.n) = O(n),     c > 0$$

Depends on most dominant term in the function

<SimpleNewsletter/>
<Disqus />

[Big-O]: https://en.wikipedia.org/wiki/Big_O_notation