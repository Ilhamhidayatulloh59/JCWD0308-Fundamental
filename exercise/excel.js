function myFunc (str) {
    let alph = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let n = 0
    for (let i = 0; i < str.length; i++) {
        n = alph.findIndex((item) => item == str[i]) + n * 26
    }
    return n
}

console.log(myFunc("AAA"));
console.log(myFunc("AB"));
console.log(myFunc("BA"));
console.log(myFunc("BCA"));
console.log(myFunc("BBB"));
console.log(myFunc("ZZZZ"));
console.log(myFunc("A"))
