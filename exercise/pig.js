let input = "Pig latin is cool !";
let output = "igPay atinlay siay oolcay !ay";

function myFunc(str) {
  let res = str
    .split(" ")
    .map((item) => item.substring(1) + item.charAt(0) + "ay");
  return res.join(" ");
}

console.log(myFunc(input));

let word = "Purwadhika";
console.log(word.substring(1));
console.log(word.substr(2, 3));
