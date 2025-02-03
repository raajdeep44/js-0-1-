// for each loop
const coding = ["js","cpp","java","python"];

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((val,index,arr) => {
//     console.log(val,index,arr);
// })


// ++++++++ iterating object +++++++++++++
// [{}, {}, {}]
const myCoding =[
    {
        languageName : "javascript",
        fileName : "js"
    },
    {
        languageName : "java",
        fileName : "java"
    },
    {
        languageName : "python",
        fileName : "py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
} )

