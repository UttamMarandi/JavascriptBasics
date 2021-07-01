let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let cards = [firstCard , secondCard] //9

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

//3. Store & display messageEl paragraph

//4. Display the sum

//5. Display the card value

//6. New card button : Create new card function

// 7. Add to the sum when newCard is clicked

//8. Rename startgame to renderGame and let startGame invoke renderGame

//9 . Solving cards problem using an array



let messageEl = document.getElementById("message-el") //3
let sumEl = document.getElementById("sum-el") //4
let cardsEl = document.getElementById("cards-el") //5

function startGame () {
    renderGame()
}

function renderGame() {

    sumEl.textContent = "Sum:" + sum //4
    cardsEl.textContent = "Cards:" + " " + cards[0] + " - " + cards[1] //5 , 9
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

    let card = 5 //7

    sum += card //7

    renderGame()  //7

}