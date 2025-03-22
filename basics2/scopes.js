// scopes in js

// if(true){
//     let a = 20
//     const b = 40
//     var c = 50
// }
// console.log(a)  // this gives error
// console.log(b)  // this gives error
// console.log(c)  // this does not give error beacuse it has function scope


let a  = 400  //  this is caleed gloabal decleration --- it can use anywhere of the function
if(true){
    let a = 20   // this is called local decleration
    const b = 40
    // console.log(a);  //  this gives output 20  
}
// console.log(a); //  this gives output 400 


// Nested scopes
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); // this gives error
    two()  /// print hitesh
}
one()


if(true){
    const username = "ayush"
    if(username === "ayush"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website) //  this gives error
}
// console.log(username)  // this gives error


//// important 
addOne(6)  ///  hm yha pe hoisting perform kr skte hai 
function addOne(num){
    return num + 1;
}

// this is also a method of decleration of function ----> this is also called function expression
// hm esme hoisting perform nhi kr skte hai

const addTwo = function(num){
    return num+2
}
addTwo(8);  // ese hm function se pahale call nhi kr skte hai


