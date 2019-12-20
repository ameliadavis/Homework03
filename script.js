// Assignment Code
var generateBtn = document.querySelector("#generate");


// starting here are arrays for the 4 different types of Characters
var alphabetLowerCharacters = "abcdefghijklmnopqrstuvwxyz ".split("");
var alphabetUppperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var numericCharacters = "0123456789 ".split("");
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" .split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");// this sets the password we generate on the page

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER




// set the variable for the body 
// var body = document.body;

// //Create all the elements of HTML 
// var h1El = document.createElement("h1");
// var hrEl = document.createElement("hr");
// var formEl = document.createElement("form");
// var buttonElGen = document.createElement("button");
// var buttonElCopy = document.createElement("button");
// var containerEl = document.createElement("container-lg");
// var passwordEl = document.createElement("div");
// var buttonWrapperEl = document.createElement ("row");
// var buttonGenWrapperEl = document.createElement ("col-3");
// var buttonCopyWrapperEl = document.createElement ("col-3");
// var h2El = document.createElement("h2");

// // Set the text content of relevant elements
// h1El.textContent = "Generate a Password";
// buttonElGen.textContent = "Generate Password";
// buttonElCopy.textContent = "Copy to Clipboard";

// // Style all of our elements
// h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// containerEl.setAttribute("style", "margin:500px; width:80%; text-align:center;");
// passwordEl.setAttribute("style", "margin;500px; width:80%, border:dashed grey 2 px;");
// buttonElGen.setAttribute("style", "background-color:Purple,");
// buttonWrapperEl.setAttribute("style", "Padding:60%")
// buttonElGen.setAttribute("style", "padding:50px, ")

// // append elements
// body.appendChild(h1El);
// body.appendChild(hrEl);
// body.appendChild(buttonElGen);
// body.appendChild(buttonElCopy);
// body.appendChild(containerEl);
// body.appendChild(buttonWrapperEl);
// body.appendChild(h2El);
// body.appendChild(buttonGenWrapperEl);
// body.appendChild(buttonCopyWrapperEl);

// // console.log ("test");

// // starting here are arrays for the 4 different types of Characters
// var alphabetLowerCharacters = "abcdefghijklmnopqrstuvwxyz ".split("");
// var alphabetUppperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
// var numericCharacters = "0123456789 ".split("");
// var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" .split("");

// // These variables pull random numbers from the above arrays. 
// var randomItemLower = alphabetLowerCharacters[Math.floor(Math.random()*alphabetLowerCharacters.length)];
// var randomItemUpper = alphabetUppperCharacters[Math.floor(Math.random()*alphabetUppperCharacters.length)];
// var randomNumberChar = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
// var randomSpecialChar = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

// buttonElGen.addEventListener("click", function(event) {
//     event.preventDefault();// you can do other things on event not just preventDefualt, which in this case is preventing submit
//     // textAreaEl.value = "";
//     alert(randomItemLower + randomItemUpper + randomNumberChar + randomSpecialChar + randomSpecialChar + randomItemUpper + randomItemLower + randomNumberChar);
//     console.log ( randomItemLower + randomItemUpper + randomNumberChar + randomSpecialChar + randomSpecialChar + randomItemUpper + randomItemLower + randomNumberChar)
//     });

// // copy to clipboard https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f

