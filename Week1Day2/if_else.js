/*
Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.
*/
let age = 15
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

/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/
// As we are working in Node.js, we won't take input from user
let username = "Admin";
let password = "TheMaster";

if(username === "Admin"){
    if(password === "TheMaster"){
        console.log("Welcome!");
    }
    else if(password === null || password === ""){
        console.log('Cancelled!');
    }
    else{
        console.log("Wrong Password");
    }
}
else if(username === null || username === ""){
    console.log("Cancelled!");
}
else{
    console.log("I don't know you");
}

