// Immediately Invoked Function Expressions (IIFE)
// to remove global scope pollution we use iife

// function user(){
//     console.log(`DB CONNECTED`);
// }
// user()

(function user(){
    console.log(`DB CONNECTED`);
})();

((user) => {
    console.log(`DB CONNECTED TWO ${user}`);
})('rajdeep')