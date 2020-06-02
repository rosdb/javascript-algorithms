/* eslint-disable no-console */

import {performance} from 'perf_hooks';

(function run() {
  const T1 = performance.now();
  const R = sumZero([-3, -2, -1, 0, 1, 2, 3]);
  const T2 = performance.now();

  console.log(`Result: ${R}`);
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);

  function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return [arr[i], arr[j]];
        }
      }
    }
  }
})();
