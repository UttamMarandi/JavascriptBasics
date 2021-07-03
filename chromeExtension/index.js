//1. Log out "Button Clicked"
//2. Use addEvenListener for click
// 3. Create two variables :- myLeads : assigned to an empty array & inputEl : assigned to the text input field

//4. Push the value "www.awesomelead.com" to myArray when the input button is clicked

// 5. Push the value from the input field

//6. Log out myLeads array using a loop

//7. Grab unordered list 

//8. Render the list into unordered list

//9.How to render li elements into html : innerHTML

let myLeads = ["hi","hello","senorita"]
const inputEl = document.querySelector("#input-el")
let inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")


inputBtn.addEventListener("click", function(){    
    myLeads.push(inputEl.value)
    console.log(myLeads);
    console.log(myLeads.length);
    lengthLeads = myLeads.length
})


for(let i =0; i<myLeads.length; i++) {
      console.log(myLeads[i]);
      ulEL.innerHTML +="<li>" + myLeads[i] + "</li "
}
     


