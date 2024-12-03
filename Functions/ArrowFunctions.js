// const one={
//     username:"Akshay",
//     age:25,
//     occupation:"Software Engineer",

//     welcomeMessage:function() {
//         console.log(`Hi My Name Is ${this.username}`);
//         console.log(this); //Talk About Current Execution Context
        
        
//     }
// }

// one.welcomeMessage()
// one.username="Raj"
// one.welcomeMessage()

// console.log(this);  //Gives empty object



function chai() {
    const username = "Akshay";
    console.log(this.username); // 'this' will refer to the global object (window in browsers)
}
chai(); // Output: undefined


// const chai = () => {
//     const username = "Akshay";
//     console.log(this.username); // 'this' refers to the surrounding context, the global object (window)
// }
// chai(); // Output: undefined



// const one=(num,num1)=>{
//     console.log(this); //Gives Window Object
//     return num+num1;

// }

// console.log(one(10,20));


// IMPLICIT RETURN ARROW FUNCTION 
// const one=(num,num1)=> num +num1;
// const one=(num,num1)=> (num +num1);
// const one=(num,num1)=> ({username:"Akshay"})

// console.log(one(10,20));

// ABOUT THIS KEYWORD

// In JavaScript, the this keyword refers to the context or the object that is 
// executing the current piece of code. Its value is determined by how a function is called.

// In the global execution context (outside of any function), this refers to the global object:

// In a browser, this refers to the window object.
// In Node.js, this refers to the global object.



console.log(this);





