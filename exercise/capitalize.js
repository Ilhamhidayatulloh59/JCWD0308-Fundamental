const world = "hello purwadhika bandung" // Hello Purwadhika Bandung
let result = ""

for (let i = 0; i < world.length; i++) {
    if (i == 0 || world.charAt(i - 1) == " ") {
        result += world.charAt(i).toUpperCase()
    } else {
        result += world.charAt(i).toLowerCase()
    }
}

console.log(result)

