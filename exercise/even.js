function even(arr) {
    // return arr.filter((item) => item % 2 === 0)
    
    let res = []
    arr.forEach((value) => {
        if (value % 2 === 0) {
            res.push(value)
        }
    })

    return res
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(even(num))

