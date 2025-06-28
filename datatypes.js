// datatypes in js

// infinity, -infinity, nan

let x = 1 / 0
console.log(x) // Output will be 'Infinity'
console.log(100 / Number.MIN_VALUE)  // dividing by very small value
console.log(Math.pow(10,100000))  // taking very large number as power
// nan -> mathematical error

let nanVar = 'string' / 4;
console.log(nanVar);  // output will be 'nan'
console.log(Infinity - Infinity) 
console.log(0 / 0)

/* 
string
1. ''
2. ""
3. `` -> to embed other strings
*/

str1 = 'world';
str2 = "hello Universe";
str3 = `Hello ${str1}`;
console.log(str3);   // output will be Hello world
console.log("2 + 3 = ${2+3}")  // output will not be 2+3 = 5 because of ""

// boolean

let bool = 5 > 3
console.log(bool)  // true

// null
// It just represents nothingness, empty. (it's not a null pointer)
let age = null;
console.log(age)


// To find type 
console.log(typeof console.log)  // function
console.log(typeof "str")  // string
console.log(typeof Math)   // object
console.log(typeof 100)   // number
console.log(typeof 100n)  // big int

