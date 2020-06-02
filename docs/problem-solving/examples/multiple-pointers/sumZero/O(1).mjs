/* eslint-disable no-console */

import {performance} from 'perf_hooks';

(function run() {
  const T1 = performance.now();
  const R = sumZero([-3, -2, -1, 0, 1, 2, 3]);
  const T2 = performance.now();

  console.log(`Result: ${R}`);
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);

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
})();
