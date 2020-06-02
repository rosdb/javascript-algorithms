/* eslint-disable no-console */

import {performance} from 'perf_hooks';

(function run() {
  const T1 = performance.now();
  const R = same([1, 2, 3], [4, 1, 9]);
  const T2 = performance.now();

  console.log(`Result: ${R}`);
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);

  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (const val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (const val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (const key in frequencyCounter1) {
      if (Object.prototype.hasOwnProperty.call(frequencyCounter1, key)) {
        const square = Math.pow(key, 2); // or `key ** 2`

        if (!(square in frequencyCounter2)) {
          return false;
        }

        if (frequencyCounter2[square] !== frequencyCounter1[key]) {
          return false;
        }
      }
    }

    return true;
  }
})();
