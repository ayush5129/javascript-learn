// const coding = ["js","rb","py","cpp"]
// const lang = coding.forEach((item)=>{
//     console.log(item)
//     return item //  esme bhi undefined hi milega
// })
// console.log(lang);  //  give undefined.....kyuki aise forEach method
// return nhi krta kuch bhi...undefined hi deta hai

// but hm kr skte hai forEach ke through bhi thoda sa logic use krna hoga
// const myNums = [1,2,3,4,5,6,7,8]
// const newNums = []
// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)  

/////********Filter */
// return ke liye filter use krte hai
// filter ---> ye bhi call back leta but esme value return hoti hai
// filter ke other work bhi hai

// const myNums = [1,2,3,4,5,6,7,8]
// const newNums = myNums.filter((num)=>{
//     return num > 4
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// print that book data whose genere is History
//   const bookData = books.filter((bk)=>{
//        return bk.genre === "History"
//   })
//   console.log(bookData)

// print that book data whose publish year is above 2000
// const bookData = books.filter((bk)=>{
//      if(bk.publish > 2000){
//         return bk.publish
//      }
// })
// console.log(bookData)

