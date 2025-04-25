class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Logged in By ${this.username}`)
    }
}

class Teacher extends User{
        constructor(username,email,password){
            super(username)
            this.email = email
            this.password = password
        }

        addCourse(){
            console.log(`A new course was added by ${this.username}`)
        }
}

const spidy = new Teacher('spidy','spidy@yt.com',2025)
spidy.addCourse()
spidy.logMe()

console.log(spidy instanceof Teacher)