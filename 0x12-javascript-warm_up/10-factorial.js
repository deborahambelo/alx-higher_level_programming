#!/usr/bin/node
function factorial(n) {
  if (n === 0 || isNaN(n)) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const arg = Number(process.argv[2]);
const result = factorial(arg);
console.log(result);
