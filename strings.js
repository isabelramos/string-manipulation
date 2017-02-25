var textInput = document.getElementById("enter-text");
var showResult = document.getElementById("result");
var button = document.getElementById("submit");

function reversal () {
	var textInput = document.getElementById("enter-text").value;
	var backwardString = textInput.split("").reverse().join("");
	showResult.innerHTML += (backwardString + "<br><br>");
}

function alphabits () {
	var textInput = document.getElementById("enter-text").value;
	var alphabeticalOrder = textInput.split("").sort().join("");
	showResult.innerHTML += (alphabeticalOrder  + "<br><br>");
}

function palindrome () {
	var textInput = document.getElementById("enter-text").value;
	var isItAPalindrome = textInput.split("").reverse().join("");
	if (textInput === isItAPalindrome) {
		showResult.innerHTML += ("Your text is a palindrome!" + "<br><br>");
	} else {
		showResult.innerHTML += ("Your text is not a palindrome. :/" + "<br><br>");
	}
}

function lettersOnly (clickEvent) {
	var textInput = document.getElementById("enter-text").value;
	var letters = /^[a-zA-Z]+$/;
	if (textInput.match(letters)) {
		reversal();
		alphabits();
		palindrome();
	} else {
		alert("This text field accepts letters only!");
	}
}

function pressEnter (event) {
    if (event.keyCode === 13) {
	lettersOnly();
    }
}

button.addEventListener("click", lettersOnly);
textInput.addEventListener("keypress", pressEnter);
