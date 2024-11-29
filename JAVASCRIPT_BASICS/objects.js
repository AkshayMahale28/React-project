
const newArr=Symbol("Key1")

const obj1={
    name:"John",
    [newArr]:"MyKey1",
    age:30,
    city:"New York",
    email:"email@gmail.com"
}

// console.log(obj1.age);
// console.log(obj1["name"]);

obj1.email="akshay@gmail.com"
// console.log( obj1[newArr]);4


// obj1.greet=function(){
//     console.log("Hello");
// }
obj1.greet1=function(){
    console.log(`Hello User My Name Is ${this.name}`);
}

// console.log(obj1.greet());
console.log(obj1.greet1());



