// objects
// two method to decleare
// 1--> object literals
// symbol decleration
const mySym = Symbol("hikaroo");
const jsUser = {
    name:"Ayush",
    "fullName":"Ayush kumar Singh",
    age:18,
    location:"Varanasi",
    email:"ayush@google.com",
    isLoggedIn:false,
    [mySym]:"Nobita"
}
// accesing method
// dot
// console.log(jsUser.email)
// square bracket
// console.log(jsUser["email"])

// in case of fullname --> where key also give as a string then to access full name you have to use only square method
// console.log(jsUser["fullName"])

// change the values of objects
// jsUser.email = "ayush@microsoft.com";
// console.log(jsUser.email)

// you u don't want to change values of object....you can stopped it so that knowone can change it also
// Object.freeze(jsUser);
// jsUser.email = "ayush@chatgpt.com"
// console.log(jsUser.email)   ///  email values not change

// function in objects  
// jsUser.greeting = function(){
//     console.log("Hello js User");
// }
// console.log(jsUser.greeting());

// jsUser.greeting2 = function(){
//     console.log(`Hello js user my name is ${this.name} `)
// }

// console.log(jsUser.greeting2());
