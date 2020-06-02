import {performance} from 'perf_hooks';

/**
 * Write a function called `addUpTo`,
 * that calculates the sum of all numbers from 1 up to (and including) some number n.
 */

// --- Time complexity O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

(function run() {
  const T1 = performance.now();
  const R = addUpTo(1000000000);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Result: ${R}`);

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
