const n = 4;
let result = 1;

for (let i = n; i > 0; i--) {
  console.log(i);
  // result *= i
  result = result * i;
}

console.log(result);
