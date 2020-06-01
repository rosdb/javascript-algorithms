/* eslint-disable no-console */

import {performance} from 'perf_hooks';

(function run() {
  function addUpTo(n) {
    return (n * (n + 1)) / 2;
  }

  const T1 = performance.now();
  const R = addUpTo(1000000000);
  const T2 = performance.now();

  console.log(`Result number: ${R}`);
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
