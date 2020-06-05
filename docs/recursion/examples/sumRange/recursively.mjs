import {performance} from 'perf_hooks';

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

(function run() {
  const T1 = performance.now();
  const R = sumRange(5);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Result: ${R}`);

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
