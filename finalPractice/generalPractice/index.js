// SETTING THE STAGE
//1.,Use of let and const and temlate literals

console.log(" Use of let and const and temlate literals");

const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    
    console.log(`${player} got ${points} points and won the ${game} game!`);
} else {
   
    console.log(`The winner is ${opponent}! ${player} lost the game`);
}

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes


//2. Log out parameters of an array

console.log("Log out parameters of an array");

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to clean code"]

function singleCourse( course ) {
    for(let i=0; i<course.length; i++){
        console.log(course[i]);
    }
}
singleCourse(myCourses)

//3. Save to localstorage
console.log("Save to localstorage");

let num = 2;

localStorage.setItem("numValue" , num)


console.log(localStorage.getItem("numValue"));

//4. Sentence generartor : undestood the problem wrong , but this is one implementation(not so dynamic)

let stringdec = [
    "largest countries",
    "best fruits"
]
let arrayObject = {
    country : ["China","India", "USA"],
    fruits : ["Apples", "Bananas"]
}

function generateSentence(desc, arr) {
    console.log(`The ${arr.country.length } ${desc[0]} are ${arr.country} `)
    console.log(`The ${arr.fruits.length } ${desc[1]} are ${arr.fruits} `)
}

generateSentence (stringdec,arrayObject)

//5. Doing 4 again

function generateSentenceR(desc, arr) {
    let generateString = `The ${arr.length} ${desc} are`

    const lastIndex = arr.length -1 //to remove last comma
    for(let i=0; i<arr.length; i++){
        if(i === lastIndex) {
            generateString += arr[i]
        }
        else{
            generateString += arr[i] + " ,"
        }
       
    }
    return generateString
}

sentenceR = generateSentenceR("largest countries", ["China", "India", "USA"])

console.log(sentenceR);

