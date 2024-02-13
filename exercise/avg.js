function number(arr) {
  let sortArr = arr.sort((a, b) => a - b); // asc
  const lowest = sortArr[0];
  const highest = sortArr[sortArr.length - 1];
  const average = sortArr.reduce((a, b) => a + b) / arr.length;

  return { lowest, highest, average };
}

function number2(arr) {
    const lowest = Math.min(...arr)
    const highest = Math.max(...arr)
    const average = arr.reduce((a, b) => a + b) / arr.length;
  
    return { lowest, highest, average };
  }

let num = [12, 5, 23, 18, 4, 45, 32];
console.log(number(num));
console.log(number2(num));

