var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("Random");

console.log(body.backgroundimage);

function randomHex(){


	return '#' + Math.random().toString(16).substring(2,8);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function randomBackground() {
	
	color1.value = randomHex();
	color2.value = randomHex();
	console.log(color1.value);
	console.log(color2.value);

	setGradient();
}


setGradient();




color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomBackground);