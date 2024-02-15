function diffArr(arr1, arr2) {
  let arr = arr1.concat(arr2);

  let res = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(diffArr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
