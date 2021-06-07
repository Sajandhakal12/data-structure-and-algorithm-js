const { performance } = require("perf_hooks");

function addUptoN(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUptoN(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed:${(t2 - t1) / 1000} seconds`);
