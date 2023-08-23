// Assignment Code
var generateBtn = document.querySelector("#generate");
// ----------

// charLength is how long the desired password is and charType is an array for the four different character options
let charLength = 0;
let charType = [0, 0, 0, 0];

// CHARACTER OPTIONS --------
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbers = ['1','2','3','4','5','6','7','8','9','0'];
let slash = '/';
let bracketleft = '[';
let bracketright = ']';
let specialChars = ["!",'"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>',',','?','@',"^","_",'`','{','|','}','~', bracketleft, bracketright, slash];
// slash and both brackets interfere with code when written in the array, so I created their own variables and added the variables to the array instead

// passWordMessage is an empty array that acts as a base for the rediculously long if statement to concat (add) selected characters to
let passWordMessage = [""]
// chosenCharacters is where the concat'd passWordMessage is stored
let chosenCharacters = "";
// yourPassword is equal to the text content of #password
let yourPassword = '';
// this randomizer is used to generate a random index number in a for loop, which picks a char at random and adds it to yourPassword
let randomvalue = Math.floor(Math.random() * charLength) + 1;

// Password Writer Start ------
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = yourPassword;
}
// passwordText selects #password which has a text value of yourPassword
// writePassword is attached to an event listener

// https://medium.com/coding-at-dawn/how-to-convert-an-array-to-a-string-with-commas-in-javascript-79e212506c2

// https://www.w3schools.com/java/java_math.asp

// PASSWORD GENERATOR ----- !!
// This is the main function that runs when the user clicks on the generate password button
// The function starts by resetting all values to their original states, then starts a prompt where user can enter their desired length
// length prompt returns errors for if value is not a number, too short, or too long
// If the entered value is as desired, run function charOption

function generatePassword(){

  lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  numbers = ['1','2','3','4','5','6','7','8','9','0'];
  specialChars = ["!",'"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>',',','?','@',"^","_",'`','{','|','}','~', bracketleft, bracketright, slash];
  yourPassword = '';
  charLength = '';
  
   charLength = prompt("Please enter a number for your desired password length between 8 and 128 characters");
   
   if (isNaN(charLength)) {
    alert('Please enter a valid number!')
   } else if (charLength < 8) {
    alert('Your password is too short! Please type a number between 8 and 128');
  } else if (charLength > 128) {
    alert('Your password is too large! Please type a number between 8 and 128');
  } else {
    charOption();
  }
}

// Array Combination function - uses concat to combine selected options

function combineArrays(a,b) {
  chosenCharacters = a.concat(b);
}

// UNHOLY IF STATEMENT BLOCK --------------------------------
// To the viewer looking at this code, please understand that I am aware there is most certainly, PROBABLY, a better way to do this, but this is how it ended it!
// If you have any feedbackon how this could be done better, please let me know! There is no way this is efficient.

// HOW IT WORKS: User receieves 4 confirms in order, each confirm is stored to an array of charType. Depending on selection, each array item becomes true or false.
// If statements then check which ones are true and which ones are false FOR EVERY POSSIBLE COMBINATION OF THE 4 OPTIONS, each array item represents a character option.
// Depending on which options were true (selected), passWordMessage receives the selected string arrays concat'ted to itself.
// Those concat'ted items are then saved to chosenCharacters, and then .join'ed by an empty space, which replaces the commas between each array item with a void/empty non-space
// There is also an error message if they say no to all 4 confirms

