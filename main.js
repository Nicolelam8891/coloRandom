// Data Model
var colorBoxContainer = document.querySelector(".color-box-container");
var colorButton = document.querySelector(".color-button");
var currentPalette = [];

// DOM Event Listeners
window.addEventListener("load", generateNewPalette);
colorButton.addEventListener("click", generateNewPalette);

// JavaScript Functions
function generateRandomHexCode() {
  var characters = "0123456789ABCDEF";
  var hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * characters.length)];
  }
  return hexCode;
}

function generateNewPalette() {
  colorBoxContainer.innerHTML = ''; // Clears the existing color boxes and their hex codes
  for (let i = 0; i < 5; i++) {
    var randomHexCode = generateRandomHexCode();
    currentPalette.push(randomHexCode);

    // Creates a new color box
    var colorBox = document.createElement('figure');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = randomHexCode;

    // Creates a new figcaption for the hex code
    var figCaption = document.createElement('figcaption');
    figCaption.textContent = randomHexCode;

    // Appends the color box and figcaption to the container
    colorBoxContainer.appendChild(colorBox);
    colorBoxContainer.appendChild(figCaption);
  }
};














