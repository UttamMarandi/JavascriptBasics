// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let buttonPur = document.getElementById("button-pur")
let error= document.getElementById("error")


function showError() {
    error.textContent = "Something went wrong, please try again"
    
}

