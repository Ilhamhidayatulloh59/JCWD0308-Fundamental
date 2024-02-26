const obj = {
    name: 'jason',
    age: 25,
    address: 'jakarta'
}
const obj2 = {
    name: 'jason',
    age: 25,
    address: 'jakarta'
}
let objString = JSON.stringify(obj)
let objString2 = JSON.stringify(obj2)

console.log(objString)
console.log(typeof objString)

console.log(JSON.parse(objString))

console.log(obj === obj2)
console.log(objString === objString2)

