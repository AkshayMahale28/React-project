// const newPromise=new Promise((resolve,reject)=>{
//     setTimeout(function() {
//         console.log("Hello World");
//         resolve()

//     },1000)

// })

// newPromise.then(function(){
//     console.log("Promise resolved");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Hello World 1");
//         resolve()
//         },1000)

// }).then(function(){
//     console.log("Promise resolved task 2");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({user:"Akshay",email:"akshay@gmail,com"})

//     },1000)
// }).then(function(USER){
//     console.log(USER.user);
//     console.log(USER);

// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let user=true
//         if (!user) {
//             resolve("Promise Resolved");
//         }else{
//             reject("Promise Rejected");
//         }
//     },1000)

// })

// promiseFour.then(function(){
//     console.log("Promise Resolved");

// }).catch(function(){
//     console.log("Promise Rejected Once Again");
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let user=true
//         if (!user) {
//             resolve("Promise Resolved");
//         }else{
//             reject("Promise Rejected");
//         }
//     },1000)

// })

// async function consumePromiseFive() {
//    try {
//     const response =await promiseFour
//     console.log(response);

//    } catch (error) {
//     console.log("ERROR OCCURED:",error);

//    }

// }

// consumePromiseFive()

// async function api() {
//   try {
//     const response = await fetch("https://api.github.com/users/AkshayMahale28");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// api()



fetch("https://api.github.com/users/AkshayMahale28")
.then(function(response){
    return  response.json()
}).then(function(data){
    console.log(data)
}).catch((error)=>{
    console.log("ERROR OCCURED:",error)
})



// fetch("https://api.github.com/users/AkshayMahale28")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("ERROR OCCURED:", error));