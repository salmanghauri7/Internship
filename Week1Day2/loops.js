// while 
console.log("1st loop");
let i = 0;
while(i<5){
    console.log(i);  // 0 1 2 3 4
    i++;
}

console.log("2nd loop");
i = 0;
while(i++ < 5){
    console.log(i);  // 1 2 3 4 5
}

console.log("3rd loop");
i = 0;
while(++i < 5){
    console.log(i);    // 1 2 3 4
}

// do while
console.log("4th loop");
i = 0;
do{
    console.log(i);  // 0 1 2 3 4 5
}while(i++<5);

// for
console.log("5th loop");
for(let i=0; i<5; i++){
    console.log(i);  // 0 1 2 3 4
}

// without initializing i in the syntax
console.log("6th loop");
i = 0;
for(;i<5; i++){
    console.log(i); // 0 1 2 3 4 
}
console.log("7th loop");
i = 0;
for(;i<5;){
    console.log(i); // 0 1 2 3 4 
    i++;
}

// break -> to break out of the loop 

console.log("8th loop");

i = 0
while(true){
    // we want to run this loop till 4
    if(i==5) break;
    console.log(i);
    i++;
}

// continue -> to skip the iteration
console.log("9th loop");
i = 0;
for(;i<5; i++){
    // we want to skip the 2nd iteration
    if(i==2) continue;
    console.log(i);  // 0 1 3 4
}

// if we want to break the nested loop, then we can't use break, as it will break only the inner loop
// Labels
console.log("10th loop")
outer: for(let i=0; i<2; i++){
    for(let j=0; j<2; j++){
        if(i==1 && j==1){
            break outer;
        }
        console.log(i,j)  // 00 01 10
    }
}

// code to show prime numbers
let n=10;
console.log(`Prime numbers till ${n} are:`);
notPrime: //label
for(let i=2; i<=n; i++){
    for(let j=2; j<i; j++){
        if(i % j == 0){
            continue notPrime;
        }
    }
    console.log(i)
}