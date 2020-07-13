
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
    passwordText.value = password;

}

function generatePassword() {

    // User chooses Password length
    let userLength = prompt("Choose a length between 8 and 128 characters long.");


    // Error if user chooses incorrect length
    if (userLength < 8 || userLength > 128 || isNaN(userLength)) {
        alert("Not a valid password length. Please click Generate Password to try again.");
        return;
    }


    let userLowerCase = confirm("Chooose Lower Case letters in your password? Ok for Yes and Cancel for No.");
    let userUpperCase = confirm("Choose Upper Case letters in your password? Ok for Yes and Cancel for No.");
    let userNumbers = confirm("Chooose Numbers in your password? Ok for Yes and Cancel for No.");
    let userSymbols = confirm("Choose Symblos in your password? Ok for Yes and Cancel for No.");

    //Password Strings
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!*$%&#@+?:;()^";
    let pwString = "";

    if (userLowerCase) {
        pwString = pwString + lowerCase;
    }

    if (userUpperCase) {
        pwString = pwString + upperCase;
    }

    if (userNumbers) {
        pwString = pwString + numbers;
    }

    if (userSymbols) {
        pwString = pwString + symbols;
    }

    if (pwString === "") {
        alert("Not enough characters. Please click Generate Password to try again.");
        return;
    }

    let userPassword = "";
    for (let i = 0; i < userLength; i++) {
        userPassword += pwString.charAt(Math.floor(Math.random() * pwString.length));
    }

    return userPassword;
}

generateBtn.addEventListener("click", writePassword);

function copyPassword() {

    var copyText = document.getElementById("password");

    copyText.select();

    document.execCommand("copy");

    alert("Copied the password: " + copyText.value);
}