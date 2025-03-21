// Math ---> diffrent method 
console.log(Math);

// absolute method -> use to change negative value into positive
// console.log(Math.abs(-5));

// round method --> use for roundoff ->> if value after decimal is 5 or greater than 5 then increase the integer value
// console.log(Math.round(4.2))
// console.log(Math.round(4.5))
// console.log(Math.round(4.8))

// ceil method --> increase the by 1 no matter what is after the decimal
// console.log(Math.ceil(4));   here output is 4 because nothing is after the decimal
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(4.8));

// floor method --> give same integer value ----> here in all cases o/p is 4
// console.log(Math.floor(4)); 
// console.log(Math.floor(4.2));
// console.log(Math.floor(4.8));

// Min  --> gives minimum value of array
// console.log(Math.min(4,8,6,3,12));

// Max  --> gives maximum value of array
// console.log(Math.max(4,8,6,3,12));

// random method --> gives random values between 0 and 1
// console.log(Math.random());
console.log(Math.floor(Math.random() * 10)+1 );  ///  mostley use in dice gammming ---> where values is between 1-10

// important -- >> u can use this in dice 
const min = 1
const  max = 6
console.log(Math.floor(Math.random() * (max - min + 1) + min))


























