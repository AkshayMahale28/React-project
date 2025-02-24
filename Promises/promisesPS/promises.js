// let promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Promise one");
//         resolve()
//     }, 2000);
// })

// promiseOne.then(function(){
//     console.log("Promise one resolved");
// })

// let promiseTwo = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(["akshay","dipak","mahale"])
//     }, 1000);
// })

// promiseTwo.then(function(user){
//     console.log(user);
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise resolved");
// })

// let promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Akshay", mail: "mail@mail.com" });
//     } else {
//       reject("Promise four rejected");
//     }
//   }, 1000);
// });

// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

let promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Akshay", mail: "mail@mail.com" });
    } else {
      reject("Promise four rejected");
    }
  }, 1000);
});

async function promiseFiveConsumed() {
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

promiseFiveConsumed();

// async function apiRes() {
//   try {
//     let response=await fetch('https://api.github.com/users/AkshayMahale28')
//     let data=response.json()
//     console.log(data);

//   } catch (error) {
//     console.log("E:",error);

//   }
// }

// apiRes()

fetch("https://api.github.com/users/AkshayMahale28")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Data:", data);
    console.log("Data:", data.login);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
