// mutable vs immutable
const Person = {
    name : "Jhony",
    age : 26
}

const newPerson = Person

// console.log(Person)
// console.log(newPerson)

newPerson.name = "Budi"

// console.log(Person)
// console.log(newPerson)

let Name = "Andi"
let newName = Name


console.log(Name)
console.log(newName)

newName = "Budi"

console.log(Name)
console.log(newName)