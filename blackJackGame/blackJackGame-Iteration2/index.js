

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = [] //9


// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

//3. Store & display messageEl paragraph

//4. Display the sum

//5. Display the card value

//6. New card button : Create new card function

// 7. Add to the sum when newCard is clicked

//8. Rename startgame to renderGame and let startGame invoke renderGame

//9 . Solving cards problem using an array

//10. Push the card to cards array

//11. Create a for loop that renders out all the cards instead of just one

//12. Create getRandomCard() to return a random number for the cards

//13. getRandomCard() returns a number between 1 and 13

//14. If 1 -> return 11 , if 11-13 -> return 10

//15. Assigning values in startGame() : Assign the cards and sum variables only when player starts the game

let messageEl = document.getElementById("message-el") //3
let sumEl = document.getElementById("sum-el") //4
let cardsEl = document.getElementById("cards-el") //5

function getRandomCard() { //12
    
    let randomNumber = Math.floor(Math.random() * 13) +1 

    if (randomNumber === 1 ) { //14
        return 11
    } else if (randomNumber >10) {
        return 10
    }
    else {
        return randomNumber
        
    }

}


function startGame () { 
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}


function renderGame() {

    sumEl.textContent = "Sum:" + sum //4
    cardsEl.textContent = "Cards:"//5 , 9

    

    for (let i = 0; i<cards.length; i++) {
       cardsEl.textContent += cards[i] + " "

    }
    


    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    console.log(message)

    messageEl.textContent = message //3
    
}

function newCard() {                        //6
    console.log(" Drwaing a new Card");

    let card = getRandomCard() //7

    sum += card //7

    cards.push(card) //10

    console.log( cards);
    
    renderGame()  //7

}