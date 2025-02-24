fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
    })
.then((data)=>{
    data.forEach((data)=>console.log(`Name of users ${data.name} and mail of user is ${data.email}`));    
}).catch((err)=>{
    console.log(err);
})