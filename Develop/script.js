// Assignment Code
var generateBtn = document.querySelector("#generate");
var check=false
var pwdL=0
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
if(pwdLength>=8 && pwdLength<=128){alert("length ok");pwdL=pwdLength}
else {alert ("length wrong");check=false}
}
while(check==false)
console.log("pwd "+ pwdL)
let pwdLowercase=prompt("Would you like your password to include lowercase yes/no","yes")
if (pwdLowercase=="yes"){alert("password will include lowercase")}
else {alert ("password will not include lowercase")}

let pwdUppercase=prompt ("Would you like your password to include uppercase yes/no","yes")
if (pwdUppercase=="yes"){alert("password will include uppercase")}
else {alert ("password will not include uppercase")}

let pwdNumbers=prompt ("Would you like your password to include numbers yes/no","yes")
if (pwdNumbers=="yes"){alert("password will include numbers")}
else {alert ("password will not include numbers")}

let pwdSpecial=prompt ("Would you like your password to include special characters yes/no","yes")
if (pwdSpecial=="yes"){alert("password will include special character")}
else {alert ("password will not include special characters")}
//STILL need to put in a check that one of these is a yes. 

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

//generate random integers and use that to find an element of the array


let pwdGen=""
for (let i = 0; i < pwdL; i++){
  pwdGen+=incChars[Math.floor(Math.random() * incChars.length)]
  console.log("watch the password generate "+ pwdGen)
}

incChars[Math.floor(Math.random() * incChars.length)]

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
