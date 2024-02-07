let age = 15;

if (age >= 17) {
  console.log("You can now create an ID Card");
} else {
  console.log("You are not old enough to create an ID Card");
}

let grade = "A";

if (grade == "A") {
  console.log("Excellent Result !");
} else if (grade == "B") {
  console.log("Great Result !");
} else {
  console.log("Good result !");
}

let date = new Date("2024-12-31");
let day = date.getDay();
console.log(day);

if (day === 0) {
  console.log("Hari Minggu");
} else if (day === 1) {
  console.log("Hari Senin");
} else if (day === 2) {
  console.log("Hari Selasa");
} else if (day === 3) {
  console.log("Hari Rabu");
} else if (day === 4) {
  console.log("Hari Kamis");
} else if (day === 5) {
  console.log("Hari Jum'at");
} else if (day === 6) {
  console.log("Hari Sabtu");
}

switch (day) {
  case 0:
    console.log("Hari Minggu");
    break;
  case 1:
    console.log("Hari Senin");
    break;
  case 2:
    console.log("Hari Selasa");
    break;
  case 3:
    console.log("Hari Rabu");
    break;
  case 4:
    console.log("Hari Kamis");
    break;
  case 5:
    console.log("Hari Jum'at");
    break;
  case 6:
    console.log("Hari Sabtu");
    break;
}

let car = "BMW";
let car2 = "Toyota";

if (car === "BMW" && car2 === "Toyota") {
  console.log("This Car Is Awesome");
}

let str = "php";

if (str === "Javascript") {
  console.log("Javascript");
} else {
  console.log("not Javascript");
}

// ternary oprator
let result = str === "Javascript" ? "Javascript" : "not Javascript";
console.log(result);

console.log(
  grade === "A"
    ? "Excellent Result !"
    : grade === "B"
    ? "Great Result !"
    : "Good Result !"
);
