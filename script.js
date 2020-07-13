
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Function to generate password based in user inputs
function generatePassword() {

  // prompt user for password length
  let userLength = prompt("Choose a length between 8 and 128 characters long.");
  