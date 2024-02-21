let input = [2, 1, 4, 3, 5]
let output = [1, 5, 2, 4, 3]

let input1 = [10, 11, 12, 13, 14, 15]
let output1 = [10, 15, 11, 14, 12, 13] 

let input2 = [10, 15, 20, 25, 30, 35]
let output2 = [10, 35, 15, 30, 20, 25]

let input3 = [2, 4, 6, 8, 10]
let output3 = [2, 10, 4, 8, 6] 


// [min1, max1, min2, max2 .....]

function myFunc(arr) {
    let res = []
    arr.sort((a, b) => a - b) // sort ascending
    for (let i = 0; i < arr.length / 2; i++) {
        res.push(arr[i]) // masukin depan -> 0, 1, 2
        res.push(arr[arr.length - 1 - i]) // masukin belakang -> 4, 3, 2
    }
    // res = res.slice(0, arr.length)
    res.length = arr.length
    return res
}

console.log(myFunc(input));
console.log(myFunc(input1));
console.log(myFunc(input2));
console.log(myFunc(input3));


