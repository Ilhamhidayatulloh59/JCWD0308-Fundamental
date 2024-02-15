let user2 = new Object()

let user = {
    name: "David", // properties -> key: value
    greet() { // method
        return "Hello!"
    }
}

// console.log(user.name)
// console.log(user.greet())

let person = {
    name: "Frangky",
    age: 26
}

person.hobby = "coding" // add property
person.age = 20 // edit property
person.name = "John"

delete person.hobby // delete property

// console.log(person)

// accessing value
// console.log(person.name)
// console.log(person["name"])

let person2 = {
    name: "Budi",
    age: 25,
    address: {
        city: "Bandung",
        country: "Indonesia"
    }
}

let item = "name"
// console.log(person2[item])

// console.log(person2)
// console.log(person2.address?.city) // optional chaining

console.log(Object.keys(person2))

for (let key in person2) {
    // console.log(key)
    console.log(person2[key])
}

