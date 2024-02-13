function concat(arr) {
    const fruit = arr[arr.length - 1]
    arr.pop()
    return arr.join(", ") + " and " + fruit
}

console.log(concat(["Apple", "Banana", "Chery", "Date"]))
