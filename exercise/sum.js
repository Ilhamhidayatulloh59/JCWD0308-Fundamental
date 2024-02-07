const n = 5;
let result = 0;
let desc = "";

for (let i = 1; i <= n; i++) {
  // console.log(i)
  result += i;
  if (i === 1) {
    desc += `${i}`;
  } else {
    desc += ` + ${i}`;
  }
}

console.log(desc);
console.log(result);
console.log(`${n} -> ${desc} = ${result}`)
