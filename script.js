var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = "linear-gradient (to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

var btn = document.createElement("button");
btn.innerText = "Random color";
btn.style.display = "block";
btn.style.margin = "20px auto";
css.appendChild(btn)

btn.addEventListener("click", function() {
	color1.value = "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0,6);
	color2.value = "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0,6);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	btn.innerText = "Random color";
	btn.style.display = "block";
	btn.style.margin = "20px auto";
	css.appendChild(btn)

})


color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)