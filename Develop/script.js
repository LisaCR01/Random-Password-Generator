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

if(Number.isInteger(pwdLength)){check=true}
if(pwdLength>=8 && pwdLength<=128){pwdL=pwdLength}
else {check=false}

if (check==false){alert("Please try again, valid input is an integer 8-128")}}
while(check==false) 

var pwdLowercase=""
var pwdUppercase=""
var pwdNumbers=""
var pwdSpecial=""
var userChoice="You have selected "
//resetting our check value to false.
check=false
//loop is to test we have one type of character at least
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

function checkPassword(){
  //test for each character type that was yes if it exists 
}

//generate random integers and use that to find an element of the array
function generatePassword() {
  pwdGen=""
  for (let i = 0; i < pwdL; i++){
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
