// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
    
// }

// for (let index = 1; index < 10; index++) {

//     console.log(`OUTER LOOP AND HIS VALUE:${index}`);
//     for (let j = 1; j < 10; j++) {
//         // console.log(`INNER LOOP:${j}`)
//         console.log(`${index} * ${j} = ${index * j}`)
        
//     }
    
    
// }


const balance=10

// for (let balance = 1; balance <10; balance++) {
//     if (balance===5) {
//         console.log("Detected 5");
//         break
        
        
//     }
//     console.log(`Value of one is ${balance}`);
    
    
// }
// for (let balance = 1; balance <10; balance++) {
//     if (balance===5) {
//         console.log("Detected 5");
//         continue
        
        
//     }
//     console.log(`Value of one is ${balance}`);
    
    
// }


// const myArray=["Akshay","Raj","Aman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }



// for (let index = 1; index <=10; index++) {
//     console.log(`OUTER LOOP AND ITS VALUE: ${index}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(`INNER LOOP VALUE:${j}`);
//         console.log(`${index}*${j} =${index * j}`);
        
        
        
//     }
    
    
// }


for (let index = 11; index <= 20; index++) {  // Change outer loop to start from 11 to 20
    console.log(`OUTER LOOP AND ITS VALUE: ${index}`);
    for (let j = 1; j <= 10; j++) {  // Inner loop still runs from 1 to 10
        console.log(`INNER LOOP VALUE: ${j}`);
        console.log(`${index}*${j} = ${index * j}`);
    }
}
