// Assignment Code
var generateBtn = document.getElementById("generate"); // this is the button itse
var password = [];


// starting here are arrays for the 4 different types of Characters
var alphabetLowerCharacters = "abcdefghijklmnopqrstuvwxyz ".split("");
var alphabetUppperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var numericCharacters = "0123456789 ".split("");
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" .split("");

// Write password to the #password input
  function writePassword( ) { 
    // var strPassword = "";
    // for (var i = 0; i < password.length; i++) { 
    //   strPassword.concat(password[i]); // we are building on the string we are building above each time we go through this loop 
    //   console.log(strPassword);
    //   console.log(password[i]);
    // }

  // var password = generatePassword() ;
  var passwordText = document.getElementById("password");// this sets the password we generate on the page
 
  passwordText.value = password.join("");

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
  }

  // Need to trigger when button is triggered
 function clickEvent () {
  var pwdLength = prompt("How many Characters do you need in your password", " ");
   console.log(pwdLength);

  if (pwdLength < 8) {
    alert ("You cannot have less than 8 characters!");
  }
  else if (pwdLength > 126) {
    alert ("Maximum amount of characters is 126");
  }
  else  {
  var lCase = confirm("Do you want Lowercase Characters?");
  var uCase = confirm(" Do you want Uppercase Characters?");
  var spec = confirm("do you want Special Characters?");
  var numbers = confirm("do you want number Characters?");

  for (i = 0; i < pwdLength; i++) {
    if (lCase === true && password.length != pwdLength){
        password.push(alphabetLowerCharacters[Math.floor(Math.random()*alphabetLowerCharacters.length)]);// push the randomly generated character into the final password array. 
        console.log (password);
        // if (password.length === pwdLength){ break;}
    }
    if (uCase === true && password.length != pwdLength){
        password.push(alphabetUppperCharacters[Math.floor(Math.random()*alphabetUppperCharacters.length)]);// push the randomly generated character into the final password array. 
        console.log (password);
            // if (password.length === pwdLength){ break; } //should break out if we meet user set length. 
    }
    if (numbers === true && password.length != pwdLength){
        password.push(numericCharacters[Math.floor(Math.random()*numericCharacters.length)]);// push the randomly generated character into the final password array. 
        console.log (password);
        // if (password.length === pwdLength){ break; }
    }
    if (spec === true && password.length != pwdLength){
        password.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);// push the randomly generated character into the final password array. 
        console.log (password);
        // if (password.length === pwdLength){ break; }
    }
  } 
  writePassword(); 
}
  
   } 
  
  

  // needs to trigger after prompts and confirms
  



function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", clickEvent);

// generatePassword.addEventListener("Click", clickevent);


// BONUS EVENT LISTENER





// // copy to clipboard https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f

