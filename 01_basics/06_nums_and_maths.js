const score = 400
// console.log(score)

const balance = new Number(100) // another way to initialise number
// console.log(balance)

// console.log(balance.toString()) //"100"
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2))

// const num = 23.355
// console.log(num.toPrecision(3)) // 23.4
// console.log(num.toPrecision(2)) // 23

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')) // 1,00,000

// ++++++++++++++++ Maths ++++++++++++++++++++++++++++++++
// console.log(Math.abs(-65))
// console.log(Math.round(4.2)); // 4
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.8)); // 4

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min  = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)