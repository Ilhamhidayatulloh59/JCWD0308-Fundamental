const num = [1, 2, 3]
const number = [...num]

// number.push(4)

// console.log(num)
// console.log(number)

// console.log(num.concat(number))
// console.log([...num, ...number])

num[3] = 4
num[1] = 10
num[10] = 2
num[7] = 8

console.log(num)


const arr = [1, 2, 3, 4, 5]

console.log(arr.reduce((a, b) => a + b))
