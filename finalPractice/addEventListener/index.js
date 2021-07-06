let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

scoreBtn = document.getElementById("score-btn")
scorePara = document.getElementById("score-para")

scoreBtn.addEventListener("click", function(){
    scorePara.textContent = data[0].score
})

