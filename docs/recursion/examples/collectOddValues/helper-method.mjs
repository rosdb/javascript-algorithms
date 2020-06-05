import {performance} from 'perf_hooks';

function collectOddValues(arr) {
  const result = [];

  (function helper(value) {
    if (value.length === 0) {
      return;
    }

    if (value[0] % 2 !== 0) {
      result.push(value[0]);
    }

    helper(value.slice(1));
  })(arr);

  return result;
}

(function run() {
  const T1 = performance.now();
  const R = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Result: ${R}`);

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
