// function ---> basic function definition
// function addTwoNum(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNum(4,6)


// function addTwoNum(num1,num2){
//     console.log(num1+num2)
// }
// this is not valid ---> this will give undefined
// const res = addTwoNum(4,6)
// console.log(res);

// to avoid above error use this 

// function addTwoNum(num1,num2){
//     // const res = (num1+num2)
//     // return res;

//     return num1 + num2 //  both are valid
// }
// const result = addTwoNum(4,6)
// console.log(result);

/// but in all above case we do not check that the given arrguments are number or not...s before use check using if else statement


// function loginUser(userName){
//     return `${userName} user is just logged in`
// }
// console.log(loginUser("Ayush"));
// console.log(loginUser());  // but if the user didn't give any value then your function give undefined value --- > so avoid this check 
function loginUser(userName){
    if(userName === undefined){   /// or if(!username)  same work 
        console.log("please enter userName")
        return
    }
    return `${userName} user is just logged in`
}
console.log(loginUser("Ayush"));
console.log(loginUser()); 