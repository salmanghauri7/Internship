/* There are two types of Type Coercion
1. Imlicit Coercion -> done automatically by JS
2. Explicit Coercian -> done manually by user(coder)
*/

// Implicit Coercion
console.log("5" + 2); // automatically converts 2 into string and concatenates
console.log("5" + 2 + 3);
console.log(5 + 2 + "3");
console.log("2" < 3);  // automatically converted 2 into number


/* 
Explicit Coercion
There are some certain rules for type conversion

undefined becomes	NaN
null becomes 0
true and false becomes	1 and 0 respectively
string	  Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start
          and end are removed. If the remaining string is empty, the result is 0. 
          Otherwise, the number is “read” from the string. An error gives NaN.

Values that are intuitively “empty”, like 0, an empty string, null, undefined,
and NaN, become false. Other values become true.
*/
let str = '123';
let num = Number(str);  // converts string into number
console.log(typeof num);

let str1 = "JavaScript";
let num1 = Number(str1);  
/*its type will be Number, but when we will convert it into Number,
the sriing will become nan
*/
console.log(typeof num1);
console.log("num1", num1);

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("this is a string"));

// Prefix and Postfix

let a = 5;
let b = a++;
console.log(`a: ${a} and b: ${b}`);   // a = 6, b=5

let c = 5;
let d = ++c;
console.log(`c: ${c} and d: ${d}`);  // c = 6, d = 6 



