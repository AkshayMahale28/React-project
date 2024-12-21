// class user {
//     constructor(name,mail) {
//         this.name = name;
//         this.mail = mail;
        
//     }
    

//     logMe(){
//         console.log(this.name + " " + this.mail);
//     }
//     upper(){
//         console.log(this.name.toUpperCase());
//     }
// }

// let chai=new user("Akshay","a@mail.com")

// chai.logMe()
// chai.upper()


// Behind The Scene In Javascript 

// function user(name,mail) {
//     this.name = name;
//     this.mail = mail;
    
// }

// user.prototype.logMe=function(){
//     console.log(this.name + " " + this.mail);
// }
// user.prototype.upper=function(){
//     console.log(this.name.toUpperCase());
// }

// const tea=new user("Aman","b@mail.com")

// tea.logMe()
// tea.upper()