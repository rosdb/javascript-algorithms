import {performance} from 'perf_hooks';

/**
 * Write a function called `addUpTo`,
 * that calculates the sum of all numbers from 1 up to (and including) some number n.
 */

// --- Time complexity O(n)
function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
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
