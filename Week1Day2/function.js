// Declarations
function min(a, b){
    if(a<b){
        return a;
    }
    else if(a>b){
        return b;
    }
    return undefined;
}
console.log(min(5,5));

function pow(x, n){
    let init = x;
    let toReturn = 1
    for(let i=1; i<=n; i++){
        toReturn *= x;
    }
    return toReturn;
}
console.log(pow(0,4))

// 2nd variant
function pow(x, n){
    return x**n;
}
console.log(pow(2,4))

// Expression
let isPrime = function(n){
    for(let i=2;i<n;i++){
        if(n % i == 0){
            return false;
        }
    }
    return true
};
console.log(isPrime(4));

// callbacks
function yesUser(){
    console.log("Yes you are a user");
}
function noUser(){
    console.log("No you are not a user");
}
function confirmUser(str, yes, no){   // here yes and no are callback functions
    if(str == "Yes") yes();
    else no();
}
confirmUser("Yes", yesUser, noUser)

// we can also do this
confirmUser(
    "no", 
    function() {console.log("Yes you are a user")},  // funciton expression
    function() {console.log("No you are not a user")}
)

//  Function Declaration vs Function Expression

/*
A Function Declaration can be called earlier than it is defined.
A Function Expression is created when the execution reaches it and is usable only from that moment.
*/

// Function Declaration

sum(5,4) // it will work
function sum(a, b) {
  return a + b;
}

// Function Expression
//subtract(5,4); // it won't work

let subtract = function(a, b) {
  return a - b;
};
 
/* 
n strict mode, when a Function Declaration is within a code block,
it’s visible everywhere inside that block. But not outside of it.

if we want to use it outside that block. use function expression


*/
let multiply;
{
    multiply = function(x, y){
        return x * y;
    }
}
console.log(multiply(4,3)); // we can use it like this outside the block

// Arrow Functions  -> Simple form of function expressions
let divide = (a, b) => a / b;
console.log(divide(4,2));

let greet = () => console.log("Hello!");

// multi-line arrow functions
let arithmetic = (a, b) => {
    let result = a*b;
    return result
}


/*  
Paramters vs Arguments
Parameters are what the function expects,
Arguments are what you give it.

funtion sum(a,b){...}  a, b -> parameters
sum(4,5)  4,5 -> arugments
*/

// Function chaining
let str = "    Hello";
str = str.trim().toUpperCase().slice(1).repeat(2)
console.log(str)

// To create function chaining
class calculator{
    constructor(value){
        this.value = value;
    }
    add(value){
        this.value += value;
        return this;
    }

    sub(value){
        this.value -= value;
        return this;
    }

    mul(value){
        this.value *= value;
        return this;
    }

    div(value){
        this.value /= value;
        return this;
    }

    result(){
        return this.value;
    }
}
const obj = new calculator(5);
let res = obj.add(3).mul(2).div(4).result()
console.log(res)

// another example with multiple values
class Profile{
    constructor(name, age, active){
        this.name = name;
        this.age = age;
        this.active = active
    }
    setName(name){
        this.name = name;
        return this;
    }
    setAge(age){
        this.age = age;
        return this;
    }
    setActive(active){
        this.active = active;
        return this;
    }
    show(){
        console.log(`Name is ${this.name}, age is ${this.age}, activation is ${this.active}`);
        return this
    }
}
let p = new Profile("Salman", 21, true);
p.setName("Salman Rafiq").setAge(22).setActive(false).show()

// Function hoisting

/*
Interpreter takes the function at the top of the code automatically and then it 
can be used even above its declaration
For example:
*/
show();
function show(){
    console.log("Function is hoisted");
}

// But it will not work for Function expressions and arrow functions

// Similary, variables defined by 'let' and 'const' can't be hoisted