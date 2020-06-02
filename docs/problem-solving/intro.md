[← Back](../../README.md)

---

**Table of contents**

- [Problem-solving approach](#problem-solving-approach)
  - [Understand the problem](#understand-the-problem)
  - [Explore concrete examples](#explore-concrete-examples)
  - [Break it down](#break-it-down)
  - [Solve/Simplify](#solvesimplify)
  - [Look back and refactor](#look-back-and-refactor)
- [Problem-solving patterns](#problem-solving-patterns)
  - [Frequency counters](#frequency-counters)
  - [Multiple pointers](#multiple-pointers)
  - [Sliding window](#sliding-window)
  - [Divide and conquer](#divide-and-conquer)

---

# Problem-solving approach

Many of these strategies are adapted from [George Polya][1], whose book _How To Solve It_ is a great resource for anyone who wants to become a better problem solver.

## Understand the problem

Ask yourself:

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5. How should I label the important pieces of data that are a part of the problem?

## Explore concrete examples

Coming up with examples can help you understand the problem better.

Examples also provide sanity checks that your eventual solution works how it should.

- Start with simple examples;
- Progress to more complex examples;
- Explore examples with empty inputs;
- Explore examples with invalid inputs.

## Break it down

Explicitly write out the steps you need to take. This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

## Solve/Simplify

Always solve a simpler problem!

- Find the core difficulty in what you're trying to do;
- Temporarily ignore that difficulty;
- Write a simplified solution;
- Then incorporate that difficulty back in.

## Look back and refactor

Refactoring questions:

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

# Problem-solving patterns

Using the common problem-solving patterns will help you reduce time and space complexity and help solve more challenging problems.

## Frequency counters

This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or _O(n<sup>2</sup>)_ operations with arrays/strings.

> [Examples](./examples/frequency-counters/)

## Multiple pointers

Creating **pointers** or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well.

> [Examples](./examples/multiple-pointers/)

## Sliding window

This pattern involves creating a **window** which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string, etc.

> [Examples](./examples/sliding-window/)

## Divide and conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease the time complexity.

> [Examples](./examples/divide-and-conquer/)

[1]: https://en.wikipedia.org/wiki/George_P%C3%B3lya
