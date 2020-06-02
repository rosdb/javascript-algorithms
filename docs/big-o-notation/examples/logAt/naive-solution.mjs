import {performance} from 'perf_hooks';

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    // eslint-disable-next-line no-console
    console.log(i);
  }
}

(function run() {
  const T1 = performance.now();
  logAtLeast5(5);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
