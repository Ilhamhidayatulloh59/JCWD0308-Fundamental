let count = 0;

count++; // count = count + 1
count += 1; // count = count + 1
count = count + 1;

let arr = [1, 2, 3];

class Student {
  name = "";
  age = 0;

  constructor(nama, umur) {
    this.name = nama;
    this.age = umur;
  }
}

let obj1 = new Student("Andi", 21);
let obj2 = new Student("Budi", 21);

let obj = {
  name: "John",
  age: 26,
};
console.log(Object.keys(obj))

let newObj = {
  name: "John",
  age: 26,
};

console.log(obj === newObj);

function compareObj(obj1, obj2) {
    // let res = false

    // for (let key in obj1) {
    //     if (obj1[key] === obj2[key]) {
    //         res = true
    //     } else {
    //         res = false
    //     }
    // }   

    return obj1.name === obj2.name && obj1.age === obj2.age
}

console.log(compareObj(obj, newObj))




