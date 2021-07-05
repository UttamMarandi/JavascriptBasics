const playerName = "Per"
let credits = 45

//1.Change variable to type to let and const according to needs

const basePrice1 = 528
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"


shippingCost = 15
shippingTime = "7-14 days"

const fullPrice = basePrice1 - discount + shippingCost

console.log("Total Price: "+ fullPrice);

//2. Use .innerHtml to render a buy button inside div container

const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy2()'> Buy! </button>"

//3. Render "Thankyou for buying" inside same container when buy button is clicked

function buy2() {
    container.innerHTML += "<p>Thankyou for buying</p>"
}


//4. Template strings
//5. make sender "uttam" dynamic

console.log("Template strings");

const recipient = "james"
const sender = "Uttam"//5
const email = `hey ${recipient}!
How is it going? Cheers
${sender}  
` 

console.log(email);

// 6.Json.parse & JSON.string()

let myLeads = `["www.awesomelead.com"]`
console.log(myLeads);

myLeads =  JSON.parse(myLeads)

console.log(typeof myLeads);

myLeads.push("Hello There")

console.log(myLeads);

myLeads = JSON.stringify(myLeads);
 console.log(typeof myLeads);

 //7. Truthy and falsy statement

 console.log("truthy and falsy statements");

 let credits7 = 0

 if (credits7 > 0) {
     console.log("Let's Play");

 }
 else {
     console.log("Sorry , Not enough credit");
 }
 
 //8.null vs undefined
 console.log("null vs undefined");

 let currentViewers = null
 currentViewers =  ["jane", "nick"]

 if (currentViewers) {

    console.log("we have viewers");
 }
 
 let currentViewers5
 console.log(currentViewers5); //rwturns undefined

 //9. Check true or false

 console.log("Check true or false");


 console.log(Boolean("leo"));

 //10 . Function Parameters

 const welcomeEl10 = document.getElementById("welcome-el")



 function greetUser(name , greeting, emoji) {
     welcomeEl10.innerHTML = ` ${greeting} ! ${name} ${emoji}`
 }

 greetUser("Uttam" , "Hola", "🍕")

 
 //11. Practice function parameters : create add() function 

 console.log("Practice function parameters : create add() function ");
 function add(num1 , num2) {
    let total11 = num1 + num2
    return total11
 }

 console.log(add(3,4));
 console.log(add(9,102));

 //12. Arguments & Parameters :- Arguments are variables that are used while calling the function and parameters are variables that are used while defining the function 

 //13. Arrays as parameters
console.log("Arrays as parameters");

 let values13 = [4,0,1,2]

 function returnFirst(array13) {
     return array13[0]
 }

 console.log(returnFirst(values13));
