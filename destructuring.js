// array destructuring

let arr = [1, 2, 3];
let [c, b, a] = arr;

console.log(c);

// object destructuring
let person = {
  name: "John",
  age: 20,
};

let { age, name } = person;

console.log(name);
console.log(age);

// spread oprator ... -> copy value
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const data1 = {
  name: "Andi",
};

const data2 = {
  email: "andi@gmail.com",
};

const data3 = {
  ...data1,
  ...data2,
};

console.log(data3)
