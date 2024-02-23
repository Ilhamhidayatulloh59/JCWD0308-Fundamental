function myFunc(arr) {
  let num = new Set(arr) // struktur data yang tidak menerima duplicate
  let med = Math.floor(arr.length / num.size);
  let res = 0
  num.forEach(item => {
    if (arr.filter(val => val === item).length > med) {
        res = item
    }
  })
  return res;
}

console.log(myFunc([3, 2, 3, 3]));
console.log(myFunc([2, 2, 1, 1, 1, 2, 2]));
