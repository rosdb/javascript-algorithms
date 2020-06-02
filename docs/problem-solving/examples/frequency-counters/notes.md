[← Back](../../intro.md)

# Frequency counters examples

Write a function called **same** which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```javascript
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
```

- [Naive solution](<./same/O(n^2).mjs>)

  - Time complexity _O(n<sup>2</sup>)_

- [Better solution](<./same/O(n).mjs>)
  - Time complexity _O(n)_.
