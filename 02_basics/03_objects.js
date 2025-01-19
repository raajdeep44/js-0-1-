// OBJECTS IN JS

// singleton
// Object.create

// object literals

const mysym = Symbol("key1")

const user = {
    name : "rajdeep",
    "full name" : "Rajdeep Singh",
    [mysym] : "mykey1",
    age : 20,
    email : "rajdeep@google.com",
    location : "Dehradun",
    isLoggedIn : false
}
console.log(user.name);
console.log(user["name"]); // another way to access object
console.log(user["full name"])
// console.log(user.mysym) // typeof -> string
console.log(user[mysym]) // mysym -> [mysym]


user.email = "rajdeep@facebook.com"
console.log(user)
// Object.freeze(user) // freeze the object no changes possible from now on
user.email = "rajdeep@tesla.com"
console.log(user)


// functions in objects
user.greetings = function(){
    console.log("hello js user");
}
user.greetings2 = function()
{
    console.log(`Hello js user, ${this.name}`) // this.name = user.name in this line
}
console.log(user.greetings2())