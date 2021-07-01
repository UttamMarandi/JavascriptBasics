let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

//3. Store & display messageEl paragraph

//4. Display the sum

//5. Display the card value

//6. New card button : Create new card function

let messageEl = document.getElementById("message-el") //3
let sumEl = document.getElementById("sum-el") //4
let cardsEl = document.getElementById("cards-el") //5

function startGame() {

    sumEl.textContent = "Sum:" + sum //4
    cardsEl.textContent = "Cards:" + " " + firstCard + " - " + secondCard //5
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
