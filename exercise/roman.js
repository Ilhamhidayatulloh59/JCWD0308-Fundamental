function myFunc(str) {
  let res = 0;
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  for (let i = 0; i < str.length; i++) {
    if (roman[str[i]] < roman[str[i + 1]]) {
      res -= roman[str[i]];
    } else {
      res += roman[str[i]];
    }
  }
  return res;
}

// console.log(myFunc("IX"));
// console.log(myFunc("VIII"));
// console.log(myFunc("CM"));

function roman(num) {
  let res = "";
  let romawi = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (key in romawi) {
    while (num >= romawi[key]) {
        res += key
        num -= romawi[key]
    }
  }
  return res;
}

console.log(roman(123)); // "CXXIII"
console.log(roman(9))
console.log(myFunc(roman(999)))
