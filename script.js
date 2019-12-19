// set the variable for the body 
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

// Set the text content of relevant elements
h1El.textContent = "Generate a Password";
buttonElGen.textContent = "Generate Password";
buttonElCopy.textContent = "Copy to Clipboard";

// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
containerEl.setAttribute("style", "margin:500px; width:80%; text-align:center;");
passwordEl.setAttribute("style", "margin;500px; width:80%, border:dashed grey 2 px;");
buttonElGen.setAttribute("style", "background-color:Purple,");
buttonWrapperEl.setAttribute("style", "width")

// append elements
body.appendChild(h1El);
body.appendChild(hrEl);
body.appendChild(buttonElGen);
body.appendChild(buttonElCopy);
body.appendChild(containerEl);

console.log ("test");



