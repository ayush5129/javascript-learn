// this keyword in js ---> use to reference the current instance
// const user = {
//     username:"Ayush",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to our website`)
//         // console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username = "sammy" // you can change this also and set new value
// user.welcomeMessage();

// But you can'y use this keyword with function(any type)
function isUseThis(){
    let username = "Ayush"
    // console.log(this.username)  //  this give undefined
}
isUseThis();

const funcThis = function(){
    let username = "Ayush"
    // console.log(this.username) // this is also give undefined
}
funcThis();

// same result you got with arrow function
const funcArrow = () =>{
    let username = "Ayush"
    // console.log(this.username) //  this is also give undefined
}
funcArrow()


// Arrow function
//1 -> explicit arrow function where we use currly braces and use return keyword
// const Multiply = (num1,num2) =>{
//      return num1 * num2;
// }
// console.log(Multiply(4,6));

// 2 --> implicit arrow function 
// const Multiply = (num1,num2) => num1 * num2
// console.log(Multiply(4,8));

// one more method of implicit where we use parenthesis ---> if we have an object as a argument then () is important
const Multiply = (num1,num2) => (num1 * num2)
console.log(Multiply(4,8));