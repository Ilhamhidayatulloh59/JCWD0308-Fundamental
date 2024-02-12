const number = 10000000000 // 1.234.567
const numString = number.toString() // "1234567" .567
let result = ""
let count = 0

// console.log(number)
// console.log(numString)

for (let i = numString.length - 1; i >= 0; i--) {
    // result = result + numString.charAt(i)
    if (count % 3 === 0 && count > 0) {
        result = "." + result
    }
    
    result = numString.charAt(i) + result
    count++
}

console.log(`Rp. ${result},00`)
