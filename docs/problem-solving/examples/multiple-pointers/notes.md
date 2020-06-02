[← Back](../../intro.md)

# Multiple pointers examples

Write a function called **sumZero** which accepts a **sorted array of integers**. The function should **find the first pair where the sum is 0**. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```javascript
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

- [Naive solution](<./O(n^2).mjs>)

  - Time complexity _O(n<sup>2</sup>)_
  - Space complexity _O(1)_

- [Better solution](<./O(n).mjs>).
  - Time complexity _O(n)_
  - Space complexity _O(1)_
