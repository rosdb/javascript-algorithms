[← Back](../../README.md)

---

**Table of contents**

- [What is recursion?](#what-is-recursion)
  - [How recursive functions work](#how-recursive-functions-work)
  - [Common recursion pitfalls](#common-recursion-pitfalls)
  - [Recursion tips](#recursion-tips)

---

# What is recursion?

A process (a function in JavaScript case) that calls itself.
Recursion in computer science and JavaScript ecosystem is everywhere!

- `JSON.parse` / `JSON.stringify`
- `document.getElementById` and DOM traversal algorithms
- Object traversal
- Very common with more complex algorithms
- It's sometimes a cleaner alternative to iteration

## How recursive functions work

Invoke the same function with a different input until you reach the **Base Case** (the condition when the recursion ends).

> [Example: **countDown**](./examples/countDown/)

> [Example: **factorial**](./examples/factorial/)

> [Example: **sumRange**](./examples/sumRange/)

## Common recursion pitfalls

- No base case
- Forgetting to return or returning the wrong thing

```js
// 👍
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num);
}

// 👎
function factorial(num) {
  if (num === 1) console.log(1);
  return num * factorial(num - 1); // error: Maximum call stack size exceeded
}
```

## Recursion tips

- For arrays, use methods like [**slice**][1], the [**spread operator**][2], and [**concat**][3] that make copies of arrays so you do not mutate them.
- Remember that strings are immutable so you will need to use methods like [**slice**][4], or [**substring**][5] to make copies of strings.

> [Example: **collectOddValues**](./examples/collectOddValues/)

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
