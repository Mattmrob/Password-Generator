// Assignment Code
var generateBtn = document.querySelector("#generate");
// ----------
let CharLength = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// ---------

// Password Generating Code Block

function generatePassword(){
 charLength = prompt("Please enter a number for your desired password length between 8 and 126 characters", "8-126");
 
 if (charLength < 8) {
  alert('Your password is too short! Please type a number between 8 and 126');
} else if (charLength > 126) {
  alert('Your password is too large! Please type a number between 8 and 126');
} else {
  console.log(charLength);
}
}
// -------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ---------
