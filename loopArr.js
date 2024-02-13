const fruits = ["Apple", "Orange", "Mango", "Banana", "Melon"]

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// fruits.forEach((fruit) => {
//     if (fruit === "Banana") {
//         console.log("Pisang")
//     } else {
//         console.log(fruit)
//     }
// })

// fruits.map((fruit) => console.log(fruit))

for (let fruit of fruits) {
    console.log(fruit)
}
