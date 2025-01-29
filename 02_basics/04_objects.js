// const bumbleuser = new Object() // singleton object

const bumbleuser = {} //not a singleton object

bumbleuser.id = "123abc"
bumbleuser.name = "Roy"
bumbleuser.isLoggedIn = false

console.log(bumbleuser)

// object inside object 
const user = {
        email : "someone@example.com",
        fullname : {
            userfullname : {
                firstname : "rajdeep",
                lastname : "singh"
            }
        }
}
console.log(user.fullname.userfullname.firstname)

// join two objects using assign 

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}

// const obj3 = {obj1,obj2} // wrong
const obj3 = Object.assign({}, obj1,obj2) // here {} -> target and obj1,obj2 are source
// using spread operator
const obj4 = {...obj1,...obj2};
console.log(obj3)
console.log(obj4)

// methods
console.log(bumbleuser)
console.log(Object.keys(bumbleuser));   // return data in arrays
console.log(Object.values(bumbleuser)); // return data in arrays
console.log(Object.entries(bumbleuser));

console.log(Object.hasOwnProperty('isLoggedIn'))