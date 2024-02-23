function pascal(num) {
    let res = []
    for (let i = 1; i <= num; i++) {
        let arr = []
        for (let j = 0; j < i; j++) {
            if (j == 0 || j == i - 1) {
                arr.push(1)
            } else { // 1
                arr.push(res[i - 2][j - 1] + res[i - 2][j])
            }
        }
        res.push(arr)
    }
    return res
}

console.log(pascal(3)); // [[1], [1, 1], [1, 2, 1]]