const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"]

// add both array
// push method
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);

// concat method
const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

// spread method
const newheroes = [...marvel_heroes,...dc_heroes]
console.log(newheroes);

// use of flat --> convert in one array
const arr = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
const arr1 = arr.flat(Infinity);
console.log(arr1);

// check given values is an array -----> isArray
console.log(Array.isArray("Ayush"))
// change any string, object into array ------> Array.from
console.log(Array.from("Ayush"));
// sometimes comppiler didn't understand and give empty array
console.log(Array.from({name:"Ayush"}))
// use of -----> of
let score1 = 1001
let score2 = 1024
let score3 = 8464
console.log(Array.of(score1,score2,score3));

