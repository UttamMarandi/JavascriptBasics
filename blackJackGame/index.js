// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 5

let secondCard = 9

let sum = firstCard + secondCard

console.log(sum);

//1. Blackjack simple logic

console.log("Blackjack simple logic");

if (sum <21 ) {
    console.log("Do you want to draw a new card? 😊");
}
else if (sum === 21) {
    console.log("Waoo ! You have got blackjack 🥳");
}
else if (sum > 21 ) {
    console.log("Yor are out of the game");
}

//2. Check minimum age for nightclub

console.log("Check minimum age for nightclub");

let age = 22

if (age <21) {
    console.log("You cannot enter the club");
}
else {
    console.log("Welcome to the night club");
}


//3. If else statement practice

console.log("If else statement practice");

let age3 = 100

if (age3 < 100) {
    console.log("You are not eligible");
}
else if (age3 === 100) {
    console.log("Hurray , here is your birthday card from King !");
}
else {
    console.log("Not eligible ! You have already got one");
}

//4 . If else for black jack

console.log("If else for black jack");

let firstCard4 = 10
let secondCard4 = 7
let sum4 = firstCard4 + secondCard4

if (sum4 <= 20){
    console.log("Do you want to draw a new card?");

}
else if (sum4 === 21 ){
    console.log("Wohoo ! You have got blackjack");
}

else {
    console.log("You are out of game");
}

//5. Variable to store a blackJack ..hasBlackJack
//6. Variable to store the state when game ends ..isAlive

console.log("Variable to store state of game");

let firstCard5 = 10
let secondCard5 = 7
let sum5 = firstCard4 + secondCard4
let hasBlackJack5 = false // boolean variable
let isAlive = true //false when sum > 21
if (sum5 <= 20){
    console.log("Do you want to draw a new card?");

}
else if (sum5 === 21 ){
    console.log("Wohoo ! You have got blackjack");
    hasBlackJack5 = true // changing the state
}

else {
    console.log("You are out of game");
    isAlive5 = false //6.
}

console.log(hasBlackJack5);
console.log(isAlive);

//7 .Boolean conditions : Comparative expressions in if ..else conditions also result in boolean value. 

//8. Variable to store the message ..message


console.log("Variable to store the message");

let firstCard8 = 10
let secondCard8 = 7
let sum8 = firstCard8 + secondCard8
let hasBlackJack8 = false // boolean variable
let isAlive8 = true //false when sum > 21

let message8 = ""


if (sum8 <= 20){
    console.log("Do you want to draw a new card?");
    message8 = "Do you want to draw a new card?" 
}
else if (sum8 === 21 ){
    console.log("Wohoo ! You have got blackjack");
    hasBlackJack8 = true // changing the state
    message8 = "Wohoo ! You have got blackjack"
}

else {
    console.log("You are out of game");
    isAlive8 = false //6.
    message8 = "You are out of game"
}

console.log(hasBlackJack8);
console.log(isAlive8);
console.log(message8);

//9. Arrays in Javascript

//Arrays are ordered list of elements

let featuredPosts = ["Check out my Netflix clone",
    "Here's the code to my project",
    "I've just relaunched my portfolio"
]

let skills = ["Coding",
    "dancing",
    "swimming",
    "snowboarding"
]

console.log(skills[0]);


//Arrays are also composite data type meaning diffent types of data types can be stored in an array

let Me = ["Uttam",
    22,
    true
]

//10. Push operations in Array

console.log("Push operations in Array");

let cards2 = [7,5]

cards2.push(6)

console.log(cards2);

//11. Push the newMessage to the array, and then log out the array

console.log("Push the newMessage to the array, and then log out the array");

let messages = [
    "hey, how's it going",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately"
]

let newMessage = "Same here! "

messages.push(newMessage)

console.log(messages);

// 12. Remove the last item of an array pop()

messages.pop()
console.log(messages);

//13. Counts with javascript ... for loop

console.log("Counts with javascript ... for loop");

