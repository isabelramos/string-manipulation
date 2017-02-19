var testString = "";
var textInput = document.getElementById("enter-text");
var showResult = document.getElementById("result");
var button = document.getElementById("submit");


function lettersOnly (clickEvent) {
	var letters = /^[a-zA-Z]+$/;

	if (textInput.value.match(letters)) {
		console.log("blah");
	} else {
		alert("This text field accepts letters only!");
	}
}


// function reversal() {

// }

// function alphabits() {

// }

// function palindrome() {

// }


function pressEnter (event) {
    if (event.keyCode === 13) {
	lettersOnly();
    }
}

button.addEventListener("click", lettersOnly);
textInput.addEventListener("keypress", pressEnter);


		// reversal(testString);
		// alphabits(testString);
		// palindrome(testString);
