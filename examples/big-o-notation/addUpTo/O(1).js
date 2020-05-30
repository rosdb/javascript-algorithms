function addUpTo(n) {
  return n * (n + 1) / 2;
}

const T1 = performance.now();
const R = addUpTo(5);
const T2 = performance.now();

console.log(`Result number: ${R}`);
console.log(`Time Elapsed: ${(T1 - T2) / 1000} seconds.`);
