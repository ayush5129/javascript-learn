// for of loop
// basic syntax
// for (const element of object) {
      // here object means any thing like array , string 
// }

// with array 
// const arr = [1,4,5,2,7,8]
// for(const num of arr){
//     console.log(num);
// }

// with string 
// const str = "Hello Ayush"
// for(const val of str){
//     console.log(`Each char of string is ${val}`)
// }


//Maps
const map = new Map();
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"france")
// map.set('IN',"India")   // this line didn't print again 
// bcaz map takes only unique values
// console.log(map);

// how for of use to print map
// for(const [key,value] of map){
//     console.log(key, "-",value)
// }


//******** you can't print object by for of loop */
const obj = {
    game1:"pookeman",
    game2:"subway suffer"
}
// for (const [key,value] of obj) {  //  not able to
//  print object by this method

//     console.log(key,value)
// }