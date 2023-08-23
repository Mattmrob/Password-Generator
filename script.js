// Assignment Code
var generateBtn = document.querySelector("#generate");
// ----------
let charLength = 0;
let charType = [0, 0, 0, 0];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbers = ['1','2','3','4','5','6','7','8','9','0'];
const passWordMessage = ["Your password is: "]
// slash and brackets need their own variables due to interfering with array structure, they are then listed in array
let slash = '/';
let bracketleft = '[';
let bracketright = ']'
let specialChars = ["!",'"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>',',','?','@',"^","_",'`','{','|','}','~', bracketleft, bracketright, slash];
let chosenCharacters = "";
let randomvalue = Math.floor(Math.random() * charLength) + 1;

// let randomonium = 0;
// Chartype 0 = lowercase, 1 = uppercase, 2 = numbers, 3 = special characters
https://stackoverflow.com/questions/20389890/generating-a-random-number-between-1-and-10-java

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function randomonium() {
  Math.floor(Math.random() * charLength) + 1;
}
// ---------

// Password Generating Code Block

// function generation() {

//  chosenCharacters = lowerCase.concat(upperCase, numbers, specialChars);
//  chosenCharacters.join("");
//  charMax = chosenCharacters.length;

//  for (let i = 0; i < charLength; i++) {
//   console.log(chosenCharacters[i]);
//  }
// }

// https://medium.com/coding-at-dawn/how-to-convert-an-array-to-a-string-with-commas-in-javascript-79e212506c2

// https://www.w3schools.com/java/java_math.asp

// TYPE SELECTION

function combineArrays(a,b) {
  chosenCharacters = a.concat(b);
}

function charOption(){
  charType[0] = confirm("Would you like into include Lowercase Letters?");
  charType[1] = confirm("Would you like into include Uppercase Letters?");
  charType[2] = confirm("Would you like into include Numbers?");
  charType[3] = confirm("Would you like into include Special Characters?");

  // all selected
  if (charType[0] && charType[1] && charType[2] && charType[3]) {
    chosenCharacters = passWordMessage.concat(lowerCase, upperCase, numbers, specialChars);
    chosenCharacters.join("");
  } 
  
  // 3 selected
    else if (charType[0] && charType[1] && charType[2]) {
    chosenCharacters = passWordMessage.concat(lowerCase, upperCase, numbers);
    chosenCharacters.join("");
  } else if (charType[0] && charType[1] && charType[3]) {
    chosenCharacters = passWordMessage.concat(lowerCase, upperCase, specialChars);
    chosenCharacters.join("");
  } else if (charType[0] && charType[2] && charType[3]) {
    chosenCharacters = passWordMessage.concat(lowerCase, numbers, specialChars);
    chosenCharacters.join("");
  } else if (charType[1] && charType[2] && charType[3]) {
    chosenCharacters = passWordMessage.concat(upperCase, numbers, specialChars);
    chosenCharacters.join("");
  } 
  
  // 2 selected
    else if (charType[0] && charType[1]) {
    chosenCharacters = passWordMessage.concat(lowerCase, upperCase);
    chosenCharacters.join("");
  } else if (charType[0] && charType[2]) {
    chosenCharacters = passWordMessage.concat(lowerCase, upperCase, specialChars);
    chosenCharacters.join("");
  } else if (charType[0] && charType[3]) {
    chosenCharacters = passWordMessage.concat(lowerCase, specialChars);
    chosenCharacters.join("");
  } else if (charType[1] && charType[2]) {
    chosenCharacters = passWordMessage.concat(upperCase, numbers,);
    chosenCharacters.join("");
  } else if (charType[1] && charType[3]) {
    chosenCharacters = passWordMessage.concat(upperCase, specialChars);
    chosenCharacters.join("");
  } else if (charType[2] && charType[3]) {
    chosenCharacters = passWordMessage.concat(numbers, specialChars);
    chosenCharacters.join("");
  } 
  
  // 1 selected
    else if (charType[0]) {
    chosenCharacters = passWordMessage.concat(lowerCase);
    chosenCharacters.join("");
  } else if (charType[1]) {
    chosenCharacters = passWordMessage.concat(upperCase);
    chosenCharacters.join("");
  } else if (charType[2]) {
    chosenCharacters = passWordMessage.concat(numbers);
    chosenCharacters.join("");
  } else if (charType[3]) {
    chosenCharacters = passWordMessage.concat(specialChars);
    chosenCharacters.join("");
  } 

  // error message
     else {
      alert('Please select at least one option!');
  }

  for (let i = 0; i < charLength; i++) {
    randomvalue = Math.floor(Math.random() * chosenCharacters.length)+1;
    console.log(chosenCharacters[randomvalue]);
   }
}

function generatePassword(){

lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
numbers = ['1','2','3','4','5','6','7','8','9','0'];
specialChars = ["!",'"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>',',','?','@',"^","_",'`','{','|','}','~', bracketleft, bracketright, slash];

 charLength = prompt("Please enter a number for your desired password length between 8 and 126 characters", "8-126");
 
 if (charLength < 8) {
  alert('Your password is too short! Please type a number between 8 and 126');
} else if (charLength > 126) {
  alert('Your password is too large! Please type a number between 8 and 126');
} else {
  charOption();
  // generation();
}
}
// -------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ---------
