// Data Model
var currentPalette = [];

// DOM Query Selectors
var colorBoxContainer = document.querySelector(".color-box-container");
var colorButton = document.querySelector(".color-button");

// DOM Event Listeners
window.addEventListener("load", generateNewPalette);
colorButton.addEventListener("click", generateNewPalette);
colorBoxContainer.addEventListener("click", toggleLock);

// JavaScript Functions
function generateRandomHexCode() {
  var characters = "0123456789ABCDEF";
  var hexCode = "#";
  for (var i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * characters.length)];
  }
  return hexCode;
};

function createColorBoxHTML(hexCode, locked, id) {
  return `
    <article class="color-box">
      <figure class="color-box-figure" style="background-color: ${hexCode}">
        <figure class="lock-icon ${locked ? 'locked-icon' : 'unlocked-icon'}"></figure>
      </figure>
      <figcaption>${hexCode}</figcaption>
    </article>
  `
};

function generateNewPalette() {
  colorBoxContainer.innerHTML = '';
  for (var i = 0; i < 5; i++) {
    var randomHexCode = generateRandomHexCode();
    var existingColor = currentPalette.find(function(color) {
      return color.id === i;
    });
    if (existingColor && existingColor.locked) {
      colorBoxContainer.innerHTML += createColorBoxHTML(existingColor.hexCode, true, i);
      currentPalette[i] = existingColor;
    } else {
      currentPalette[i] = { hexCode: randomHexCode, locked: false, id: i };
      colorBoxContainer.innerHTML += createColorBoxHTML(randomHexCode, false, i);
    }
  }
};

function toggleLock(event) {
  var lockIcon = event.target;
  if (lockIcon.classList.contains('lock-icon')) {
    var colorBox = lockIcon.closest('.color-box');
    var colorBoxIndex = Array.from(colorBoxContainer.children).indexOf(colorBox);
    currentPalette[colorBoxIndex].locked = !currentPalette[colorBoxIndex].locked;
    lockIcon.classList.toggle('locked-icon');
    lockIcon.classList.toggle('unlocked-icon');
  }
};