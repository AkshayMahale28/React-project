let str = "Akshay";

str.split("").forEach((char) => {     
  // console.log(char);
});

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((num)=>{
//     console.log(num);

// })

// const myObject={      
//     name:"Akshay",
//     age:23,
//     city:"Pune"

// }

// Object.entries(myObject)                            //converts the object into an array of key-value pairs:
// [['name', 'Akshay'], ['age', 23], ['city', 'Pune']].
// Object.entries(myObject).forEach(([key,value])=>{
//     console.log(key,value);
// })

// arr2 = [
//   { name: "Akshay", age: 23 },
//   { name: "Amit", age: 24 },
//   { name: "Rahul", age: 25 },
// ];

// arr2.forEach((obj) => {
//   console.log(obj.name);
// });

// ALL ABOUT FOR OF LOOP    // for of loop is used to iterate over the values of an iterable object like an array, string, map, set, etc.

let str2 = "Akshay";
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let map=new Map();
// map.set("name","Akshay")
// map.set("age",23)

// for(let map1 of map){
//     console.log(map1);   
    
// }

// for (let char of arr3) {
//   console.log(char);
// }
// for (let char of str2) {
//   console.log(char);
// }


// ALL ABOUT FOR IN LOOP    // for in loop is used to iterate over the properties of an object.

const obj1={
    name:"Akshay",
    age:23
}

// for(let obj in obj1){
//     console.log(obj1[obj]);
    
// }
for(let [key,value] of Object.entries(obj1)){   
    // console.log(key,value);
    
}



const students = [
    { name: "Alice", age: 20, subjects: ["Math", "Physics"] },
    { name: "Bob", age: 22, subjects: ["Chemistry", "Biology"] },
    { name: "Charlie", age: 23, subjects: ["Math", "Computer Science"] }
];

// Task:
// Use a for...in loop to iterate through the students array and print each student's name and age.

for(let std in students){
// console.log(`Name: ${students[std].name}, Age: ${students[std].age}`);

}

// Use a for...of loop to iterate over the subjects array of each student and print each subject.

for(let std of students){
    // console.log(`${std.subjects}`);
    
}
// Use .forEach() to print a list of students who are studying "Math". For each student, print their name and the subjects they are taking.

students.forEach(std=>{
    if(std.subjects.includes("Math")){
        console.log(`Name: ${std.name}, Subjects: ${std.subjects.join(", ")}`);
    }
})