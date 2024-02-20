let kata = "AYAM"
let res = 0

for (let i = 0; i < kata.length; i++) {
    res += (kata.charCodeAt(i) - 64)
}

console.log(res)

console.log("C".charCodeAt(0) - 64)


let dest = [
    { country: "Thailand", budget: 12000000},
    { country: "Kamboja", budget: 11000000},
    { country: "Singapura", budget: 9000000},
    { country: "Malaysia", budget: 6000000}
]

console.log(dest[2].country)
console.log(dest[2][`budget`] + dest[3].budget + dest[2].country)

// let money = 7000000
// let selisih = money
// let destinasi = ""

// for (let i = 0; i < dest.length; i++) {
//     if (dest[i].budget <= money && money - dest[i].budget <= selisih) {
//         destinasi = dest[i].country
//         selisih = money - dest[i].budget
//     }
// }

// console.log(destinasi)

