const colors = ["red", "blue", "green", "#f1256e"];

const btn = document.getElementById("flipButton");
const colorTxt = document.querySelector(".container h2 span");

btn.addEventListener('click', function(){
    document.body.style.backgroundColor = colors[0];
    colorTxt.textContent = colors[0]
})