// An **IIFE** (Immediately Invoked Function Expression) is a function expression that is defined and executed immediately after its creation.

// In JavaScript, functions are first-class objects, meaning they can be defined, assigned, and invoked. An IIFE allows you to create a function and execute it right away, without having to call it explicitly elsewhere in your code.

// ### Syntax:
// An IIFE is usually written with a function expression inside parentheses `()` followed by another set of parentheses `()` to invoke it immediately:

// ```js
// (function() {
//     console.log("This is an IIFE!");
// })();
// ```

// ### Example with Parameters:
// An IIFE can also accept parameters:

// ```js
// (function(name) {
//     console.log("Hello, " + name);
// })("Akshay");
// ```

// ### With ES6 Arrow Functions:
// You can also write an IIFE using an arrow function:

// ```js
// (() => {
//     console.log("This is an IIFE with arrow function!");
// })();
// ```

// ### Summary:
// - An IIFE is a function that is immediately executed after being defined.
// - It is often used to create private scopes to avoid polluting the global namespace.
// - It helps to limit the scope of variables to the function, providing modularity and better control.


// (function name(){
//     NAMED IIFE
//     console.log("This is an IIFE with a name!");
// })(); USE SEMICOLON EXPLICITLY

// ((user)=>{
//     // console.log("This is an IIFE with a arrow function");
//     console.log(`Hi This Is ${user}`);
// })("Akshay")


(function name(yt) {
    console.log(`Hello ${yt}`);
    
    
})("Akshay");

((user)=>{
    console.log(`Hi This Is ${user}`);
})("Akshay")