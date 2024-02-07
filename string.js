let word = "purwadhika"
let wordCapital = word.toUpperCase().concat("BANDUNG").toLowerCase()

console.log(wordCapital)
console.log(wordCapital.concat(word))

let name = "David"

let message = "Hello " + name
let message2 = 'Hello '.concat(name)
let message3 = `Hello "${name}"`

console.log(message)
console.log(message2)
console.log(message3)