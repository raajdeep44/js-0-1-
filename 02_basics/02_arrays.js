const marvel_heroes = ["ironman","thor","spiderman"]
const dc_heroes = ["superman","robin","batman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // it take array as a data and insert it
// console.log(marvel_heroes[3][1]) // robin

let all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes);
 
//   Spread Operator to add array
let new_all_heroes = [...marvel_heroes,...dc_heroes]
console.log(new_all_heroes) 

const another_array = [1,2,3,4,[5,6,7],8,9,[4,5,[5,8,9]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// isArray , from , of in Array
console.log(Array.isArray("Rajdeep"))
console.log(Array.from("Rajdeep"))
console.log(Array.from({name : "Rajdeep"})) // important

let score1 = 56
let score2 = 54
let score3 = 65
console.log(Array.of(score1, score2, score3))
