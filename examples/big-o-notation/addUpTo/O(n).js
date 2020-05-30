function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

const T1 = performance.now();
const R = addUpTo(5);
const T2 = performance.now();

console.log(`Result number: ${R}`);
console.log(`Time Elapsed: ${(T1 - T2) / 1000} seconds.`);
