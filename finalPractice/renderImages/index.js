// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const containerImg = document.getElementById("container")
console.log(containerImg);

function imageRender(imgar){
    let renImg = ""
    for(let i=0; i< imgar.length; i++) {
     renImg   += `<img class="team-img" src="${imgar[i]}">`
    }
    containerImg.innerHTML = renImg
}

imageRender(imgs)