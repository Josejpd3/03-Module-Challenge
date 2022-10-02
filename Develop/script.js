// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  let chars = ""

  let minimum = window.prompt("Minimum Password Length: ")
  let max = window.prompt("Maximum Password Length: ")
  let lower = window.prompt("Inlclude Lowercase? \n (Y) or (N)")
  let upper = window.prompt("Inlclude Uppercase? \n (Y) or (N)")
  let num = window.prompt("Inlclude Numbers? \n (Y) or (N)")
  let special = window.prompt("Inlclude Special Characters? \n (Y) or (N)")


  if(lower == 'Y') {
    lower = "abcdefghijklmnopqrstuvwxyz";
    chars += lower;
  }
  if(upper == 'Y') {
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    chars += upper;
  }
  if(num == 'Y') {
    num = "0123456789";
    chars += num ;
  }
  if(special == 'Y') {
    special = "!@#$%^&*()";
    chars += special;
  }

  if (lower != 'Y' && upper != 'Y' && num != 'Y' && special != 'Y') {
    chars = "abcdefghijklmnopqrstuvwxyz"
  }


  let newpassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

