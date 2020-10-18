const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("flipButton");
const colorTxt = document.querySelector(".container h2 span");

btn.addEventListener('click', function(){
    let rndmColor = "#"

    for (let i=0; i<6; i++){
        rndmColor += hex[getRandom()]
    }

    document.body.style.backgroundColor = rndmColor;
    colorTxt.textContent = rndmColor
})

function getRandom() {
    return Math.floor(Math.random() * hex.length);
}