// Assignment code here
var lowerCaseArray = Array.from("abcdefghijklmnopqrstuvwxyz");
var upperCaseArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numericArray = Array.from("0123456789");
var specialArray = Array.from("!#$”%&’()*+,-./:;<=>?@[]^_`{|}~");
var passwordLength, randomArrayPassword, randomArray, upperCase, numeric, special;

//Reset code to reset all needed variables back to original values to be able to regenerate a new password
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

  // if to determine if length is between 8 & 128 in length, else it starts the function over
  if (passwordLengthPrompt < 129 && passwordLengthPrompt > 7) {
    passwordLength = passwordLengthPrompt;
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
    // if true then adds the lowercase array to the random array
    randomArray = randomArray.concat(lowerCaseArray);
  }

  // if else to determine if you want to include uppercase letters
  var upperCasePrompt = window.confirm(
    "Would you like to include uppercase letters in this password?"
  );
  if (upperCasePrompt){
    upperCase = true;
    // if true then adds the uppercase array to the random array
    randomArray = randomArray.concat(upperCaseArray);
  } 

  // if else to determine if you want to include numbers
  var numericPrompt = window.confirm(
    "Would you like to include numbers in this password?"
  );
  if (numericPrompt){
    numeric = true;
    // if true then adds the numbers array to the random array
    randomArray = randomArray.concat(numericArray);
  } 

  // if else to determine if you want to include special characters
  var specialPrompt = window.confirm(
    "Would you like to include special characters in this password?"
  );
  if (specialPrompt){
    special = true;
    // if true then adds the special array to the random array
    randomArray = randomArray.concat(specialArray);
  } 

  // if to determine if they chose yes to any one or more of the 4 previous boolean prompts, 
  // else then it requires them to try again by running funciton again
  if (!lowerCasePrompt && !upperCasePrompt && !numericPrompt && !specialPrompt){
    window.alert("You need to include at least one of these types of characters, please try again.");
    prompts();
    reset ();
  } else {
    generatePassword();
  }
};

// to generate password
function generatePassword(){
  //for loop to generate a random character as many times as the password length was chosen earlier
  for (var i = 0; i < passwordLength; i++) {
    var randomIndexNumber = Math.floor(Math.random() * randomArray.length);
    // pulls characters from array that was created based on the choices of types of characters
    randomArrayPassword += randomArray[randomIndexNumber];
  }
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