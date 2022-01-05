// Assignment Code
var generateBtn = document.querySelector("#generate");
var check=false
var pwdL=0
// Alert message for the user welcoming to the  random password generator
alert("Hello this is your friendly password generator")

// Ask user for their choice of password length between 8-128 characters long
// Computer checks whether it is an integer and in the range of characters stated
// If chosen password length does not fit criteria ask user for a password length again

do{
  let pwdLength=prompt("How long would you like your password (8-128)?")
pwdLength=Number(pwdLength)

if(Number.isInteger(pwdLength)){check=true}
if(pwdLength>=8 && pwdLength<=128){pwdL=pwdLength}
else {check=false}

if (check==false){alert("Please try again, valid input is an integer 8-128")}}
while(check==false) 

// Option of different characters for the user to chose from: lowercase,uppercase,numeric and special
// If user does not chose any characters stated above alert them that they must chose at least one category and ask questions again
var pwdLowercase=""
var pwdUppercase=""
var pwdNumbers=""
var pwdSpecial=""
var userChoice="You have selected "

check=false

do{
pwdLowercase=prompt("Would you like your password to include lowercase yes/no","yes")
if (pwdLowercase=="yes"){userChoice+="lowercase ";check=true}


 pwdUppercase=prompt ("Would you like your password to include uppercase yes/no","yes")
if (pwdUppercase=="yes"){userChoice+=" uppercase"; check=true}


pwdNumbers=prompt ("Would you like your password to include numbers yes/no","yes")
if (pwdNumbers=="yes"){userChoice+=" numbers"; check=true}


 pwdSpecial=prompt ("Would you like your password to include special characters yes/no","yes")
if (pwdSpecial=="yes"){userChoice+=" special characters";check=true}

if(check==false){alert("Please try again, you need at least one character type")}
}while (check==false)

alert(userChoice)



//Array of the characters that can be included in the password, incChars.
let incChars=""
let lowerAlphabet="abcdefghijklmnopqrstuvwxyz"
let upperAlphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers="0123456789"

let specialCharacters="!\"\#$%&\'()*+,-./:;<=>?@[\]^_`{|}~"
if(pwdLowercase=="yes"){incChars+=lowerAlphabet}
if(pwdUppercase=="yes"){incChars+=upperAlphabet}
if(pwdNumbers=="yes"){incChars+=numbers}
if(pwdSpecial=="yes"){incChars+=specialCharacters}

function checkPassword(){
  //test for each character type that was yes if it exists 
}

//generate random integers and use that to find an element of the array
function generatePassword() {
  pwdGen=""
  for (var i = 0; i < pwdL; i++){
    pwdGen+=incChars[Math.floor(Math.random() * incChars.length)]
  }
  return pwdGen
}


// Write password to the #password input
function writePassword() {
  let pwdGen=""
  var password = generatePassword();
  //test what the basic code is doing - once we have a password it will pop up in the box. 
  //var password="abc"
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
