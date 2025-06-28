// JavaScript Object Notation
// stringify() -> to convert object into JSON
// parse() -> to convert JSON into object

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

// converting this object into JSON
let json = JSON.stringify(student)
console.log(json);

/*
The method JSON.stringify(student) takes the object and converts it into a string.

The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object.
*/

/*
JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.
*/

/*
But it does not support the following datatypes:
Function properties (methods).
Symbolic keys and values.
Properties that store undefined.
*/

let user = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

console.log( JSON.stringify(user) );  // {}

/*
The important limitation: there must be no circular references.

For instance:
*/
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup

// JSON.stringify(meetup);   // error
console.log(room);

// whole syntax of json.stringify
// JSON.stringify(value[, replacer, space])
// sometimes, we don't want specific key:value pair in our JSON, so we exclude it by using replacer

room = {
  number: 23
};

meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup

// JSON.stringify(meetup); // Error: Converting circular structure to JSON

/* 
in this example, we can't stringify meetup because of circular reference,
so we want to exclude the occupiedBy
*/ 

console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));

// We can use a funciton for replacer, as we can't give the whole array of keys 

console.log(JSON.stringify(meetup, function replacer(key, value){
    console.log(`${key}, ${value}`);
    return (key=='occupiedBy') ? undefined : value
}));


/*
The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty formatting.

Previously, all stringified objects had no indents and extra spaces. That’s fine if we want to send an object over a network. The space argument is used exclusively for a nice output.

Here space = 2 tells JavaScript to show nested objects on multiple lines, with indentation of 2 spaces inside an object:
*/

let user1 = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

console.log(JSON.stringify(user1, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

// json.parse(str, reviver) to convert String object into JSON

 