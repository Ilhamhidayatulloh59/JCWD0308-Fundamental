let input = "2811234567";
let output = "(281)-123-4567";

function myFunc(input) {
  return `(${input.substr(0, 3)})-${input.substr(3, 3)}-${input.substr(6)}`;
}

console.log(myFunc(input));

function phone(num) {
    let format = "(***)-***-****"
    for (let i = 0; i < num.length; i++) {
        format = format.replace("*", num[i])
    }
    return format
}

console.log(phone(input))

let word = "Purwadhika" // rwadhi

console.log(word.slice(2, 8))
console.log(word.slice(8, 2))
console.log(word.substr(2, 6))
console.log(word.substring(2, 8))
console.log(word.substring(8, 2))
console.log(word.search("a"))
console.log(word[4])