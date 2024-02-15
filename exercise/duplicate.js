function duplicate(arr) {
    let res = [] // 2, 3, 5
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (res.includes(arr[i]) == false && arr[i] == arr[i + 1]) {
            res.push(arr[i])
        }
    }

    return res
}

function sumDuplicate(arr) {
    let res = []
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] || arr[i] == arr[i - 1]) {
            res.push(arr[i])
        }
    }

    return res.reduce((a, b) => a + b)
}

console.log(duplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]))
console.log(sumDuplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]))