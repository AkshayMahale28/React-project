// // function course() {
// //     console.log("A");
// //     console.log("k");
// //     console.log("s");
// //     console.log("h");
// //     console.log("a");
// //     console.log("y");
    
//     function course(num,num1){
//         // console.log(num + num1);
//         // let sum1=num+num1
//         // return sum1
//         // return `Sum Of ${num + num1} `

//         // return num + num1
        
//     }

//    let sum= course(12,12)
//    console.log(sum);



function loggedIn(username="Aman"){
    if (username===undefined) {
        console.log("Plz enter valid username");
        return
        
        
    }
    return `${username} Just Logged In`
}

let user=loggedIn("Akshay")
console.log(user);

   
