const userEmail = [];

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN;

// truthy values
"0", 'false', " ",[],{}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10; //5
// val1 = null ?? 10;  // 10
// val1 = undefined ?? 15;  //15
val1 = null ?? 10 ?? 20;  //10

console.log(val1);

// Ternary Operator

// condition ? true : false

const price = 1000;
// price <= 1000 ? console.log("affordable") : console.log("not affordable");

