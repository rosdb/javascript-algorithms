[← Back](../../README.md)

---

**Table of contents**

- [What is recursion?](#what-is-recursion)
  - [How recursive functions work](#how-recursive-functions-work)

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
