const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    },1000)  
})

promiseOne.then(function(){
    console.log('promise consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log('async task 2 consumed')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "vision", email : "123@vision.com"})
    },1000)
    
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "spidey", subscribers : "10000"})
        }else{
            reject('ERROR : something went wrong')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('promise is either resolved or rejected')
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "JS", subscribers : "1000000"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function allUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
    
//    } catch (error) {
//         console.log("E: ",error);
        
//    }
// }
// allUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})