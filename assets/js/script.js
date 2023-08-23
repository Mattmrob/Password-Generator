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

// CHARACTER SELECTION AND PASSWORD GENERATION
// charOption first runs a series of confirms to determine which characters you would like to include, each confirm t/f result is stored in an array
// The values of the charType array should be associated with the following character types: 0 = lowercase, 1 = uppercase, 2 = numbers, 3 = specialcharacters
// After selection, several if statements run, if a chartype is set to false, it will change the corresponding char type to an empty value
// Then, all the chartypes are concat into the addition variable using the passwordmessage placeholder variable, if a type was unselected, it adds an empty space from the if statements
// Finally, addition is .join 'd by an empty space, which sets the divider between each item in the addition array to an empty space (not a spacebar) - this is then all assigned to chosenCharacters

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
  // Then an if statement runs in the for loop which determines is an undefined or null option is chosen, if so, it is not recorded and a new roll is performed and charlength is increase by 1 to meet the user desired length.
  // If the randomValue is not undefined, it is added to yourPassword, the 'for loop' repeats, and it continues until enough characters are chosen to match the desired user input.

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

// Once finished, yourPassword, which is equal to the text contents of #password, will appear on the webpage!


// EVENT LISTENER - activates main code block when clicking on #password button
generateBtn.addEventListener("click", writePassword);
// ---------