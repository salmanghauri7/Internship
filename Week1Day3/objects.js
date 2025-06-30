// two ways of creating an object
// 1. Object Constructor
let user1 = new Object();

// 2. Object Literal
let user2 = {
    name : "Salman",
    age : 22,
    "like cars" : true,   // normally every key is a string, but when we have to use two 
                        // strings with a space then, write them in ""
};

// to access 
console.log(user2.name);
// But to access string key
// user2.like cars     // it will not work
console.log(user2["like cars"]);
console.log(user2["age"]);

// to delete a key:value pair

delete user2['like cars'];

console.log(user2);



// to update any value
user2['age'] = 30;
console.log(user2);

// we can also make a key from a variable

let key = "like bird";
user2[key] = true;
// we can't use dot notation to assign value from a variable

console.log(user2);

// a function to return values in object
function createUser(name, age){
    return {
        name:name,
        age:age
    };
}
console.log(createUser("Salman", 22));

// we can even use this
function createUser1(name, age){
    return {
        name,  // automatically assigns age:age
        age,
    };
}
console.log(createUser1("Ali", 25));

// check if a key exists in object
let user3 = createUser("Shahmeer", 45); 
console.log("name" in user3);  // true

// or we can do this
console.log(user3["name"] === undefined)  // false, meaning name exists in user3 object

// for...in
// this loop is specifically designed to iterate over keys of objects

for (let key in user2){
    console.log(key, ":", user2[key]);
}

// Order in objects
/* if we use for...in , will we get the same order in which keys were added to object?
Answer is yes, for non-integer keys, but for integer keys, it follow a asceding order
*/
// example:
let phoneCode = {
    43 : "Germany",
    41 : "France",
    1 : "USA",
};
for (let key in phoneCode){
    console.log(key)  // 1 41 43
}
// what if we want to print first 43, then 41 and then 1
// Make them non-integer by adding + to it
let phoneCode1 = {
    "+43" : "Germany",
    "+41" : "France",
    "+1" : "USA",
};
for (let key in phoneCode1){
    console.log(key)  //  43 41 1
}

// task1
/*
Write the function isEmpty(obj) which returns true if the object has no properties,
false otherwise.
*/
function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}
console.log(isEmpty(user2));  // false
let emptyObj = {}
console.log(isEmpty(emptyObj));    //true

console.log(isEmpty({a: 1}));  //false

// Write the code to sum all salaries and store in the variable sum
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum=0;
for (let key in salaries){
    sum += salaries[key];
}
console.log(sum)

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// before the call
const menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof(obj[key]) == "number"){
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);   // as the object is always passed as a reference, it will change its original value
console.log(menu)


// Even if we initialize the object with const, we can still modify its values
// But we can't change the whole object 

// Cloning
/*
When we pass an object to other variable, the reference is copied, not actual object
That's where cloning comes in (object.assign(target, parameters))
*/

// 1st method
let clone = Object.assign({}, user2);

// 2nd Method
let clone1 = {}
Object.assign(clone1, user2);

console.log(clone1);

// to do nested cloning, also called deep cloning
const toClone = {
    name:"Arham",
    size: {
        height : 160,
        weight : 70,
    }
}

const nestedClone = structuredClone(toClone);
console.log(nestedClone)


// function in objects
const funcObject = {
    name : "Rehman",
    sayHi(){
        console.log("Hello")
    }
};
funcObject.sayHi();

// we can create a function outside and make it the method of an object
function showName(){
    console.log(this.name)   // 'this' is an object (The value of this is the object “before dot”, the one used to call the method.)
}
funcObject.showName = showName;
funcObject.showName();

// You can also change the function, just like any other property of object

// Chaining

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    console.log(this.step);
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// But we want to make this ladder object to support chaining
// like this: ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
let ChainedLadder = {
    step : 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep(){
        console.log(this.step);
        return this 
    }
};
ChainedLadder.up().up().down().showStep().down().showStep();
