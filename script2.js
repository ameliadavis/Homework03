//set the variable for the body 
var body = document.body;

//Create all the elements of HTML 
var h1El = document.createElement("h1");
var hrEl = document.createElement("hr");
var formEl = document.createElement("form");
var buttonElGen = document.createElement("button");
var buttonElCopy = document.createElement("button");
var containerEl = document.createElement("container-lg");
var passwordEl = document.createElement("div");
var buttonWrapperEl = document.createElement ("row");
var buttonGenWrapperEl = document.createElement ("col-3");
var buttonCopyWrapperEl = document.createElement ("col-3");
var h2El = document.createElement("h2");

// Set the text content of relevant elements
h1El.textContent = "Generate a Password";
buttonElGen.textContent = "Generate Password";
buttonElCopy.textContent = "Copy to Clipboard";

// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
containerEl.setAttribute("style", "margin:500px; width:80%; text-align:center;");
passwordEl.setAttribute("style", "margin;500px; width:80%, border:dashed grey 2 px;");
buttonElGen.setAttribute("style", "background-color:Purple,");
buttonWrapperEl.setAttribute("style", "Padding:60%")
buttonElGen.setAttribute("style", "padding:50px, ")

// append elements
body.appendChild(h1El);
body.appendChild(hrEl);
body.appendChild(buttonElGen);
body.appendChild(buttonElCopy);
body.appendChild(containerEl);
body.appendChild(buttonWrapperEl);
body.appendChild(h2El);
body.appendChild(buttonGenWrapperEl);
body.appendChild(buttonCopyWrapperEl);

// console.log ("test");

// starting here are arrays for the 4 different types of Characters
var alphabetLowerCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetUppperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var numericCharacters = "0123456789".split("");
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" .split("");

// These variables pull random numbers from the above arrays. 
var randomItemLower = alphabetLowerCharacters[Math.floor(Math.random()*alphabetLowerCharacters.length)];
var randomItemUpper = alphabetUppperCharacters[Math.floor(Math.random()*alphabetUppperCharacters.length)];
var randomNumberChar = numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
var randomSpecialChar = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

//promt the user for the different elements we need
var pwdLength= prompt("How many Characters do you need in your password", " ");
var lCase = confirm("Do you want Lowercase Characters?");
var uCase = confirm(" Do you want Uppercase Characters?");
var spec = confirm("do you want Special Characters?");
var num = confirm("do you want number Characters?");
var finalpassword = [" "]; 

//create the for loop which will run through the randome elements and assemble the password. 

for (i = 0; i < pwdLength; i++) {
    if (lCase === true){
        finalpassword.push(alphabetLowerCharacters[Math.floor(Math.random()*alphabetLowerCharacters.length)]);// push the randomly generated character into the final password array. 
        console.log (finalpassword);
        if (finalpassword.length === pwdLength){
        break;
        }
    }
    if (uCase === true){
        finalpassword.push(alphabetUppperCharacters[Math.floor(Math.random()*alphabetUppperCharacters.length)]);// push the randomly generated character into the final password array. 
        console.log (finalpassword);
            if (finalpassword.length === pwdLength){ break;} //should break out if we meet user set length. 
    }
    if (spec === true){
        finalpassword.push(numericCharacters[Math.floor(Math.random()*numericCharacters.length)]);// push the randomly generated character into the final password array. 
        console.log (finalpassword);
        if (finalpassword.length === pwdLength){
        break;
        }
    }
    if (spec === true){
        finalpassword.push(specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);// push the randomly generated character into the final password array. 
        console.log (finalpassword);
        if (finalpassword.length === pwdLength){
        break;
        }
    }
}


// buttonElGen.addEventListener("click", function(event) {
//     event.preventDefault();// you can do other things on event not just preventDefualt, which in this case is preventing submit
//     // textAreaEl.value = "";
//     alert(randomItemLower + randomItemUpper + randomNumberChar + randomSpecialChar + randomSpecialChar + randomItemUpper + randomItemLower + randomNumberChar);
//     console.log ( randomItemLower + randomItemUpper + randomNumberChar + randomSpecialChar + randomSpecialChar + randomItemUpper + randomItemLower + randomNumberChar)
//     });

// copy to clipboard https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f

