function user(username,email,age){
    this.username = username;
    this.email=email
    this.age=age,

    this.greet=function(){
        console.log("Hello world");
        
    }
    return this


}

let userOne=new user("akshay","a@gmail.com",23)
let userTwo=new user("khushal","k@gmail.com",20)
console.log(userOne)
console.log(userTwo.this.greet())


// How new Works
// When you use new with a constructor function (or a class), JavaScript performs the following steps:

// Creates an empty object {}.
// Links the new object’s prototype to the constructor function’s prototype.
// Calls the constructor function with this set to the new object.
// Returns the new object unless the constructor explicitly returns a different object.
