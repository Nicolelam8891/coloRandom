// Data Model
var currentPalette = [];

// DOM Query Selectors
var colorBoxContainer = document.querySelector(".color-box-container");
var colorButton = document.querySelector(".color-button");

// DOM Event Listeners
window.addEventListener("load", generateNewPalette);
colorButton.addEventListener("click", generateNewPalette);
colorBoxContainer.addEventListener('click', toggleLock);

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
  currentPalette = [];
  colorBoxContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    var randomHexCode = generateRandomHexCode();
    currentPalette.push({ hexCode: randomHexCode, locked: false });
    colorBoxContainer.innerHTML += `
      <article class="color-box">
        <figure class="color-box${i + 1}" style="background-color: ${randomHexCode}">
          <i class="lock-icon unlocked-icon"></i>
          <i class="lock-icon locked-icon"></i>
        </figure>
        <figcaption>${randomHexCode}</figcaption>
      </article>
    `;
  }
}

function toggleLock(event) {
  var icon = event.target;
  if (icon.classList.contains('lock-icon')) {
    var article = icon.closest('article');
    var index = Array.from(colorBoxContainer.children).indexOf(article);
    currentPalette[index].locked = !currentPalette[index].locked;
    var lockedIcon = article.querySelector('.locked-icon');
    var unlockedIcon = article.querySelector('.unlocked-icon');
    unlockedIcon.classList.toggle('hidden');
    lockedIcon.classList.toggle('hidden');
  }
}
