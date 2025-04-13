// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("This is the first promise")
//         resolve()
//     },2000)
// })
// promiseOne.then(function(){
//     console.log("Promise resolved");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("This is the first promise")
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Promise resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             username:"Ayush Seth",
//             city:"Varansi"
//         })
//     },1000)
// })
// promiseThree.then(function(user){
//     return user.username;
// }).then(function(myusername){
//    console.log(myusername);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =  true;
//         if(!error){
//             resolve({
//                     username:"Ayush Seth",
//                     city:"Varansi"
//                 })
//         }
//         else {
//             reject("Something went wrong")
//         }
        
//     },1000)
// })
// promiseFour.then(function(user){
//    return user.username
// }).then((myusername)=>{
//     console.log(myusername)
// }).catch((error)=>{
//     console.log(error);
// })


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =  false;
//         if(!error){
//             resolve({
//                     username:"Ayush Seth",
//                     city:"Varansi"
//                 })
//         }
//         else {
//             reject("Something went wrong")
//         }
        
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//        const respose =  await promiseFive;
//        console.log(respose)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive();


// async function takeData(){
//     try {
//         const respose = await fetch("https://randomuser.me/api/");
//         const data = await respose.json();
//         console.log(data);
//     } catch (error) {
//         console.log("error occured",error)
//     }
// }
// takeData();

fetch("https://randomuser.me/api/")
.then((respose) => {
    return respose.json();
}).then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log(e);
})