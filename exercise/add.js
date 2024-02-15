function addValue(arr, num) {
    if (arr.includes(num) === false) {
        arr.push(num)
    }

    return arr
}

const arr = [1, 2, 3, 4]
const number = 4

console.log(addValue(arr, number))
