// string define ---  two method
const name = "Ayush";
const gameName = new String("AyushSethJi to the")

// concat operation 
console.log(name + gameName); // old method
console.log(`My name is ${name} and my fevorate game is ${gameName}`) //  New method also called string interpolation method

// length property
console.log(gameName.length)
//prototype
console.log(__proto__);  ///  give a windwo object
// upper and lower case
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
// character At 
console.log(gameName.charAt(4));
// index of 
console.log(gameName.indexOf('h')); ///  if more than one character are present then give first value index 
// substring
const newString = gameName.substring(0,7); //  give 1 value less than from last index....and in substring we coudn't give negative value
console.log(newString);
//slice ->> slice and substring both are same but in slice we can give negative value
const anotherString = gameName.slice(0,7)
const anotherString2= gameName.slice(-9,4)
console.log(anotherString);
console.log(anotherString2);
// trim --> use to trim extra white spaces.....but not middle space means only starting and ending spaces
// trim has other vareity also --> trim left,right,start,end ....left ,right are deprecated
const anotherString3 = "    Ayush   ji !"
console.log(anotherString3);
console.log(anotherString3.trim()); // trim from all side
console.log(anotherString3.trimStart()); // trim from start
console.log(anotherString3.trimEnd());  // trim from end
// replace 
const url = "https:/ayush.com%20seth"
console.log(url.replace("%20", "-"))
//include ->> use to find string
console.log(url.includes("singh")) //  give false because singh is not present in url string
//split-->The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const splitUrl = gameName.split(" ");
console.log(splitUrl[2])
/// other 
// deprecated -> sub,substr,leftTrim,rightTrim,fontsize,fontcolor,big,bold,blink











