// Number -> two syntax to declare
const val = 400;
console.log(val);

const num1 = new Number(2000);
console.log(num1);

// toString ->> use to convert number into string 
console.log(num1.toString().length);

// tofixed ->> use to fixed the digit after decimal
console.log(num1.toFixed(2));

// toLocalString --> provide more redability to read
const anotherNumber = 1000000000;
console.log(anotherNumber.toLocaleString()); //  us standerd
console.log(anotherNumber.toLocaleString('en-IN')); // indian standerd

// toPrecision()
// This number has exponent 0, so it will never use exponential notation
let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

// This number has exponent -4, so it will never use exponential notation
num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// This number has exponent 3, so it will use exponential notation if precision is less than 4
num = 1234.5;
console.log(num.toPrecision(1)); // '1e+3'
console.log(num.toPrecision(2)); // '1.2e+3'
console.log(num.toPrecision(6)); // '1234.50'

// This number has exponent -7, so it will always use exponential notation
num = 0.00000012345;
console.log(num.toPrecision(1)); // '1e-7'
console.log(num.toPrecision(10)); // '1.234500000e-7'




