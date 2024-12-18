function createUser(type, price) {
    this.type = type;  // 'this' refers to the newly created object.
    this.price = price;
}


// createUser.prototype.increment = function() {
//     this.price++;  // 'this' refers to the specific object the method is called on.
// };

createUser.prototype.printMe = function() {
    console.log(`The Price of tea is ${this.price}`);  // 'this' refers to the calling object.
};
// When you call chai.increment() or tea.increment(), 
// this refers to the object (chai or tea) on which the method was called.
 
// For example:
// chai.increment() increases the price of the chai object by 1 
// because this.price++ updates the price property of the chai object.
// Similarly, tea.increment() updates the price of the tea object.

let chai=new createUser("chai",250)
// let tea=new createUser("tea",50)

chai.printMe()
// tea.increment()
// tea.increment()
// tea.printMe()


// 2. The Role of new
// The new keyword is essential to create new objects using a constructor function. 
// Here's what new does in this example:

// Steps Performed by new:
// When you use new createUser("chai", 250), the following happens:

// A new object is created and linked to the prototype of the constructor function (createUser.prototype).
// this inside the constructor is bound to the new object.
// The constructor function's body executes, initializing the object's properties 
// (this.type = type and this.price = price).
// The new object is returned automatically (unless the constructor explicitly returns a different object).




// Why new is Needed:
// If you call createUser without new, this will not point to a new object. 
// Instead, it may refer to the global object (window in browsers, global in Node.js) 
// or remain undefined in strict mode.