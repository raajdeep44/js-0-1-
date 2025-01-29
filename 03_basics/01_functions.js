function addTwonumbers(number1,number2){
    return number1 + number2;
}

const result = addTwonumbers(3,4);

// console.log(result);

function userLogIn(username = "user"){
    if(username == undefined){ // !username
        console.log("please enter a user name");
        return; 
    }
    return `${username} just logged in`;
}

//const res = userLogIn("Rajdeep");
// console.log(userLogIn("rajdeep")); // rajdeep logged in
// console.log(userLogIn("")); // just logged in
console.log(userLogIn()); // undefined just logged in
// userLogIn(); 

// ++++++++++ Rest operator ++++++++++++++
function calculateCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400,500));

// object 
const user = {
    username : "rajdeep",
    price: 1000
}

function handleObject(anyUser)
{
    console.log(`username is ${anyUser.username} and the price is ${anyUser.price}`);
}

// handleObject(user);
handleObject({
    username : "raj",
    price : 500
})

