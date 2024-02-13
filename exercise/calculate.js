function calculate(arr1, arr2) {
    return arr1.map((item, index) => item + arr2[index])
}

function calculate2(arr1, arr2) {
    let res = []
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i])
    }
    return res
}

const num1 = [1, 2, 3]
const num2 = [3, 2, 1]
console.log(calculate(num1, num2))
console.log(calculate2(num1, num2))

