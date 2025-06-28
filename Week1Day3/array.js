// arrays are actually objects
// but they are stored in the contigous memory locations, so they are faster
let declareArray1 = new Array();
let declareArray2 = [];

// Array can store anything

let arr = ["salman", {name: "salman"}, true, function(){console.log('Hello')}, 52];

console.log(arr[1]["name"]);
arr[3]();

// To find last element

console.log(arr[arr.length -1])

// 'at' method  beacause you can't use arr[-1]
console.log(arr.at(-1));
arr.at(3)()

// push/pop
// push -> appends the element at the end of the array (Just like in Stack)
// pop -> removes the element from the end of the array (stack)

let arrFruits = ["apple", "mango"];
console.log(arrFruits.pop());  // pop() -> removes the last element and returns it

arrFruits.push("oranges", "Kiwis");  // push() returns the size of the array after appending
console.log((arrFruits));

// shift / unshift
// shift -> removes the element from the start of the array (like queue(LIFO))
// unshift -> adds the element to the start of the array

arrFruits.shift();
console.log((arrFruits))

arrFruits.unshift("banana");
console.log(arrFruits);

// loop for array (for...of)
// technically, we can alo use for...in as arrays are also objects, but it's not the right idea

for (let fruit of arrFruits){
    console.log(fruit);
}

// lenth in arrays
// it just return the largest numeric index plus one
// lets see what happens when we modify the length

let ar = [1, 2, 3, 4, 5];

ar.length = 2; // truncate to 2 elements
console.log( ar ); // [1, 2]

ar.length = 5; // return length back
// alert( ar[3] ); // undefined: the values do not return

// multidimensional arrays
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix[0][1]);  // returns 2nd element of 1st array

// Array to string conversion
// it just converts array into comma-separated list of elements

let arr1 = [1,2,3];
console.log(String(arr1));  // 1,2,3

console.log(String(arr1) === '1,2,3');

// splice method
// it can remove, insert and replace values
// Syntax -> arr.splice(start, deleteCount, element1, ... , elementN)

// to just delete elements
arr1.splice(1,2)  // it will delete 2 elements starting from 1 index
console.log(arr1);  // [1]

// to just insert elements, we have to set deletecount to 0
arr1.splice(1, 0, 4,5,6) // 4,5,6 will be inserted at 1 index
console.log((arr1));  // [1,4,5,6]

// to replace
arr1.splice(1,1,2) // replace 4 with 2
console.log(arr1);

// Negative indexes are also allowed in splice method

// Slice method
// returns the copy of the array of the indices specified
// syntax -> arr.slice(start, end)  end index is not included


slicedArray = arr1.slice(1,3)
console.log(slicedArray);

// if we pass slice() without any arguments, then it will copy the whole array

//concat method
// used to concatenate arrays together (arrays or values)
concatenatedArray = arr1.concat([7,6], "salman")
console.log(concatenatedArray);
console.log(arr1);

// ForEach()  
// syntax => forEach(element, index, array)
// it is used to pass function to each element of the array
console.log("forEach starts here");
arr1.forEach(console.log);  // element index array
arr1.forEach((element) => console.log(element));  // just print elements
arr1.forEach((element, index) => console.log(element, index));

// Searching in arrays
//1. indexOf(item, from) -> returns the index(-1 if not found)
//2. lastIndexOf(item, start) -> similar to indexOf(), but searches from right to left
//3. includes(item, from) -> return true/false


let arr2 = [1,2,5,2,6,'string', 8, 'n']

console.log(arr2.indexOf(6))  //4
console.log(arr2.includes(6))
console.log(arr2.lastIndexOf(2))  // there are two 2, but it will return index of first from right
console.log(arr2.indexOf(2)) // there are two 2, but it will return index of first from left

// What if we have objects in the array, then all the above methods don't work
//4. find(fn) -> returns the item(If not, then returns undefined) ,, fn-> item, index, array 
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
console.log(users.find((item) => item.id===2));  // return item where id = 2
console.log(users.find((item, index) => index==2));

//5. findIndex -> similar to find(), but return the index

console.log(users.findIndex((item) => item.id===3))  // return 2
//6. findLastIndex -> find index from right to left

//7. filer()
// find(), just finds the first element whose value is true and returns the item.
// filter method can return multiple values


console.log(users.filter((item) => item.id <= 2)) // returns the array of all the items whose id is less than 2
let words = ['watch', 'transparent', 'mouse', 'charger'];
console.log(words.filter((word) => word.length > 5)); // ['transparent', 'charger']

// map
// It calls the function for each element of the array and returns the array of results.
let results = words.map((word) => word.length);
console.log(results);


// different use cases of map()
// - getting array of squares
let n = [1,2,3];
let squares = n.map(item => item*item);
console.log(squares); // [1,4,9]

// - Extract Specific Property from Objects
let names = users.map(item => item.name)
console.log(names);

// - Chaining with other methods
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter(n => n % 2 === 0).map(n => n * 10);
console.log(result); // [20, 40]

// - adding a new property to object
let students = [
  {name: 'Salman', score: 93},
  {name: 'Hamza', score : 80}
]
let newStudents  = students.map(items => ({...items, passed : items.score > 90}))
console.log(newStudents);

// - deep clone and modify nested elements
let student = [
  {name: 'Salman', address : {city: 'Lahore', town:'dar-ul-ehsan town'}}
]
let cloned = student
.map(item =>({...item,
  address:{...item.address, city:'Okara'}
}));
console.log(cloned);






