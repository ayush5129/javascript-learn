// Javascript and classes


// oop


// object --> collection of properties and methods


// why use oop


// parts of oop
// object literal
const user = {
    username:"Ayush",
    loginCount:8,
    signedIn:true,

    getUserDetails : function(){
        // console.log("Got user Details ");
        // console.log(`Username is : ${this.username} `) //  always use this bcaz this tells the browser that this username is a current instance 
        // console.log(this); //  print kr dega pura object
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);  //  give a empty object but same chij ko browser me run krane me window object milta hai

// constructor function --> basically use to create new instances
//working of new --> step 1 -->  sbse pahale ek empty object create hota hai jise instance bolte hai
           // step 2 --> ek constructor function call hota hai
           // step 3 --> ye sb this keyword me inject ho jata hai
           // step 4 --> value mil jati hai

function solve(username,loginCount,isLoggedIn){
    this.username = username        // (left wala variable hai , right wala jo value hmne pass ki hai )
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // method bhi bna skte hai
    this.greeting = function(){
        console.log(`welcome to the coding era ${this.username}`)
    }

    return this  // vaise ye by default hota hai liho ya na likho
}    
const userOne = new solve("Ayush",12, true)   /// agr hm new keyword nahi likhte to value overwrite ho jati 
const userTwo = new solve("Manisha",17, false)

console.log(userOne);
console.log(userTwo)



// prototype
//  classes
//  Instances(new,this)

// 4 pilars
// Abstracction --> hide the internal details
// Encapsulation --> wrap the data
// Inheritance --> grab the properties of one class to other class
// polymorphism --> one thing many usases



