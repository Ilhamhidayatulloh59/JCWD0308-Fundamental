const word = "An apple a day keeps the doctor away"

console.log(word.toLowerCase().replaceAll("a", "*"))
console.log(word.replace(/a/gi, "*")) // RegEx
console.log(word.replace(/a|A/g, "*" ))
