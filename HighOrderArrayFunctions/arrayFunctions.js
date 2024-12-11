// const arr=[ 1,2,3,4,5]

// for(const num of arr){
//     // console.log(num);
    
// }


// const greetings="Hello World"

// for(const greet of greetings){
//     if (greet===" ") {
//         continue
        
//     }
//     console.log(`Characters of Strings Are ${greet}`);
    
// }



const map1=new Map()

map1.set("IN","India")
map1.set("FR","France")
map1.set("Cn","Canada")

console.log(map1);


for(const [key,value] of map1) {
    // console.log(element);
    console.log(`Key is ${key} and Value is ${value}`);
    
    
}




// 1. for...in Loop
// Purpose: It is used to iterate over the keys (or property names) of an object or the indices of an array (since arrays are objects in JavaScript).
// Use case: You would use this loop when you want to work with the keys of an object or indices of an array.
// Iterates over: The enumerable property names of an object, or the indices of an array.


// 2. for...of Loop
// Purpose: It is used to iterate over the values of an iterable object, such as arrays, strings, Maps, Sets, and other iterable collections.
// Use case: You would use this loop when you want to work directly with the values in an array, string, or another iterable.
// Iterates over: The values in an iterable object, not the keys or indices.
