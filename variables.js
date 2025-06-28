'use script';  // it is to make code compatible with modern JS
// var
var x = 6;
var x = 5;
console.log("variables declared using 'var' can be overwritten " + x);  // this can work

// let
let y = 5;
// let y = 6;  // this can't work because i have already initialize variable with y name

// const 
/* 
 It actually defines a constant reference to a value, not actual value 
*/
const cars = ['BMW', 'Audi'];
cars[0] = 'Toyota';  // this can work
console.log(cars)
// cars = ['Toyota', 'Audi']           // this can't work beacause you can't define the whole value again

// Similary 
const val = 5;
// val = 6; // it won't work

/* 
Task 1 from javascript.info (let, var, const)
1. Declare two variables: admin and name.
2. Assign the value "John" to name.
3. Copy the value from name to admin.
4. Show the value of admin using alert (must output “John”).
*/

let admin, name;
name = 'John';
admin = name
console.log(admin);

