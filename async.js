// setTimeout(message, 3000) // delay

function message() {
    console.log("Asynchronous is easy!")
}

console.log('Task 1')
// console.log('Task 2')
setTimeout(() => console.log('Task 2'), 3000)
console.log('Task 3')


