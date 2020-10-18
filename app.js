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

const burger = document.getElementsByClassName("burger")[0]
const navLinks = document.getElementsByClassName("nav-links")[0]
const nav = document.getElementsByTagName("nav")[0]
const main = document.getElementsByTagName("main")[0]

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    nav.classList.toggle('active')
    main.classList.toggle('active')
})