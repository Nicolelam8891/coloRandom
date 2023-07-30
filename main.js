// Data Model
var currentPalette = [];
var savedPalettes = [];

// DOM Query Selectors
var colorBoxContainer = document.querySelector(".color-box-container");
var colorButton = document.querySelector(".color-button");
var saveButton = document.querySelector(".save-button");
var savedPalettesContainer = document.querySelector(".saved-palettes-container");
var noSavedPalettesMsg = document.querySelector(".no-saved-palettes-msg");

// Event Listeners
window.addEventListener("load", function () {
  generateNewPalette();
  displaySavedPalettes();
});

colorButton.addEventListener("click", generateNewPalette);
saveButton.addEventListener("click", saveCurrentPalette);
colorBoxContainer.addEventListener("click", toggleLock);
savedPalettesContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-palette")) {
    var index = parseInt(event.target.dataset.index);
    deleteSavedPalette(index);
  }
});

// JavaScript Functions
function generateRandomHexCode() {
  var characters = "0123456789ABCDEF";
  var hexCode = "#";
  for (var i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * characters.length)];
  }
  return hexCode;
}

function createColorBoxHTML(hexCode, locked, id) {
  return `
    <article class="color-box">
      <figure class="color-box-figure" style="background-color: ${hexCode}">
        <aside class="lock-icon ${locked ? "locked-icon" : "unlocked-icon"}"></aside>
      </figure>
      <figcaption>${hexCode}</figcaption>
    </article>
  `;
}
function generateNewPalette() {
  colorBoxContainer.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    var randomHexCode = generateRandomHexCode();
    var existingColor = currentPalette.find(function (color) {
      return color.id === i;
    });
    if (existingColor && existingColor.locked) {
      colorBoxContainer.innerHTML += createColorBoxHTML(
        existingColor.hexCode,
        true,
        i
      );
      currentPalette[i] = existingColor;
    } else {
      currentPalette[i] = { hexCode: randomHexCode, locked: false, id: i };
      colorBoxContainer.innerHTML += createColorBoxHTML(
        randomHexCode,
        false,
        i
      );
    }
  }
}

function toggleLock(event) {
  var lockIcon = event.target;
  if (lockIcon.classList.contains("lock-icon")) {
    var colorBox = lockIcon.closest(".color-box");
    var colorBoxIndex = Array.from(colorBoxContainer.children).indexOf(
      colorBox
    );
    currentPalette[colorBoxIndex].locked = !currentPalette[colorBoxIndex].locked;
    lockIcon.classList.toggle("locked-icon");
    lockIcon.classList.toggle("unlocked-icon");
  }
}

function saveCurrentPalette() {
  savedPalettes.push(currentPalette.map(function (color) {
    return color.hexCode;
  }));
  displaySavedPalettes();
}


function displaySavedPalettes() {
  savedPalettesContainer.innerHTML = "";
  savedPalettes.forEach(function (palette, index) {
    var paletteHTML = `<li class="palette">`;
    palette.forEach(function (hexCode) {
      paletteHTML += `
        <figure class="mini-color-box" style="background-color: ${hexCode}"></figure>
      `;
    });
    paletteHTML += `
      <button class="delete-palette" data-index="${index}"></button>
    `;
    paletteHTML += `</li>`;
    savedPalettesContainer.innerHTML += paletteHTML;
  });

  if (!savedPalettes.length) {
    noSavedPalettesMsg.style.display = "block";
  } else {
    noSavedPalettesMsg.style.display = "none";
  }
}

function deleteSavedPalette(index) {
  savedPalettes.splice(index, 1);
  displaySavedPalettes();
}