// Dates

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString())  // with time
// console.log(mydate.toDateString()) // only date without time
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString()) // 1/18/2025
// console.log(mydate.toLocaleString())  // 1/18/2025 7:01:18 AM

// console.log(typeof mydate)

let mycreatedDate = new Date(2019,0,24)
let anotherDate = new Date("2019-01-24")
// console.log(mycreatedDate.toDateString())
// console.log(anotherDate.toDateString())

console.log(Date.now()); // in  miliseconds
console.log(Math.floor(Date.now() / 1000))  // in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())