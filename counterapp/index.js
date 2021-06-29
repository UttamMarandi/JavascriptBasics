//1.Intialization of variable
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
    // console.log("clicked");
    // console.log(count);

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

// 10. Increment on clicks - Change count in html
console.log("Increment on clicks")

let count10 = 0;

function increment10() {
    count10 = count10 + 1;
    console.log (count10);
    document.getElementById("count-el").innerText = count10;
}

//11.Document Object Model

//12. Create a function save12() , which logs out the count when called
console.log ("Create a function save12() , which logs out the count when called")

let count12 = 0;

function save12() {
    console.log (count12)
}

save12();

// 13. Html : Create a save button with id save-btn and call the save12() fn

// 14.Create a variable message that stores a string

console.log ("Create a variable message that stores a string")

let message = "You have three new notifications"
console.log(message)

//15. Concanetate strings +

console.log ("Concanetate strings")
let user = "Uttam";

console.log(user+message)
console.log(user+ " "+ message)

//16.Create a variable that store the concatenated message 

console.log("Create a variable that store the concatenated message ");

let plusMessage = user + " " + message 
console.log(plusMessage);

//17. Test - String 1 TS - 52:12
console.log("Test - String 1 TS - 52:12")

let name = "Uttam"
let greeting = "Hi, My name is"

let myGreeting = greeting + " " + name

console.log(myGreeting)

// 18.Strings vs Numbers
console.log("Add number to a string");

let name18 = 40

let greeting18 = "Hi, I am "

let myGreeting18 = greeting18  + "" + name18 //when a number is added to a string , the number is converted into a string

console.log (myGreeting18)


//19. Concatenate a string which is also a number "40"

console.log("Concatenate a string which is also a number (40) ");

let points19 = 40;

let bonusPoints19 = "5"

let totalPoints19 = points19 + bonusPoints19;

console.log(totalPoints19); //405 as points19 is converted to a string

