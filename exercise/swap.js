const word = "The QuiCk BrOwN Fox"
let result = ""

for (let i = 0; i < word.length; i++) {
    const letter = word.charAt(i)

    if (letter == letter.toUpperCase()) {
        result += letter.toLowerCase()
    } else {
        result += letter.toUpperCase()
    }
}

console.log(word)
console.log(result)

