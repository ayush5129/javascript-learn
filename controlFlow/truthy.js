// falsy values
// false, 0,-0, BigInt 0n, "",null,undefined,NaN

// other than that all are truthy
// some truthy  which look like falsy ---> 
// "0", "false", " ",[],{},function(){}

// const userEmail = "ayush@google.com"
// if(userEmail){  /// here i don't say userEmail is true or false but it is auto detected thats why called truthy values
//     console.log("Got user email");
// }


// const userEmail = ""
// if(userEmail){  /// here i don't say userEmail is true or false but it is auto detected thats why called falsy values
//     console.log(" did't Got user email....code not executed");
// }

// checking method
// const userEmail = [];
// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

// const empObj = {}
// if(Object.keys(empObj).length === 0){
//     console.log("object is empty")
// }

/// some interview questions
// false == 0  --> true
// false == '' --> true
// 0 == '' --> true


//*********** Nullish coalescing operator (??)**********
let val1;
// val1 = 5 ?? 10   //  give output 5
// val1 = null ?? 10  // give output 10
// val1 = undefined ?? 10 // give output 10
// val1 = null ?? undefined ?? 10 //  give 10 output
// val1 = null ?? 14 ?? 52 // give 14 output
// console.log(val1);

// ******terniary operator******
// syntax 
// condition ? true : false 
const teaPrice = 100
teaPrice <= 80 ? console.log(" price is less than 100") : console.log("price is greater than 100");