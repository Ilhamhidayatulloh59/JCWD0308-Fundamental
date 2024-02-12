const word = "hello"
let reverseWord = ""

// console.log(word.length)

for (let i = word.length - 1; i >= 0; i--) {
    console.log(word.charAt(i))
    // console.log(word[i])
    reverseWord += word.charAt(i)
    // console.log(reverseWord)
}

// console.log(reverseWord)

if (word === reverseWord) {
    console.log(`${word} is palindrome`)
} else {
    console.log(`${word} is not palindrome`)
}