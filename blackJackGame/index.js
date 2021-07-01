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