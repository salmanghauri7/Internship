/* 
Four types of operators:
1. Arithmetic
2. Logical
3. Ternary
4. Unary
*/

/* 
Arithmetic
+ , -, * , /, **, %
*/
console.log(5+3)
console.log(3%5);  // output will be 3
console.log((5%3));  //output will be 2

// conversions
console.log("4" + 3);  // concatenates
console.log("4" - 2);   // it will subtract

/* 
Comparison Operators
> , < , <= , >= , ==, ===
*/
console.log(5>3);
console.log('5' > 3);  // automatically converted to a number
console.log(null == undefined);  // both are treated as 0
console.log("" == 0);  // true

// === to strict check
console.log(null === undefined);  // as both types are different, it will be false

// string comparison
console.log("string comparison of fly and flew" , 'fly' > 'flew');  // true because 'y' in fly comes later than 'e' in flew

/* 
Logical Operators
|| (OR), &&(AND), !(NOT), ??(Nullish Coalescing )
*/
let result = true || false;  // it will be true
 /* 
The OR || operator does the following:

1.Evaluates operands from left to right.
2.For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
3.If all operands have been evaluated (i.e. all were false), returns the last operand.
*/
console.log(null || undefined)  // undefined because both are false so the last one is chosen
console.log(1 || 2 || 0) //1 because 1 and 2 both are true, so first value is taken
// AND
result = true && false;  //false
/*
The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
*/ 
result = (1 && 2); // it will return 2 
result = (1 && null && false);  // it will return false


// NOT
// NOT has the highest precedence among all the logical operators. AND has higher precedence than OR
result = !(true); // it will give false
result = !(0);  // it will return true

// Ternary Operator (it is if-else)
let age = 10;
let check = (age>5) ? true : false;  // it will be true as age is greater than 5

// mulitple ternary operators  (multiple if-elseif-else)
let message = (age<5) ? "You are a child": (age<18) ? "You are a boy" : "You are a man";
console.log(message);

// Unary Operator
let a = +"salman";  // it will convert it into number
console.log(typeof a);  
console.log(a)  // output will be nan

// - can be used to change sign of number
let positive = 8;
let negative = -positive;
console.log(negative);  // output will be -8


// Task 1
/*
Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.
*/
if (age>=14 && age<=90){
    console.log("Age is between 14 and 90 inclusively")
}
else{
    console.log("Age is not between 14 and 90 inclusively")
}
// Task 2
/* 
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/
// 1st variant
if(!(age>=14 && age<=90)){
    console.log("Age is not between 14 and 90 inclusively")
}
else{
    console.log("Age is between 14 and 90 inclusively")
}

// 2nd variant
if(age<14 || age>90){
    console.log("Age is not between 14 and 90")
}
else{
    console.log("Age is between 14 and 90")
}




