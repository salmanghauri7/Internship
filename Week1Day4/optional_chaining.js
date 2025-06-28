// Optional chaining  (?)  just a way to access properties of objects
/* 
Normally, if the property of deep nested object is undefined, and we try to access it, it will through
an error(which we don't want). We expect it to return undefined.
Optional chaining is used for that
*/
let user = {
    name:'salman'
};
// console.log(user.address.street)  // it will throw an error

console.log(user?.address?.street)  // undefined

// it is also used for short circuiting, because it returns undefined as soon as it finds property which doesn't exist

// For functions

let user1 = {
    sayHi(){
        console.log("hello");
    }
};

user1.sayHi?.();

// Also we can use ?. with delete:

delete user?.['name'];
console.log(user); // empty



