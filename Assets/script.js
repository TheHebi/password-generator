// pop ups = length (total characters used), uppercase (y/n), lowercase (y/n), numbers (y/n), special characters (y/n)
// after pop ups are finished, clicking "Generate Password" button will print a randomized password in the box displaying "Your Secure Password"
// Assignment Code
var generateBtn = document.querySelector("#generate");

// // password length pop up
let passLength = prompt("How many characters do you want?");

// // setting a minimum and maximum character limit for password length
// if ((passLength < 10)) {
//   alert("Password must be at least 10 characters long");
//   passLength = prompt("How many Characters do you want?")
// }else if (passLength > 150) {
//   alert("Password must be less than 150 characters long");
//   passLength = prompt("How many characters do you want?");
// }else {
//   alert(`You have chosen a ${passLength} long password`)
// }

// pop up windows with (y/n) answers
let upper = window.confirm("Use Uppercase Letters?");
let lower = window.confirm("Use Lowercase Letters?");
let numbs = window.confirm("Use Numbers?");
let specs = window.confirm("Use Special Characters?");

//character pool for password generation
let secure = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let letters = "abcdefghijklmnopqrstuvwxyz"
let capLetters = "ABCDEFGHIJKLOMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let specialChars = "!@#$%^&*()"
let result = "";

// used to check true/false values of confirm pop ups
// console.log(upper)
// console.log(lower)
// console.log(numbs)
// console.log(specs)

// password generation function
function generatePassword() {
  // return "123" / line added to check script.js linked to html correctly
  if (upper && lower && numbs && specs){
    for (let i = 0; i < passLength; i++) {
      result += secure.charAt(Math.floor(Math.random() * security.length));
    }
    return result;
  }else if (!upper && !lower && !numbs && !specs){
    result += "No password variables selected"
    return result;
  }
  // testing function to pull random character from pool / it works
  // for (let i = 0; i < passLength; i++) {
  //   result += secure.charAt(Math.floor(Math.random() * security.length));
  // }
  // return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
