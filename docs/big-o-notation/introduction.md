[← Back](../../README.md)

# Big O Notation

Imagine we have multiple implementations of the same function. **How can we determine which one is the "best"?**

It's important to have a precise vocabulary to talk about how our code performs.

Big O Notation is a way to talk formally about how the runtime of an algorithm grows as the inputs grow. Big O Notation can give us a high level understanding of the time or space complexity of an algorithm. **We won't care about the details**, only the trends (linear, quadratic, constant), because different machines will record different times. Sometimes, the same machine will record different times. For fast algorithms, speed measurements may not be precise enough.
Rather than counting seconds, which are so variable, let's count the number of simple operations the computer has to perform.

We say that an algorithm is _O(f(n))_ if the number of simple operations the computer has to do is eventually less than a constant times _f(n)_, as _n_ increases.

- f(n) could be **linear**:
  (f(n) = n)

- f(n) could be **quadratic**:
  (f(n) = n<sup>2</sup>)

- f(n) could be **constant**:
  (f(n) = 1)

- f(n) could be something entirely different!

> [Example: **addUpTo**](./examples/addUpTo/)

### Rules of Thumb in Time Complexity

There are several rules of thumb that can help. These rules won't always work, but are a helpful starting point.

- Arithmetic operations are constant;
- Variable assignment is constant;
- Accessing elements in an array (by index) or object (by key) is constant;
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

> [Example: **logAt**](./examples/logAt/)

### Rules of Thumb in Space Complexity

We can also use Big O Notation to analyze the space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?

- Most primitives (booleans, numbers, `undefined`, `null`) are constant space;
- Strings require _O(n)_ space (where _n_ is the string length);
- Reference types are generally _O(n)_, where _n_ is the length (for arrays) or the number of keys (for objects).

## Big O and JS Data Structures

Now that we've covered Big O Notation, let's spend a couple minutes analyzing the things we do all the time in JavaScript: working with Arrays, Objects, and built-in methods.

### Objects

```JS
const player = {
  username: 'giotramu',
  multiplayerEnabled: true,
  favouriteGenres: ['action', 'adventure', 'puzzle']
};
```

When you don't need any ordering, objects are an excellent choice!

- Insertion ➜ _O(1)_
- Removal ➜ _O(1)_
- Searching ➜ _O(n)_
- Access ➜ _O(1)_

Some Object methods through the lens of Big O:

- Object.keys ➜ _O(n)_
- Object.values ➜ _O(n)_
- Object.entries ➜ _O(n)_
- Object.hasOwnProperty ➜ _O(1)_

### Arrays

Use array when you need order.

```JS
const top5Videogames = ['The Witcher 3: Wild Hunt', 'God of War', 'Portal 2', 'The Last Of Us', 'The Legend of Zelda: Breath of the Wild'];
```

- Insertion ➜ It depends...
- Removal ➜ It depends...
- Searching ➜ _O(n)_
- Access ➜ _O(1)_

Some Array methods through the lens of Big O. Inserting at the beginning is not as easy as we might think. There are more efficient data structures for that:

- Array.push ➜ _O(1)_
- Array.pop ➜ _O(1)_
- Array.shift ➜ _O(n)_
- Array.unshift ➜ _O(n)_
- Array.concat ➜ _O(n)_
- Array.slice ➜ _O(n)_
- Array.splice ➜ _O(n)_
- Array.sort ➜ _O(n \* log n)_
- Array.forEach/map/filter/reduce/etc. ➜ _O(n)_
