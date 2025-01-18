let name = "rajdeep"
let repoCount = 2

// console.log(name + repoCount) // don't use this 

// string interposition
// can make placeholder inside the string and then inject the data(varibles)
console.log(`hello my name is ${name} and my repocount is ${repoCount}`) // ``-> backticks
// string declaration another method
const gameName = new String("Spidey")
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)

// console.log(gameName.toUpperCase())

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('s'))

// console.log(gameName.toLowerCase())

const newName = gameName.substring(0, 4);
// console.log(newName)

const anotherName = gameName.slice(-8, 4) // pid
// console.log(anotherName)  


const newNameOne = "   rexone  ff    "
// console.log(newNameOne)
// console.log(newNameOne.trim())


const url = "https://rajdeep.com/rajdeep%20singh"
console.log(url.replace('%20','-'))

console.log(url.includes('rajd'))