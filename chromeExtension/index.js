//1. Log out "Button Clicked"
//2. Use addEvenListener for click
// 3. Create two variables :- myLeads : assigned to an empty array & inputEl : assigned to the text input field

//4. Push the value "www.awesomelead.com" to myArray when the input button is clicked

// 5. Push the value from the input field

let myleads = []
const inputEl = document.querySelector("#input-el")
let inputBtn = document.getElementById("input-btn")


inputBtn.addEventListener("click", function(){    
    myleads.push(inputEl.value)
    console.log(myleads);
 
})
 