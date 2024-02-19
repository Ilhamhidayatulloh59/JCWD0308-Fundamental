// var x = 10
// let y = 6

// console.log(x, y);
// {
//     var x = 1
//     let y = 2
// }

// console.log(a)

var a = 10; // Hoisting
let b = 2;

// console.log(sum(2, 4))
// console.log(jumlah(2, 4))

function sum(a, b) {
  // Hoisting
  return a + b;
}

const jumlah = function (a, b) {
  return a + b;
};

const person = {
  name: "John",
  greet() {
    console.log("Hello World")
  }
};

person.name;
person
person["name"];

console["log"]("Hello World")

let arr = [1, 2, 3]

// arr.forEach((element) => {
//   console.log(element);
// });

// arr.map((element) => {
//   console.log(element);
// });

// const res = []
// arr.forEach((item) => res.push(item * 2))
// console.log(res)
// console.log(arr.map((item) => item * 2))


const num = [1, 2, 3]


// console.log(1 + undefined)
// console.log("true" * true + true)
// console.log(false + false + false)
// console.log(typeof null)

let i = -1
// console.log(++i == 0)

// console.log(0 === false)

// console.log(num.some((item) => item > 1))

let word = typeof typeof true

// console.log(word.split(""))

console.log(typeof console.log)


