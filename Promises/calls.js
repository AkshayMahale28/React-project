function user1(username) {
    this.username=username
    console.log("Hello world");
    
    
}

function user12(username,mail,age) {
    user1.call(this,username)
    this.mail=mail
    this.age=age
}
let a=new user12("akshay","a@gmail.com",25);
console.log(a);
