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

// console.log(boolFlag);


// 1 => true
// 0 => false (undefined, null)
// "" => false
// " " => true
// "code" => true


// ******************************* Operators *************** //
let value = 3
let negValue = -value
//console.log(negValue)

let str1 = "hello"
let str2 = " rajdeep"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2) // js will convert int to string
// console.log("1" + 2)
// console.log("1"+ 2 +2);   // 122 first data type is string
// console.log("1"+2+"2");   // 122
// console.log(1 + 2 + "3"); // 33 string is in last

// console.log(true) // true
// console.log(+true) // 1
// console.log(+"") // 0

let x = 3;
let y = x++;
console.log(y) // 3
console.log(x); // 4

let a = 4;
let b = ++a;
console.log(b); // 5
console.log(a); // 5