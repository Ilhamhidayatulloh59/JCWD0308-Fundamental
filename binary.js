function binarySearch(arr, l, r, x) {
    // l -> index pertama
    // r -> index terakhir
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2)

        if (arr[mid] == x) return mid

        if (arr[mid] > x) {
            return binarySearch(arr, l, mid - 1, x) // sisa kiri
        } else {
            return binarySearch(arr, mid + 1, r, x) // sisa kanan
        }
    }
    return -1
}

let arr = [2, 3, 4, 10, 40]
let x = 10
console.log(binarySearch(arr, 0, arr.length - 1, x))

let num = [2, 3]
if (num[1] < num[0]) {
    [num[1], num[0]] = [num[0], num[1]]
}

console.log(num)

var a = 2
var b = 1

{
    let c = a // 2
    var a = b // 1
    var b = c // 1
}

console.log(a, b)

