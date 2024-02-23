function myFunc(str1, str2) {
    let a = str1.split("").sort().join("")
    let b = str2.split("").sort().join("")
    console.log(a, b)
    return a == b
}

console.log(myFunc("anagram", "nagaram"))
console.log(myFunc("lagu", "gula"))
console.log(myFunc("rat", "car"))
// "aaagmnr" == "aaagmnr"
