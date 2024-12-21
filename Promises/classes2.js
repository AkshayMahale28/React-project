class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log("Username is added successfully:", this.username);
  }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

let chai =new Teacher("Akshay","a@gmail.com",25)

// chai.addCourse()
// chai.logMe()
// console.log(chai instanceof user);

let tea=new user("Ak")
// tea.logMe()
// tea.addCourse()  //NOT WORKING ERROR OCCURED