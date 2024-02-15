function maxArr(max, ...num) { // rest parameter
    let res = []
    for (let i = 0; i < max; i++) {
        res.push(num[i])
    }
    return res
}

console.log(maxArr(5, 5, 10, 24, 3, 6, 7, 8))


