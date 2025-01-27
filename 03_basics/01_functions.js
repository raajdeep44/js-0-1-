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
