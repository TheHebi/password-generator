// pop ups = length (total characters used), uppercase (y/n), lowercase (y/n), numbers (y/n), special characters (y/n)
// after pop ups are finished, clicking "Generate Password" button will print a randomized password in the box displaying "Your Secure Password"
// Assignment Code
var generateBtn = document.querySelector("#generate");
// password length pop up
var passLength = prompt("How many characters do you want?")

function generatePassword(){
  // return "123" / line added to check script.js linked to html correctly
}

// pop up windows with (y/n) answers
alert("Use Uppercase Letters?")
window.confirm("Use Lowercase Letters?")
window.confirm("Use Numbers?")
window.confirm("Use Special Characters?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
