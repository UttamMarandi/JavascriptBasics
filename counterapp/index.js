//1.Intialization 
let firstBatch = 5;

let count1 = firstBatch;
console.log(count1);

let myAge = 22;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;

console.log(myDogAge);


//2. Reassigning and Incrementing

let count2 = 5;
count2 = count2 + 2;

 console.log(count2);

//3.Test

let bonusPoints3 = 50;
bonusPoints3 = bonusPoints3 + 50;
console.log(bonusPoints3);
bonusPoints3 = bonusPoints3 - 75;
console.log(bonusPoints3);
bonusPoints3 = bonusPoints3 + 50;
console.log(bonusPoints3);

//4. Adding increment button in html


// 5.The Onclick event listner
let count = 0;
function increment() {
    
    count = count +1;
    console.log("clicked");
    console.log(count);

}

// 6. Using functions to write less code

// 7. Function to console.log a number

function consolenum () {
    let intm = 34;
    console.log(intm);
}

consolenum();

// 8. Functiona that logs the sum
console.log("Functiona that logs the sum");

let lap1= 34;
let lap2 = 33;
let lap3 = 36;

function lapsum() {
    let laptotal = lap1 + lap2 + lap3; //lapsum can acess lap variables as they are scoped globally
    console.log(laptotal);
}

                        // console.log(laptotal); not work as laptotal has blocked/function scope

lapsum();


// 9. A function that increments
console.log("A function that increments");

let lapsCompleted9 = 0;

function lapsCompletedfn() {
    lapsCompleted9 = lapsCompleted9 + 1;
    console.log(lapsCompleted9);
}

lapsCompletedfn();
lapsCompletedfn();
lapsCompletedfn();