// Assignment code here
var passwordLength;
var lowerCase;
var upperCase;
var numeric;
var special;

var lowerCaseArray []

function prompts (){
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
  } else {
    special = false;
  }
  console.log("Special - " + special);

  // if else to determine if they chose yes to any one or more of the 4 previous boolean prompts, 
  // if no, then it requires them to try again
  if (lowerCasePrompt === false && upperCasePrompt === false && numericPrompt === false && specialPrompt === false){
    window.alert("You need to include one of these types of characters, please try again.");
    prompts();
  } else {
    generatePassword();
  }
};

function generatePassword(){
  console.log ("hello");

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", prompts, writePassword);
