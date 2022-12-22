// Array of special chracters ti ne included in passwpord
var specialCharacters = [
 '!',
 '@',
 '#',
 '$',
 '%',
 '^',
 '&',
 '*',
 '(',
 ')',
 '-',
 '_',
 '=',
 '+',
 '`',
 '~',
 '[',
 '{',
 '}',
 ']',
 ':',
 '?',
 '/',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '8', '9',]

// Array of lowerCase characters to be included in password
var lowerCaseCharacters = [
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
];

// Array of upperCase characters to be included in password
var upperCase = [
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





// Assignment code here
var generateBtn = document.querySelector("#generate");


// Values for characters in password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lowerCase ="abcdefghijklmnopqrstuvwxyz".split('');
var numbers = "123456789".split('');
var symbols= "!@#$%^&*()_+".split('');

//To render in the browser - convert the unicode
var characterStringToArray = function (str) {
  split = str.split( "upperCase, lowerCase, numbers, symbols" );
  arr = [];
  for (var i=0; i<split.length; i++) {
    char = split[i]
    if (char !== "") {
      arr.push(char);
    }
  }
  return arr;
};


function writePassword() {
  // variables to hold password values
  var almostReady = [];
  var nowReady = "";
  // this var will hold the desired password length
  var length = prompt("How long would you like your password to be?\n8-128");
  if(length < 8 || length > 128) {
    alert("Your password must be between 8-128 characters")
    writePassword()
  } else {
    // if is good, ask if the user would like included in password, in the statements below
    if(confirm("Would you like uppercase letters in your password?")) {
      almostReady = almostReady.concat(upperCase);
    }
    if(confirm("Would you like lowercase letters in your password?")){
      almostReady = almostReady.concat(lowerCase);
    }
    if(confirm("Would you like numbers in your password?")){
      almostReady = almostReady.concat(numbers);
    }
    if(confirm("Would you like symbols to be in your password?")){
      almostReady = almostReady.concat(symbols);
    }
    
    if(almostReady.length === 0) {
      alert("You must have at least one character type in your password");
      writePassword()
      // outcome here
    } else {
      for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * almostReady.length);
        nowReady += almostReady[random]
      }
    }
    // Pass the password into the element's text area
    document.getElementById("password").innerHTML = nowReady
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
