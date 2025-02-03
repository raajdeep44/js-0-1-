const myObject = {
        js: "javascript",
        cpp: "C++",
        rb : "ruby"
}
// for in
for(const key in myObject){
    console.log(`${key} --> ${myObject[key]}`);
}
