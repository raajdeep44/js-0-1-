// reduce
const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc :${acc} and current value : ${currval}`)
    return acc + currval
}, 0)
// const myTotal = myNums.map((acc,num)=>{
//     return acc + num;
// })
console.log(myTotal);
