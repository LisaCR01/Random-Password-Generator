// Assignment Code
var generateBtn = document.querySelector("#generate");
alert("Hello this is your friendly password generator")
let pwdLength=prompt("How long would you like your password (8-128)?")
// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //test what the basic code is doing - once we have a password it will pop up in the box. 
  var password="abc"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
