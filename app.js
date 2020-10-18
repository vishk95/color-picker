const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("flipButton");
const colorTxt = document.querySelector(".container h2 span");
let finalHex;

btn.addEventListener('click', function(){
    finalHex = randomHex();
    document.body.style.backgroundColor = finalHex;
    colorTxt.textContent = finalHex;
})

function randomHex(){
    let rndmColor = "#"
    for (let i=0; i<6; i++){
        rndmColor += hex[getRandom()]
    }
    return rndmColor;
}

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

function copyHex() {

    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);

    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = finalHex;
    console.log(document.getElementById("dummy_id").value)
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    alert("Copied Hex: " + colorTxt.textContent)
}