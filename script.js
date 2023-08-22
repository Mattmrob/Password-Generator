// Assignment Code
var generateBtn = document.querySelector("#generate");
// ----------
let charLength = 0;
let charType = [0, 0, 0, 0];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbers = ['1','2','3','4','5','6','7','8','9','0'];
// slash and brackets need their own variables due to interfering with array structure, they are then listed in array
let slash = '/';
let bracketleft = '[';
let bracketright = ']'
let specialChars = ["!",'"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>',',','?','@',"^","_",'`','{','|','}','~', bracketleft, bracketright, slash];

// let randomonium = 0;
// Chartype 0 = lowercase, 1 = uppercase, 2 = numbers, 3 = special characters
https://stackoverflow.com/questions/20389890/generating-a-random-number-between-1-and-10-java

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
// ---------

// Password Generating Code Block

// function randomizer(){
// int randomNum = randomonium.nextInt((max - min) + 1) + min;
// }

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