for ( let count13 = 1; count13 < 11; count13 +=1) {
    console.log(count13);
}

//14. count from 1 to 20
console.log("count from 1 to 20");

for (let count14 = 10; count14 <=20; count14++) {
    console.log(count14);
}

//15. Create a loop to count from 10 to 100 in steps of 10

console.log("Create a loop to count from 10 to 100 in steps of 10");

for(count15 = 10; count15 <= 100; count15 += 10) {
    console.log(count15);
}

//16. Use for loop to render messages[] in console

for(let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

//17. Array based loop

console.log("Array based loop");

let cards17 = [7, 3, 9]

for (let i = 0; i< cards17.length ; i++) {
    console.log(cards17[i]);
}

//18. Arrays , forloops , DOM : loop through the array of strings and display on front end

console.log(" Arrays , forloops , DOM ");

let sentence18 = ["Hello" , "my", "name", "is", "Uttam"]
let greetigEl18 = document.querySelector(".greeting-el")
console.log(greetigEl18);

let totalSentence18=""

for(let i = 0; i< sentence18.length; i++) {
    totalSentence18 = totalSentence18 +" "+ sentence18[i]
    
}
// greetigEl18.textContent = totalSentence18

// 19. Randomness & return of a function

//20. Check the fastest player : use a function

console.log("Check the fastest player : use a function");

let player1Time = 102

let player2Time = 107

function getFastestRaceTime() {
    if(player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Tine)  {
        return player2Time
    }
    else {
        player1Time
    }
}
let fastestRace = getFastestRaceTime()

console.log(fastestRace);

//21. Function that returns the total race time

console.log("Function that returns the total race time");


function totalRaceTime () {
    return(player1Time + player2Time)
}

let totalTime21 = totalRaceTime()

console.log(totalTime21);

//22. Generate Random Numbers

let randomNumber22 = Math.random()

console.log(randomNumber22);

//22. generate random number between 0 and 5
console.log("generate random number between 0 and 5");

let randomNumber23 = Math.random()*5

console.log(randomNumber23);

//23. Math.floor()

console.log("Math.floor()");
let floorNumber = Math.floor(4.784)

console.log(floorNumber);

//24.Use Math.floor & Math.random() together

console.log("Use Math.floor & Math.random() together");


function randomness() {

    return Math.floor(Math.random() * 5) //generate bewtween 0 & 4
}

for (i=0; i<10; i++) {
    console.log(randomness());
}

//25. Create a dice function return 1,2,3,4,5,6 randomly NOT 0

console.log(" Create a dice function ");

function randomnessDice () {
    return Math.floor(Math.random() * 6) + 1
}
for (i=0; i<10; i++) {
    console.log(randomnessDice());
}

//26. Call the function when both condition is true

console.log(" Call the function when both condition is true");

let hasCompletedCourse = true

let givesCertificate = true 

function generateCertificate() {
    console.log("Generating Certificate...");
}

if(hasCompletedCourse && givesCertificate) {
    generateCertificate()
}

//27..Logical Operator ..check both variavles are false

console.log("Logical Operator ..check both variavles are false");

let hasSolvedChallenge = false
let hasHintsLeft = false

function showSolution() {
    console.log("Showing the solution...");
}

if ( !(hasSolvedChallenge && hasHintsLeft)) {
    showSolution()
}

//28. OR Operator

//29. Objects in Javascript
console.log("Objects in Javascript");

let course = {
    title : "Learn CSS value for free",
    lessons : 16,
    creator : "Uttam Marandi",
    length : 65,
    level :3 ,
    isFree : true,
    tags : ["html", "css"]
}

console.log(course);

console.log(course.length);

console.log(course.tags[0]);

//30. Create an object with every data type

console.log("Create an object with every data type");

let airbnbList = {
    isAvailable : true,
    nameOfPlace : "Harida",
    priceOfPlace : 450,
    tagsOfPlace : ["wifi" , " hot water", "free brealfast"]
}

console.log(airbnbList);

console.log(airbnbList.isAvailable);