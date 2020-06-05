import {performance} from 'perf_hooks';

function sumRange(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total += i;
  }

  return total;
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
