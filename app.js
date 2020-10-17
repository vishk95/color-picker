const colors = ["red", "blue", "green", "#f1256e"];

const btn = document.getElementById("flipButton");
const colorTxt = document.querySelector(".container h2 span");

btn.addEventListener('click', function(){
    const rndmNum = getRandom()
    document.body.style.backgroundColor = colors[rndmNum];
    colorTxt.textContent = colors[rndmNum]
})

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}