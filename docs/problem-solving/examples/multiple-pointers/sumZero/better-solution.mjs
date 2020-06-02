import {performance} from 'perf_hooks';

/**
 * Write a function called `sumZero` which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 *
 * sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
 * sumZero([-2, 0, 1, 3]); // undefined
 * sumZero([1, 2, 3]); // undefined
 *
 */

// --- Time complexity O(n)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

(function run() {
  const T1 = performance.now();
  const R = sumZero([-3, -2, -1, 0, 1, 2, 3]);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Result: ${R}`);

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
