// Primitive 

// 7 types --> String, Number, Boolean, null, undefined, BigInt,Symbol

const num = 3
const numValue = 3.4

const isLoggedIn = false
const newTemp = null
let usercode

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2)

const bignum = 23235235675n

const array = ["apple","samsung","google"]

let myObj = {
    name : "Rajdeep",
    age : 23,
}

const printkaro = function(){
    console.log("hello world")
}
printkaro()

// Reference (Non Primitive)

// Array, Objects, functions

// +++++++++++++++++++++++++++++++++++++++++++++


// +++++++++ stack and heap ++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let name = "rajdeep"

let newName = name
newName = "vision"

console.log(name)
console.log(newName)

// but non primitive take direct reference

let userOne = {
    name: "Rajdeep",
    email : "rajdeep@google.com"
}

let userTwo = userOne
userTwo.email = "rajdeep@amazon.com"

console.log(userOne.email)  // "rajdeep@amazon.com"
console.log(userTwo.email) //  "rajdeep@amazon.com"
// stack --> copy
// heap --> reference (changes possible)