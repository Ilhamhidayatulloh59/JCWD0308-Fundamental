function rotate(matrix) {
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        let arr = []
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            arr.push(matrix[j][i])
        }
        res.push(arr)
    }
    return res
}

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))


function addBinary(a, b) {
    // let arr1 = a.length
    // let arr2 = b.length
    // let max = Math.max(arr1, arr2)
    // let res = ""
    // let sisa = 0
    // let value = 0

    // for (let i = 0; i < max; i++) {
    //     value = Number(a[arr1 - 1 - i] || 0) + Number(b[arr2 - 1 - i] || 0) + sisa
    //     sisa = Math.floor(value / 2)
    //     res = (value % 2 ) + res
    // }

    // if (sisa == 1) res = "1" + res
    // return res
    let z = BigInt('0b' + a) + BigInt('0b' + b);
    return z.toString(2);
}

console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))

console.log(BigInt("0b" + "11").toString(2))
