import {performance} from 'perf_hooks';

function countDown(num) {
  let count = num;

  if (count <= 0) {
    // eslint-disable-next-line no-console
    console.log('All done!');
    return;
  }

  // eslint-disable-next-line no-console
  console.log(count);
  count--;
  countDown(count);
}

(function run() {
  const T1 = performance.now();
  countDown(10);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
