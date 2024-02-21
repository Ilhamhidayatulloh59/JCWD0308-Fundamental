let input = "monyet sedang makan pisang"
let output = "m****t sedang makan pisang"

let input1 = "anjing dan babi sedang bermain"
let output1 = "a****g dan b**i sedang bermain"

function myFunc(str) {
    const sensor = ["anjing", "babi", "monyet"]
    const res = []
    str.split(" ").map((item) => {
        if (sensor.includes(item)) {
            res.push(item[0] + "*".repeat(item.length - 2) + item[item.length - 1])
        } else {
            res.push(item)
        }
    })
    return res.join(" ")
}

console.log(myFunc(input1))

function star(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i))
    }
}

star(5)