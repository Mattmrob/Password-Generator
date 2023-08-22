// Assignment Code
var generateBtn = document.querySelector("#generate");
// ----------
let charLength = 0;
var charType = [0, 0, 0, 0];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// ---------

// Password Generating Code Block

function charOption(){
  charType[0] = confirm("Would you like into include Lowercase Letters?");
  charType[1] = confirm("Would you like into include Uppercase Letters?");
  charType[2] = confirm("Would you like into include Numbers?");
  charType[3] = confirm("Would you like into include Special Characters?");
}

function generatePassword(){
 charLength = prompt("Please enter a number for your desired password length between 8 and 126 characters", "8-126");
 
 if (charLength < 8) {
  alert('Your password is too short! Please type a number between 8 and 126');
} else if (charLength > 126) {
  alert('Your password is too large! Please type a number between 8 and 126');
} else {
  charOption();
  console.log(charType);
}
}
// -------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ---------
