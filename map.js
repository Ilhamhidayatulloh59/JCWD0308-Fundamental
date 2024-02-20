const myMap = new Map()

myMap.set("David", 1)
myMap.set("Buchanan", '002')
myMap.set(1, "John")
myMap.set([1], "Doe")

console.log(myMap);
// console.log(myMap.get([ 1 ]));

for (const [key, value] of myMap) {
    console.log(value);
}

