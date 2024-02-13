function square(number) {
    return number * number
}

const square2 = function(number) {
    return number * number
}

function multiple(a, b) {
    // return a * b
    console.log(a * b)
}

let x = square(4)

console.log(x)
// console.log(multiple(10, 5))
multiple(10, 5)


function greeting(name) {
    const hello = "Hello"

    return hello + " " + name
}

console.log(greeting("Budi"))

// default parameter
function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(7))

// rest parameter
function myFunc(a, b, ...etc) {
    console.log("a", a)
    console.log("b", b)
    console.log("etc", etc)
} 

myFunc("one", "two", "three", "four")

// nested function
function getMessage(firstName) {
    function sayHello() {
        return "Hello " + firstName + "."
    }

    function welcomeMessage() {
        return "Welcome to Purwadhika"
    }

    return sayHello() + " " + welcomeMessage()
}

const message = getMessage("David")
console.log(message)
