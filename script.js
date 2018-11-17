var minValue;
var maxValue;
var minValueInput = document.getElementById("minValue");
var maxValueInput = document.getElementById("maxValue");
updateMin();
updateMax();
minValueInput.addEventListener("keyup",updateMin);
maxValueInput.addEventListener("keyup",updateMax);

var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", generate);
var generatedNumber = document.getElementById("generatedNumber");;


var amountOfGeneration;

var slider = document.getElementById("slider");
var sliderValue = document.getElementById("sliderValue");

slider.addEventListener("mouseup", updateAmount);

function updateAmount(){
	amountOfGeneration = slider.value;
	sliderValue.innerHTML = amountOfGeneration + " чисел";
	//alert(amountOfGeneration);
}

function updateMin(){
	minValue = minValueInput.value;
}
function updateMax(){
	maxValue = maxValueInput.value;
}

function generate(){
	var outputString="";
	for (var i=0; i<amountOfGeneration; i++){
		var gen = parseInt(Math.random() * (maxValue-minValue+1));
		gen+=parseInt(minValue);
		outputString=outputString + " " + gen;
	}
	generatedNumber.innerHTML=outputString;
}