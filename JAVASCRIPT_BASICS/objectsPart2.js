

// const tinderUser=new Object("Key1")  //singleTon object
// console.log(tinderUser);  

// const tinderUser2={}  //objects literals

// tinderUser2.email="a@gmail.com"
// tinderUser2.password="a"
// console.log(tinderUser2);


// const tinderUser={
//     email:"a@gmail.com",
//     passwordField:{
//         password:"a",
//         confirmPassword:"a"
//     },
//     isPremium:false
// }


// console.log(tinderUser.passwordField.confirmPassword);



// obj1={1:"a",2:"b"}
// obj2={3:"c",4:"d"}
// obj3={5:"e",5:"f"}


// let tinderUser=Object.assign(obj1,obj2,obj3)
// // let tinderUser=Object.assign({},obj1,obj2,obj3)
// // console.log(tinderUser);
// console.log(obj1);  


// let tinderUser={...obj1,...obj2,...obj3}
// console.log(tinderUser);



// let tinderUser=[
//     {name:"a",age:20},
//     {name:"b",age:21},
//     {name:"c",age:22}
// ]

// console.log(typeof tinderUser[1].name);


// let tinderUser={
//     name:"a",
//     age:20,
// }
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("age"));



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/

// Objects Destructuring 

let obj1={
    name:'Akshay',
    age:20,
}


let {age:instructor}=obj1
// console.log(age);
// console.log(instructor);
console.log({obj1}.age);













