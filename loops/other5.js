 // reduce method
//  const myNums = [1,2,3]

//  const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
//  },0)  /// 0 is initial value of accumulator.... you can give any number
//  console.log(myTotal)

// with arrow function
// const myNums = [1,2,3]
// const myTotal = myNums.reduce((acc,currVal) => {
//    console.log(`acc: ${acc} and currVal: ${currVal}`)
//    return acc + currVal
// },0)
// console.log(myTotal)


const shopingCart = [
    {
        courseName:"js course",
        price:2999
    },
    {
        courseName:"py course",
        price:299
    },
    {
        courseName:"math course",
        price:7999
    },
    {
        courseName:"dsa course",
        price:99999
    }
]

// add all course price
const priceTotal = shopingCart.reduce((acc,num)=>{
    return  acc + num.price
},0)
console.log(priceTotal)
