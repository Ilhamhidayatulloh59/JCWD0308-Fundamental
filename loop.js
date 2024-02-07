// for loop
for (let i = 1; i < 5; i++) {
  if (i === 2) continue;
  console.log(`Hello ke-${i}`);
}

for (let i = 10; i > 0; i--) {
  console.log(`World ke-${i}`);
}

let i = 0
while (true) {
    if (i === 5) break
    console.log(`Hello ke-${i}`)
    i++
}

let j = 0
do {
    console.log(`World ke-${j}`)
    j++
} while (j < 5)
