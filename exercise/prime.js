const n = 17;
let divider = 0; // 1

for (let i = 0; i <= n; i++) {
  if (n % i === 0) {
    divider++;
  }
}

console.log(divider === 2 ? "Prime" : "Not Prime");
