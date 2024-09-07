// let sayHello = new Promise((resolve, reject) => {

//   // Rejects the promise 👇, irrespective of position in the Promise function
//   reject("Unable to say hello");

//   // In 5 seconds, I want this promise to be resolved

//   setTimeout(() => {
//     resolve("Hello, World!");
//   }, 5000);
// })

// // Handle promise once resolved
// sayHello.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error)
// })


// // CHAINING 


// // CREATING A PROMISE THAT RESOLVES IMMEDIATELY(then attach a callback to run after 5 secs)
// let choice = new Promise(function(resolve, reject){
//     resolve("selectedChoice")
// })

// setTimeout(function(){
//     // answer parameter comes from the resolve method argument
//     choice.then(function(answer){
//         console.log(answer)
//     })
// })

// CREATING A 50/50 CHANCE PROMISE
// const leftToChance = new Promise((resolve, reject) => {
//     if(Math.random() < 0.5){
//         reject("Ouch, lower then expected")
//     }

//     resolve("Accepted 🎉")
// }).then(function(answer){
//     console.log(answer)
// }).catch(function(error){
//     console.log(error)
// }).finally(() => {
//     console.log("Promise settled. This must run everytime")
// })

// A CORE PROMISED BASED METHOD IS THE FETCH() METHOD

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })



// CALLING APIs SIMULTANEOUSLY

// Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/todos/1'), 
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
// ]).then((responses) => {
//     return Promise.all(responses.map((combinedResponse) => {
//         return combinedResponse.json();
//     }))
// }).then((res) => {
//     console.log(res)
// })
// .catch((error) => {
//     console.log(error);
// })

// EXTRAASS: ASYNC AWAIT
// function oldWayOfWritingFunctions(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => {
//         return response.json()
//     }).then((data) => {
//         console.log("Old way of writing JS async functions", data)
//     }).catch((error) => {
//         console.log(error)
//     }).finally()

//     console.log("Old Message") // you can make this wait till the fetch is completed by adding a .finally() method to the fetch()
// }

// oldWayOfWritingFunctions()

// async function newWayOfWritingFunctions(){
//     await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("New way of writing JS async functions", data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     console.log("New Message")
// }

// newWayOfWritingFunctions();

async function getArticleById(id){
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}d`)

    // check if call fails
    if(!response.ok){
        throw "Something went wrong"
    }
    let data = await response.json();
    console.log(data)
}

getArticleById(3)