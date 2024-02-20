const user = {
    firstName: "John",
    lastName: "Smith",

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(value) {
        const splitName = value.split(" ")
        this.firstName = splitName[0]
        this.lastName = splitName[splitName.length - 1]
    }
}

user.fullName = "Muhammad Abid"
console.log(user.firstName)
console.log(user.lastName)
console.log(user.fullName)

let num = 0.2 + 0.1
console.log(num.toFixed(2) == 0.3)
console.log(num.toFixed(4))
