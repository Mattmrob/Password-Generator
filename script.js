// Assignment Code
var generateBtn = document.querySelector("#generate");
// 
var CharLength = 0;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// 

function generatePassword(){
 charLength = prompt("Please enter a number for your desired password length between 8 and 126 characters", "8-126");
 
 if (charLength < 8) {
  console.log('Sorry, your password is too short!');
} else {
  console.log(charLength);
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// 
