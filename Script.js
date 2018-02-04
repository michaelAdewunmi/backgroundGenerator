var body = document.getElementById("bg_generator_body")
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var h3 = document.querySelector("h3");

function addGradient() {

    h3.innerText = "Your gradient color: \n First_color: " + color1.value + "\n Second_color: " + color2.value + "!";
    return body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}


color1.addEventListener("input", addGradient);


color2.addEventListener("input", addGradient);

