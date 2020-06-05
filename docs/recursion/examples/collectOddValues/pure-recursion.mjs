import {performance} from 'perf_hooks';

function collectOddValues(arr) {
  const result = [];

  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  const recursion = collectOddValues(arr.slice(1));
  return result.concat(recursion);
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
