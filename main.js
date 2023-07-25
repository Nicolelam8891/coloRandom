// Data Model
var hexCodes = [];


//querySelectors
var colorButton = document.querySelector(".color-button");
var colorBoxContainer = document.querySelector(".color-box-container");


// Event Listeners
window.addEventListener("load", generateNewPalette);
colorButton.addEventListener("click", generateNewPalette);

//Functions
function generateRandomHexCode() {
    var characters = "ABCDEF0123456789";
    var hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += characters[Math.floor(Math.random() * characters.length)];
    }
    return hexCode;
  };

  function () {

  }

//querySelectors for button
//add eventlistener
//function/event handlers
//array for color palette 
//Questions: where do we get the colors? Ones that we come up with or random or does turing give it to us?
//random function 
