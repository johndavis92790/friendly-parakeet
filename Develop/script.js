// Assignment code here
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "#", "$", "”", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordLength, randomArrayPassword, randomArray, upperCase, numeric, special;

function reset () {
  lowerCase = false;
  upperCase = false;
  numeric = false;
  special = false;
  passwordLength = 0;
  randomArray = [];
  randomArrayPassword = [];
}

function prompts (){
  reset ();
  var passwordLengthPrompt = window.prompt(
    "How many characters would you like in this password?"
  );

  // convert answer from prompt to an actual number
  passwordLengthPrompt = parseInt(passwordLengthPrompt);

  // if else to determine if length is between 8 & 128 in length
  if (passwordLengthPrompt < 129 && passwordLengthPrompt > 7) {
    passwordLength = passwordLengthPrompt;
    console.log("Password length - " + passwordLength);
  } else {
    window.alert("You did not pick a valid option. Try again.");
    prompts();
  }

  // if else to determine if you want to include lowercase letters
  var lowerCasePrompt = window.confirm(
    "Would you like to include lowercase letters in this password?"
  );
  if (lowerCasePrompt){
    lowerCase = true;
    randomArray = randomArray.concat(lowerCaseArray);
  } else {
    lowerCase = false;
  }
  console.log("Lowercase - " + lowerCase);

  // if else to determine if you want to include uppercase letters
  var upperCasePrompt = window.confirm(
    "Would you like to include uppercase letters in this password?"
  );
  if (upperCasePrompt){
    upperCase = true;
    randomArray = randomArray.concat(upperCaseArray);
  } else {
    upperCase = false;
  }
  console.log("Uppercase - " + upperCase);

  // if else to determine if you want to include numbers
  var numericPrompt = window.confirm(
    "Would you like to include numbers in this password?"
  );
  if (numericPrompt){
    numeric = true;
    randomArray = randomArray.concat(numericArray);
  } else {
    numeric = false;
  }
  console.log("Numeric - " + numeric);

  // if else to determine if you want to include special characters
  var specialPrompt = window.confirm(
    "Would you like to include special characters in this password?"
  );
  if (specialPrompt){
    special = true;
    randomArray = randomArray.concat(specialArray);
  } else {
    special = false;
  }
  console.log("Special - " + special);

  // if else to determine if they chose yes to any one or more of the 4 previous boolean prompts, 
  // if no, then it requires them to try again
  if (lowerCasePrompt === false && upperCasePrompt === false && numericPrompt === false && specialPrompt === false){
    window.alert("You need to include at least one of these types of characters, please try again.");
    prompts();
  } else {
    generatePassword();
  }
};

function generatePassword(){

  for (var i = 0; i < passwordLength; i++) {
    var randomIndexNumber = Math.floor(Math.random() * randomArray.length);
    randomArrayPassword += randomArray[randomIndexNumber];
  }
  console.log(randomArrayPassword);
  writePassword(randomArrayPassword);
  reset ();
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(randomArrayPassword) {
  var passwordText = document.querySelector("#password");
  passwordText.value = randomArrayPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts, writePassword);
