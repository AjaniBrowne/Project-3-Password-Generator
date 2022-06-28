// Assignment code here
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var temp = [];

function generatePassword()
{
  var pwdLenght = parseInt(window.prompt("Please enter password length between 8-128 characters"));
  if(pwdLenght < 8 || pwdLenght > 128)
  {
    alert("Password length is out of range. Please enter again");
    generatePassword();
  }

  var cUpper = window.confirm("DO you need uppercase letters in your password?");
  var cLower = window.confirm("DO you need lowercase letters in your password?");
  var cSpecial = window.confirm("DO you need special characters in your password?");
  var cNumber = window.confirm("DO you need numbers in your password?");
  var pwdChars = [];

  if(cUpper)
  {
    temp = temp.concat(upperCasedCharacters);
  }

  if(cLower)
  {
    temp = temp.concat(lowerCasedCharacters);
  }

  if(cSpecial)
  {
    temp = temp.concat(specialCharacters);
  }

  if(cNumber)
  {
    temp = temp.concat(numericCharacters);
  }

  for(i=0; i<pwdLenght; i++)
  {
    var char = Math.floor(Math.random() * temp.length);
    pwdChars.push(temp[char]);

  }

  return pwdChars.join('');
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
