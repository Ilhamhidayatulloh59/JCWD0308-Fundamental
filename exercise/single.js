function myFunc(arr) {
    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
            return arr[i]
        }
    }
    return arr
}

console.log(myFunc([4, 1, 2, 1, 2]))
console.log(myFunc([2, 2, 1]))
console.log(myFunc([1]))