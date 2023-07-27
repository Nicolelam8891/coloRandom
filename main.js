// Data Model
const currentPalette = [];

// DOM Query Selectors
const colorBoxContainer = document.querySelector(".color-box-container");
const colorButton = document.querySelector(".color-button");

// DOM Event Listeners
window.addEventListener("load", generateNewPalette);
colorButton.addEventListener("click", generateNewPalette);
colorBoxContainer.addEventListener('click', toggleLock);

// JavaScript Functions
function generateRandomHexCode() {
  const characters = "0123456789ABCDEF";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * characters.length)];
  }
  return hexCode;
}

function createColorBoxHTML(hexCode, locked) {
  return `
    <article class="color-box">
      <figure class="color-box-figure" style="background-color: ${hexCode}">
        <div class="lock-icon ${locked ? 'locked-icon' : 'unlocked-icon'}"></div>
      </figure>
      <figcaption>${hexCode}</figcaption>
    </article>
  `;
}

function generateNewPalette() {
  currentPalette.length = 0;
  colorBoxContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const randomHexCode = generateRandomHexCode();
    currentPalette.push({ hexCode: randomHexCode, locked: false, id: i });
    colorBoxContainer.innerHTML += createColorBoxHTML(randomHexCode, false, i);
  }
}

function toggleLock(event) {
  const lockIcon = event.target;
  if (lockIcon.classList.contains('lock-icon')) {
    const colorBox = lockIcon.closest('.color-box');
    const colorBoxIndex = Array.from(colorBoxContainer.children).indexOf(colorBox);
    currentPalette[colorBoxIndex].locked = !currentPalette[colorBoxIndex].locked;
    lockIcon.classList.toggle('locked-icon');
    lockIcon.classList.toggle('unlocked-icon');
  }
}
