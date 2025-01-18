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

// slice and splice

console.log("A ",arr); // og array

// using slice
let nums1 = arr.slice(1,3);

console.log(nums1); // 2 3
console.log("B ",arr); // B 1 2 3 4

// using splice
let nums2 = arr.splice(1,3);

console.log(nums2); // 2 3 4
console.log("C ",arr) // C 1 5 


