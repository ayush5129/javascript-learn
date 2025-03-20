// // basic comparison operator
// console.log(4 > 2);
// console.log(4 >= 2);
// console.log(4 >= 4);
// console.log(4 < 2);
// console.log(4 <= 2);
// console.log(4 == 2);
// console.log(4 != 2);

// // comparison in different datatype
// console.log("2" > 1);
// console.log("02" > 1);
// console.log( 1 > "2");
// console.log( 2 == "2");
// console.log( 2 >= "2");
// console.log( "2" >= 2);

// // with null and undefined output is different so remember
// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);
// console.log(null < 0);
// console.log(null <= 0);


// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined <= 0);


// // === strict equality ---> here value and datatype both are matched
// console.log(2 === "2");
// console.log(2 == "2");


/////////////// summary of data types

// non primitive example
// Array
const books = ["Hindi","English","Math"];
console.log(typeof books);

// object
const obj = {
    name: "Ayush",
    city:"Varanasi"
}
console.log(typeof obj);

// function
const library = function(){
    console.log("Shukla library");
}
console.log(typeof library);



///symbol -> use for uniqueness in react mostly
const id = Symbol('12456');
const newId = Symbol('12456');
console.log(id === newId);    // give false output because both are not same internally