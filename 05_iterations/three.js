// for of

const arr = [1,2,3,4,5];

for(const num of arr){
    // console.log(num);
    
}

// maps
// map is not iterable for in
const map = new Map();
map.set('uk',"uttarakhand");
map.set('jk',"jammu & kashmir");
map.set('ch',"chandigarh");

//console.log(map);

for(const [key,value] of map){
    // console.log(key, '-->',value);
}

const myObj = {
    game1 : "ff",
    game2 : "clash royale",
    game3 : "pubg"
}
// cannot iterator object from for of
// for(const key of myObj){ 
//     console.log(key);
// }