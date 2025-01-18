// array
// js arrays are resizable
const arr = [1,2,3,4]

const nums = new Array(3,4,5)
console.log(nums[2])

// Array Methods
arr.push(5)
arr.push(7)
arr.pop()

arr.unshift(44) // adds 44 to the front of the array
arr.shift() // removes the front element from the array

console.log(arr.includes(9)) // checks whether 9 is in array or not and then true/false
console.log(arr.indexOf(3))

const newarr = arr.join() // in strings

console.log(newarr) // typeof -> string
console.log(arr)