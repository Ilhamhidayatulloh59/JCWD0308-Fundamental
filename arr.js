let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

let obj1 = {
  name: "andi",
};
let obj2 = {
  name: "andi",
};

// console.log(arr1 === arr2)
// console.log(arr1.length === arr2.length)
// console.log(arr1[0] === arr2[0])

// console.log(obj1 === obj2)
// console.log(typeof arr1)

let word = "Bandung";

console.log(word[0]);

function searchStr(word, search) {
  let res = [word.search(search[0])];
  for (let i = 0; i < search.length - 1; i++) {
    res.push(res[i] + 1);
  }
  return res;
}

console.log(searchStr("Indonesia", "one"));


