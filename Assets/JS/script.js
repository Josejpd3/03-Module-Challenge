// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  let chars = ""
  let newpassword = "";

// Prompts
  let minimum = window.prompt("Minimum Password Length: ")
  let max = window.prompt("Maximum Password Length: ")
  let lower = window.prompt("Inlclude Lowercase? \n (Y) for yes")
  let upper = window.prompt("Inlclude Uppercase? \n (Y) for yes")
  let num = window.prompt("Inlclude Numbers? \n (Y) for yes")
  let special = window.prompt("Inlclude Special Characters? \n (Y) for yes")

// converts the inputed string data type into a number data type
  minimum = minimum * 1;
  max = max * 1;


  // Selects which characters would be in the password
  if ((lower != "Y") && (upper != "Y") && (num != "Y") && (special != "Y")) {
    chars = "abcdefghijklmnopqrstuvwxyz"
  }
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



// random password length between the inputs given;
  let passwordLength = Math.floor(Math.random() * (max - minimum)) + minimum;


// random password
  for (let i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    newpassword += chars.substring(randomNumber, randomNumber +1)

  }
// directly inserts the password into the page
  document.getElementById("password").value = newpassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

