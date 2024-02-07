// Write a code to print the first N fibonacci numbers
// 0 1 1 2 3 5 8 13 21 34

let n = 10
let a = 0
let b = 1
let NextNumber = 0

for (let i = 1; i < n; i++) {
    NextNumber = a + b
    b = a
    a = NextNumber
    console.log(a)
}


