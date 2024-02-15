function primitive(arr) {
  return arr.filter((item) => typeof item != "object");
}

console.log(primitive([1, [], undefined, {}, "string", {}, []]));

function secSmall(arr) {
  arr.sort((a, b) => a - b);
  return arr[1];
}

console.log(secSmall([5, 3, 1, 7, 2, 6]));

function mixArr(arr) {
  return arr.filter((item) => typeof item == "number").reduce((a, b) => a + b);
}

console.log(mixArr(["3", 1, "string", null, 2]));
