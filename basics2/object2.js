/// object using constructor --> singleton object
// const user = new Object();

//using object literals

// const tinderUser = {
//     id:"123abc",
//     name:"sammy",
//     isloggedIn:false
// }
// console.log(tinderUser);

// you have one more method to add value in object 

// const tinderUser = {}
// tinderUser.id = "123abc",
// tinderUser.name = "sammy",
// tinderUser.isloggedIn = false

// console.log(tinderUser);

//you can also create nested object
// const regularUser = {
//     email:"some@gmail.com",
//     fullname:{
//         userFullname:{
//             firstName:"Ayush",
//             lastName:"Seth"
//         }
//     }
// }
// console.log(regularUser.fullname.userFullname.lastName)

// merging the object
const obj1 = {1:"ayush",2:"Seth"}
const obj2 = {3:"Manisha",4:"Yadav"}

// first method ---> not good
// const obj3 = {obj1,obj2}
// console.log(obj3);

// second method --> little bit use
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

// third method --> spread operator
// const obj3  = {...obj1,...obj2};
// console.log(obj3);


// array object 
// const arr = [
//     {
//       id :1,
//       name:"ayush"
//     },
//     {
//       id : 2,
//       name:"manisha"
//     }
// ]


// change the object to an array to perform array operation
// const tinderUser = {
//     id:"123abc",
//     name:"sammy",
//     isloggedIn:false
// }
// console.log(tinderUser); //  here output is an object

// console.log(Object.keys(tinderUser)); //  give keys as an array
// console.log(Object.values(tinderUser)); //  give values as an arrays
// console.log(Object.entries(tinderUser)); //  give output as an subarray
// console.log(tinderUser.hasOwnProperty('isloggedIn')) //  use to ask the object that given key is present or not


// object destructuring
const course = {
    courseName:"Javascript",
    price:789,
    courseInstructure:"ayush seth ji"
}
// destructuring 
// const {courseInstructure } = course
// console.log(courseInstructure)

// you can give any name also
const {courseInstructure : teacher } = course
console.log(teacher);
