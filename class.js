let person = {
    name: "Frengky",
    age: 25,
    hobby: "coding",
    greet() {
        console.log(`Hello ${this.name}`)
    }
}

class Person {
    name = "" // public
    #age = 0 // private
    hobby = ""
    static species = "Human" // static

    constructor(name, age, hobby) {
        this.name = name
        this.#age = age
        this.hobby = hobby
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }

    getAge() {
        return this.#age
    }
}

let person1 = new Person("Budi", 20, "Reading a book")
let person2 = new Person("Andi", 21, "Playing LeetCode")

console.log(person1)
console.log(person1.getAge())
console.log(person2)
person1.greet()
person2.greet()

console.log(Person.species)
console.log(Date.now())

let now = new Date()
console.log(now.getTime());

class Tanggal {
    date = 0
    static Now() {
        console.log(`Waktu sekarang`)
    }
    constructor(date) {
        this.date = date
    }

    getTime() {

    }
}

Tanggal.Now()


