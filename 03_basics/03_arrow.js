// arrow function
// this keyword --> current context

const user = {
    username : "rajdeep",
    price: 1000,

    welcomeMessage : function(){
    console.log(`${this.username} , welcome to the website`);
    console.log(this); // current context
    }
    
}

user.welcomeMessage();
user.username = "raj";
user.welcomeMessage();

console.log(this); // empty object--> this refers to empty object in node environment

// const anyUser = function (){
//     let username = "rajdeep"
//     console.log(this.username); // undefined
// }

// function test(){
//     console.log(this); // global value....
// }
// test();

const anyUser = () => {
    let username = "rajdeep"
    console.log(this);
}
anyUser()

// const add = (num1,num2) => {
//     return num1 + num2;
// }
// +++++++++++++++ implicit return +++++++++++
// const add = (num1,num2) => num1 + num2;
const add = (num1,num2) => (num1 + num2);
console.log(add(3,4));
