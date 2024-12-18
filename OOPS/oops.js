// const obj ={
//     username:"Akshay",
//     email:"akshay@gmail.com",
//     isLoggedIn:true,

//     addToCart:()=>{
//         console.log(this.username);
        

//     }
// }

// console.log(obj.addToCart);



function name(username,mail,isLoggedIn) {
    this.username=username
    this.mail=mail
    this.isLoggedIn=isLoggedIn


    // return this
    
}


let user1=new name("Akshay","a@mail.com",true)
let user2=new name("Aman","b@mail.com",true)
console.log(user1);
console.log(user2);


// the new keyword is used to create an instance of an object or a class



