const input = true;
const type = typeof input;

console.log(type);
console.log(type == "string" ? 1 : type == "number" ? 2 : 3);
