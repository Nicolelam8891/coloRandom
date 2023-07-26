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
};

function generateNewPalette() {
  currentPalette = [];
  colorBoxContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    var randomHexCode = generateRandomHexCode();
    currentPalette.push(randomHexCode);
    colorBoxContainer.innerHTML += `
      <article class="color-box">
        <figure style="background-color: ${randomHexCode};"></figure>
        <figcaption>${randomHexCode}</figcaption>
      </article>
    `;
  }
};
