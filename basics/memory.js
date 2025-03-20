// primitive ---> store in stack
let myName = "Ayush Singh"
let anotherName = myName
anotherName = "Manisha Singh"

console.log(myName)  //  ->>>> output = Ayush Singh
console.log(anotherName) /// ->>>> output = Manisha Singh

// Non primitive ----> store in heap
let userOne = {
    email:"test@gmail.com",
    name:"jack"
}
let userTwo = userOne
userTwo.email = "google@gmail.com"

console.log(userOne);  // ---> output - google@gmail.com
console.log(userTwo);  // ---> output - google@gmail.com
