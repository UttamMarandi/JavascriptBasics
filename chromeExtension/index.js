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

//18. Save myLeads array to localstorage

//19. get leads from localStorage , leadsFromLocalStorage , use JSON.parse to convert array/objects to string

//20. checking localStorage before rendering

//22. making renderLeads() function more dynamic , passing arguments

//23. Create the tab button :- When clicked logs linkedin url

//24. Save the taburl
//25. Use chrome API to save the link

//26. Save and deploy extension to google chrome

let myLeads = []

const inputEl = document.querySelector("#input-el")
let inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


let leadsFromLocalStorage = localStorage.getItem("myLeads")
leadsFromLocalStorage = JSON.parse(leadsFromLocalStorage) //19
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage){  //leadsFromLocalStorage === [] is wrong b.c [] is true but equates with leadsFromLocal Storage which results in false
    myLeads = leadsFromLocalStorage //20
    render(myLeads)
}




function render(leads) {
    let listItems =""

    for(let i =0; i<leads.length; i++) {
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



deleteBtn.addEventListener("dblclick", function deleteAll(){
    localStorage.clear()
    myLeads = []
    ulEL.innerHTML = "" // calling renderLeads() also gives the same reasults as myLeads[] array is empty now
})

tabBtn.addEventListener("click", function() {
    //chrome API //25
    chrome.tabs.query({active:true , currentWindow:true} , function(tabs){//in chrome object get tabs objet and run query method ...show undefined on run b.c we have to give permission to tabs object in manifest file..
        console.log(tabs);
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    } )

   

})


inputBtn.addEventListener("click", function(){    
    myLeads.push(inputEl.value)
    console.log(myLeads);
    console.log(myLeads.length);
    lengthLeads = myLeads.length
    render(myLeads)
    inputEl.value = "" //12

    localStorage.setItem("myLeads", JSON.stringify (myLeads)) //18
 
})


