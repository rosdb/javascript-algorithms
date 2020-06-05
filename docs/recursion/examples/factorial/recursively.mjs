import {performance} from 'perf_hooks';

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

(function run() {
  const T1 = performance.now();
  const R = factorial(5);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Result: ${R}`);

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
