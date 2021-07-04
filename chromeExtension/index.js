//1. Log out "Button Clicked"
//2. Use addEvenListener for click
// 3. Create two variables :- myLeads : assigned to an empty array & inputEl : assigned to the text input field

//4. Push the value "www.awesomelead.com" to myArray when the input button is clicked

// 5. Push the value from the input field

//6. Log out myLeads array using a loop

//7. Grab unordered list 

//8. Render the list into unordered list

//9.How to render li elements into html : innerHTML

//10.Make app more performant -> Create a variable, listItems, to hold all the html for the list items -> Assign it to an empty string -> Add the item to the listItems variable instead of ulEl.innerHTML -> Render the listItems inside the unordered list using ulEl.innerHTMl

//11. Create the render function

//12. Clear the input field

//13. Make the list clickable -> wrap the li tags with <a> tag, open in new tab

//14.Use template literals

//15. Deploy as chrome extension

//16. Persist data across page refresh :- localstorage

//17. Use of JSON.parse () and JSON.stringfy()

let myLeads = []
console.log(myLeads);


const inputEl = document.querySelector("#input-el")
let inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")



console.log(localStorage.getItem("myLeads")); //16

localStorage.clear

inputBtn.addEventListener("click", function(){    
    myLeads.push(inputEl.value)
    console.log(myLeads);
    console.log(myLeads.length);
    lengthLeads = myLeads.length
    renderLeads()
    inputEl.value = "" //12
})


function renderLeads() {
    let listItems =""

    for(let i =0; i<myLeads.length; i++) {
        console.log(myLeads[i]);
        // listItems += "<li>" +"<a href=' "+ myLeads[i] + "' target='_blank' >"+ myLeads[i]+"</a>" + "</li> "

        //Alternative of inner html
    //   const li = document.createElement("li") //no tags
    //   li.textContent = myLeads
    //   ulEL.append(li)
        listItems += `
        <li>
            <a href='${myLeads[i]}' target = '_blank'>
                ${myLeads[i]}
            </a>
        </li>
        `

    }
    console.log(listItems);

    ulEL.innerHTML = listItems


}

