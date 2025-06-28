// Rest Paramters (...)
/*
In js, there are some functions which can take arbitrary number of arguments, like:
Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments.
Object.assign(dest, src1, ..., srcN) – copies properties from src1..N into dest.
Sometimes, We want the same with our cutom-built functions
*/ 

function sum(a, b){ 
    return a+b;
}

console.log(sum(2,3,4,5,6));  // it will not throw error but sum() will take only first two arguments

/*
 But we want to convert these rest of the arguments into array(using rest parameters)


function sum(a, b, ...args){
    return a+b;
}
*/

// if i want the sum of all arguments

function sumAll(...args){
    let sum=0;
    for (let arg of args){
        sum += arg;
    }
    return sum;
}

console.log(sumAll(2,6,8,9,2));

function showName(firstName, lastName, ...titles) {
  console.log( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log( titles[0] ); // Consul
  console.log( titles[1] ); // Imperator
  console.log( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

// the rest parameters must be at the end
// function (par1, ...args, par2)  // error


// Spread Operator
/*
Similar to Rest(which used to convert arguments into array of arguments)
Spread converts array into arguments
*/

// imagine we have a function which don't take arrays and take only numbers
// like Math.max(arg1, arg2, ... , argn)

let arr = [4,5,2];
// Math.max(arr) // it will throw an error

// But:

console.log(Math.max(...arr))

// spread can also be used to iterate the iterables
let str = "Hello";

console.log( [...str] ); // [H,e,l,l,o]



