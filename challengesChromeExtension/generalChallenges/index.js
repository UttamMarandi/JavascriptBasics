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