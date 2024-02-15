const person = {
  firstName: "Frangky",
  lastName: "sihombing",
  greet() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

Object.freeze(person)
person.age = 28
person.firstName = "John"
delete person.firstName

console.log(person)

// const person2 = Object.create(person);
// person2.firstName = "John";

// console.log(person);
// console.log(person2);
