const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor)

const spidy = {
    name : "spidy",
    price : 2000,
    isLoggedIn : true,

    myFunction : function(){
        console.log('mera function')
    }
}

console.log(Object.getOwnPropertyDescriptor(spidy,'name'))

// making changes writable enumerable configurable 

Object.defineProperty(spidy,'name',{
    // writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(spidy,'name'))

for (let [key,value] of Object.entries(spidy)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}