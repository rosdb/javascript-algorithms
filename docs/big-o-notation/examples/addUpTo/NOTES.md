[← Back](../../introduction.md)

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number _n_.

- [Naif solution](<./O(n).mjs>).
  The number of operations grows roughly proportionally with _n_. If _n_ doubles, the number of operations will also roughly double.

- [Best solution](<./O(1).mjs>).
  Always 3 simple operations, regardless of the size of _n_.
