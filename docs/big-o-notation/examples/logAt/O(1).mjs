/* eslint-disable no-console */

import {performance} from 'perf_hooks';

(function run() {
  function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
      console.log(i);
    }
  }

  const T1 = performance.now();
  logAtMost5(5);
  const T2 = performance.now();

  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
