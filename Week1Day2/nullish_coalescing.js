// ?? -> nullish coalescing operator
//  ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

let result = (null ?? 10)  // will return 10

let user = "Salman";
console.log(user ?? "Anonymous");

// Remember that nullish coalescning does not treat 0, "",false as null/undefined
// It is same as using || (OR)
console.log(user || "Anonymous");  // will output Salman

// But in || 0, false, "" are treated as undefined
// For example

user = "";
console.log(user || "Anonymous")  // output will be "Anonymous"