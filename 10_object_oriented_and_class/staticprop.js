class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Logged in by ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const spidy = new User('spidy')
// console.log(spidy.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const rex = new Teacher("rex","@kk.com")
// console.log(rex.createId())

