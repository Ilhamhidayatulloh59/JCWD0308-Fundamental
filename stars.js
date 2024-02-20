function star(n) {
    let res = ""
    for (let i = n; i > 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            res += "*"
        }
        res += `\n`
    }
    return res
}

console.log(star(5))

