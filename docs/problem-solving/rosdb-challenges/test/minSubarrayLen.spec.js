const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');
const minSubarrayLen = require('../minSubarrayLen');

test(`Given an array of integers and a positive integer find the minimal length of a contiguous subarray of which the sum is greater then or equal to the integer passed to`, () => {
  expect(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
  expect(minSubarrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
  expect(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
  expect(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
  expect(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
  expect(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
  expect(minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
});

// --- Test the Time Complexity
const r = minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);
calcTimeElapsed(() => r); // O(n)
