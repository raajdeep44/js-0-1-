let score = "33abc"

// console.log(typeof score)
// console.log(typeof (score))


let toNumber = Number(score);

// console.log(typeof toNumber)
// console.log(toNumber);


// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0
// null => 0
// undefined => NaN

let flag = 1

let boolFlag = Boolean(flag);

console.log(boolFlag);


// 1 => true
// 0 => false (undefined, null)
// "" => false
// " " => true
// "code" => true