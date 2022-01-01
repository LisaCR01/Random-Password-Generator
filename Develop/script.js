// Assignment Code
var generateBtn = document.querySelector("#generate");
var check=false
alert("Hello this is your friendly password generator")

// ask for password length
//and check it is 8-128 long, 
// and an integer
//loop until all these conditions are true.

do{
let pwdLength=prompt("How long would you like your password (8-128)?")
pwdLength=Number(pwdLength)

if(Number.isInteger(pwdLength)){alert ("yes integer");check=true}
else {alert("not integer")}
if(pwdLength>=8 && pwdLength<=128){alert("length ok")}
else {alert ("length wrong");check=false}
}
while(check==false)

let pwdLowercase=prompt("Would you like your password to include lowercase yes/no")
if (pwdLowercase=="yes"){alert("password will include lowercase")}
else {alert ("password will not include lowercase")}

let pwdUppercase=prompt ("Would you like your password to include uppercase yes/no")
if (pwdUppercase=="yes"){alert("password will include uppercase")}
else {alert ("password will not include uppercase")}

let pwdNumbers=prompt ("Would you like your password to include numbers yes/no")
if (pwdNumbers=="yes"){alert("password will include numbers")}
else {alert ("password will not include numbers")}

let pwdSpecial=prompt ("Would you like your password to include special characters yes/no")
if (pwdSpecial=="yes"){alert("password will include special character")}
else {alert ("password will not include special characters")}

//we need to create an array of the characters that can be included in the password, incChars.
let incChars=""
let lowerAlphabet="abcdefghijklmnopqrstuvwxyz"
let upperAlphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers="0123456789"
//taken from https://owasp.org/www-community/password-special-characters but removed space from the list
let specialCharacters="!\"\#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"
if(pwdLowercase=="yes"){incChars+=lowerAlphabet}
if(pwdUppercase=="yes"){incChars+=upperAlphabet}
if(pwdNumbers=="yes"){incChars+=numbers}
if(pwdSpecial=="yes"){incChars+=specialCharacters}



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