function charOption(){
  charType[0] = confirm("Would you like into include Lowercase Letters?");
  charType[1] = confirm("Would you like into include Uppercase Letters?");
  charType[2] = confirm("Would you like into include Numbers?");
  charType[3] = confirm("Would you like into include Special Characters?");

  if (!charType[0]) {
    lowerCase = "";
  }

  if (!charType[1]) {
    upperCase = "";
  }

  if (!charType[2]) {
    numbers = "";
  }

  if (!charType[3]) {
    specialChars = "";
  }

  let addition = passWordMessage.concat(lowerCase, upperCase, numbers, specialChars)
  chosenCharacters = addition.join('');

    // FOR BLOCK 
  // After chosenCharacters have been decided, a for loop then uses a Math.random equation to generate a number between the user selected charLength and the minimum value, then stored to randomValue.
  // randomValue is put in the index of chosenCharacters, which will randomly select an item from the chosenCharacters array
  // Then an if statement runs in the for loop which determines is an undefined option is chosen, if so, it is not recorded and a new roll is performed.
  // If the randomValue is not undefined, then it is added to yourPassword, the for loop repeats, and it continues until enough characters are chosen to match the desired user input.

  for (let i = 0; i < charLength; i++) {
    randomValue = Math.floor(Math.random() * chosenCharacters.length);
    console.log(chosenCharacters[randomValue]);
    
    if (chosenCharacters[randomValue] == undefined || chosenCharacters[randomValue] == null) {
      charLength = charLength + 1;
    } else {
      yourPassword = yourPassword + chosenCharacters[randomValue];
    }
   }

   console.log(yourPassword);
}

  // // all selected
  // if (charType[0] && charType[1] && charType[2] && charType[3]) {
  //   chosenCharacters = passWordMessage.concat(lowerCase, upperCase, numbers, specialChars);
  //   chosenCharacters.join("");
  // } 
  
  // // 3 selected
  //   else if (charType[0] && charType[1] && charType[2]) {
  //   chosenCharacters = passWordMessage.concat(lowerCase, upperCase, numbers);
  //   chosenCharacters.join("");
  // } else if (charType[0] && charType[1] && charType[3]) {
  //   chosenCharacters = passWordMessage.concat(lowerCase, upperCase, specialChars);
  //   chosenCharacters.join("");
  // } else if (charType[0] && charType[2] && charType[3]) {
  //   chosenCharacters = passWordMessage.concat(lowerCase, numbers, specialChars);
  //   chosenCharacters.join("");
  // } else if (charType[1] && charType[2] && charType[3]) {
  //   chosenCharacters = passWordMessage.concat(upperCase, numbers, specialChars);
  //   chosenCharacters.join("");
  // } 
  
  // // 2 selected
  //   else if (charType[0] && charType[1]) {
  //   chosenCharacters = passWordMessage.concat(lowerCase, upperCase);
  //   chosenCharacters.join("");
  // } else if (charType[0] && charType[2]) {
  //   chosenCharacters = passWordMessage.concat(lowerCase, upperCase, specialChars);
  //   chosenCharacters.join("");
  // } else if (charType[0] && charType[3]) {
  //   chosenCharacters = passWordMessage.concat(lowerCase, specialChars);
  //   chosenCharacters.join("");
  // } else if (charType[1] && charType[2]) {
  //   chosenCharacters = passWordMessage.concat(upperCase, numbers,);
  //   chosenCharacters.join("");
  // } else if (charType[1] && charType[3]) {
  //   chosenCharacters = passWordMessage.concat(upperCase, specialChars);
  //   chosenCharacters.join("");
  // } else if (charType[2] && charType[3]) {
  //   chosenCharacters = passWordMessage.concat(numbers, specialChars);
  //   chosenCharacters.join("");
  // } 
  
  // // 1 selected
  //   else if (charType[0]) {
  //   chosenCharacters = passWordMessage.concat(lowerCase);
  //   chosenCharacters.join("");
  // } else if (charType[1]) {
  //   chosenCharacters = passWordMessage.concat(upperCase);
  //   chosenCharacters.join("");
  // } else if (charType[2]) {
  //   chosenCharacters = passWordMessage.concat(numbers);
  //   chosenCharacters.join("");
  // } else if (charType[3]) {
  //   chosenCharacters = passWordMessage.concat(specialChars);
  //   chosenCharacters.join("");
  // } 

  // // error message
  //    else {
  //     alert('Please select at least one option!');
  // }

// Once finished, yourPassword, which is equal to the text contents of #password, will appear on the webpage!
// -------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ---------
