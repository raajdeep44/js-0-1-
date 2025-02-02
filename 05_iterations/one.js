// for 

for(let i=0;i<5;i++){
    const element = i;
    // console.log(element);
}

let myArray = ["ironman", "dr strange", "green lantern"]

for(let i=0 ; i< myArray.length ; i++){
    const element = myArray[i];
    // console.log(element);
}

// continue and break

for(let i = 1;i<=20;i++){
    // if(i==5){
    //     console.log(`detected 5`);
    //     break;
    // }
    if(i==10){
        continue;
    }
    console.log(i);
}