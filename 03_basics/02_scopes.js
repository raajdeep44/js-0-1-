// scopes
// var c = 300
let a = 1000;
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
}
// console.log(c);
// console.log(a);

function one()
{
    const username = "rajdeep";

    function two()
    {
        const website = "google";
        console.log(username);
    }
    // console.log(website);
    
    two()
}

one()


// ++++++++++++++ 
addone(4) // no error
function addone(num){
    return num + 1
}
console.log(addone(5));

// console.log(addtwo(7));
// addtwo(6)  // error
const addtwo = function(num)
{
    return num + 2;
}

