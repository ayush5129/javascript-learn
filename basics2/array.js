// array 
// decleration of array --> 3 method
const myArr = [0,1,2,3,4,5];
const arr = ["Ayush","Heros","Seth"];
const arr1 = new Array(4,7,2,9);

// push -> use to add element in last of array
myArr.push(6)
console.log(myArr);

// pop ->> use to remove last element of array
myArr.pop();
console.log(myArr)

// unshift -->> use to add element from front 
myArr.unshift(8);
console.log(myArr)

// shift --> use to remove element from front
myArr.shift();
console.log(myArr)

// include --> use to find that the element are present or not in the array
console.log(myArr.includes(5));

// indexOf --> use to know the index of a values
console.log(myArr.indexOf(4));

// join --> join the array with the comma seperator and return as a string
const newArr = myArr.join();
console.log(newArr);

// slice ->> use to find a part of array but last index are not consider
const sliceArr = myArr.slice(1,3);
console.log(sliceArr);
console.log(myArr) // here main array not change

// splice --> use to find a part of array but last index are included
const spliceArr = myArr.splice(1,3);
console.log(spliceArr);
console.log(myArr); // here array change o/p is [0,4,5] means remaining array



