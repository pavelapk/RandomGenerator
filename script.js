var minValue = document.getElementById("minValue");
var maxValue = document.getElementById("maxValue");
var generatedNumber = document.getElementById("generatedNumber");
var slider = document.getElementById("slider");
var count = document.getElementById("count");

function countUpdate(){
	count.innerHTML = slider.value + " чисел";
}

function Generate(){
	generatedNumber.innerHTML = null;

	for (var i=0; i<slider.value; i++){
		generatedNumber.innerHTML += Math.floor(Math.random()*(parseInt(maxValue.value)-parseInt(minValue.value)+1))+parseInt(minValue.value) + " ";
	}
}

slider.addEventListener("input", countUpdate);