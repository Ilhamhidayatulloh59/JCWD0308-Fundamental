// const arr = [1, 2, 3, 4, 5, 1]
// const set = new Set(arr)

// console.log(arr.filter(item => item == 2).length)
// console.log(typeof set);


let arr1 = [
    "apple",
    () => ["melon", () => ["kiwi"]],
    { name: "orange" }
]


console.log(arr1)
console.log(arr1[0])
console.log(arr1[2].name)
console.log(arr1[1]()[0])
console.log(arr1[1]()[1]()[0])



let obj = {
    arr: ["andi"],
    name: () => ["budi", { city: "bandung" }],
    fruit: (name) => { 
        return `Hello ${name}`
    }
}

console.log(obj.arr[0])
console.log(obj.name()[0])
console.log(obj.name()[1].city)
console.log(obj.fruit(obj.arr[0]))
console.log(obj.fruit(obj.name()[0]))
console.log(obj.fruit(obj.name()[1].city))

