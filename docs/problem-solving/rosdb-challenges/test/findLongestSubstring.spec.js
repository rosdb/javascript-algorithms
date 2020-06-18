const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');
const findLongestSubstring = require('../findLongestSubstring');

test(`Given a string return the length of the longest substring with all distinct characters`, () => {
  expect(findLongestSubstring('')).toBe(0);
  expect(findLongestSubstring('rithmschool')).toBe(7);
  expect(findLongestSubstring('thisisawesome')).toBe(6);
  expect(findLongestSubstring('thecatinthehat')).toBe(7);
  expect(findLongestSubstring('bbbbbb')).toBe(1);
  expect(findLongestSubstring('longestsubstring')).toBe(8);
  expect(findLongestSubstring('thisishowwedoit')).toBe(6);
});

// --- Test the Time Complexity
const r = findLongestSubstring('longestsubstring');
calcTimeElapsed(() => r); // O(n)
