// reduce
const myNums = [1,2,3]

const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc :${acc} and current value : ${currval}`)
    return acc + currval
},0)
// const myTotal = myNums.reduce((acc,num)=>{
//     return acc + num
// },0)
// const myTotal = myNums.map((acc,num)=>{
//     return acc + num;
// })
// console.log(myTotal);


const shoppingCart = [
    {
        itemname : "js course",
        price : 599
    },
    {
        itemname : "data science course",
        price : 2000
    },
    {
        itemname : "dsa course",
        price : 1500
    }
]

const priceTopay = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
},0)

console.log(priceTopay)