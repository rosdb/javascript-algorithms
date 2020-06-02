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

    for (let i = 0; i < arr1.length; i++) {
      const square = Math.pow(arr1[i], 2); // or `arr1[i] ** 2`
      const correctIndex = arr2.indexOf(square);

      if (correctIndex === -1) {
        return false;
      }

      arr2.splice(correctIndex, 1);
    }

    return true;
  }
})();
