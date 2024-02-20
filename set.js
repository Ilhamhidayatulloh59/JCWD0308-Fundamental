const fruits = ["apple", "banana", "melon", "apple"]

const newFruits = new Set(fruits)

// newFruits.has("banana")
console.log(newFruits)
console.log(newFruits.entries())
console.log(newFruits.has("banana"))

// newFruits.forEach((item) => {
//     console.log(item);
// })