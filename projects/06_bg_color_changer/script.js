// generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
const startchangingColor = function(){
    const changeColor = function(){
        document.body.style.backgroundColor = randomColor()
    }
    if(intervalId == null){
        intervalId = setInterval(changeColor,1000)
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId);
    console.log("stopped")
    intervalId = null;
}
document.querySelector('#start').addEventListener('click',startchangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)