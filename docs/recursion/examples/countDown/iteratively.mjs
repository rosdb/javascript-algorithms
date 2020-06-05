import {performance} from 'perf_hooks';

function countDown(num) {
  for (let i = num; i > 0; i--) {
    // eslint-disable-next-line no-console
    console.log(i);
  }

  // eslint-disable-next-line no-console
  console.log('All done');
}

(function run() {
  const T1 = performance.now();
  countDown(10);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
