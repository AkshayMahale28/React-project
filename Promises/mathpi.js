

// console.log(Math.PI);

// let Maths=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Maths);

let user={
    name:"John",
    mail:"mail@gmail.com",
    age:30,
    
}

// console.log(user);

// let user1=Object.getOwnPropertyDescriptor(user,"name")
// console.log(user1);



let user2=Object.defineProperty(user,"name",{
    // writable:false,
    // enumerable:false
})
// console.log(user2);

for (const [key,value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
    
}


