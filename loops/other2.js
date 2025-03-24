const coding = ["js","rb","py","cpp"]

// coding.forEach( function (val) {  //  forEach function take a call back function
                    // //  and that function has no name and in parenthesis u can give any name
//      console.log(val)
// }) 

// u can use also arrow funtion......here also no need to write name
// coding.forEach((num) => {
//      console.log(num);
// })


// ek function ko bhi as a reference pass kr skte hai forEach me
// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe);

//forEach me 3 chije aati hai call back function
// coding.forEach((item,index,arr) =>{
//      console.log(item,index,arr)
// })

//************Important */

// Array of object access by forEach  
// const myCoding = [
//     {
//         languageName:"Javascript",
//         fileName:"js"
//     },
//     {
//         languageName:"java",
//         fileName:"java"
//     },
//     {
//         languageName:"python",
//         fileName:"py"
//     }
// ]

// myCoding.forEach((item) => {
//      console.log(item.languageName)
// })