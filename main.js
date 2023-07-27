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
  currentPalette.push({ hexCode: randomHexCode, locked: false, id: i });
  colorBoxContainer.innerHTML += `
  <article class="color-box">
    <figure class="color-box${i}" style="background-color: ${randomHexCode}">
      <button>
        <i class="lock-icon unlocked-icon" style="display:block"></i>
        <i class="lock-icon locked-icon" style="display:none"></i>
      </button>
    </figure>
    <figcaption>${randomHexCode}</figcaption>
  </article>
  `;
  }
}

function toggleLock(event) {
  if (event.target.classList.contains('lock-icon')) {
    const lock = event.target;
    
    // Toggle between locked and unlocked states
    if (lock.classList.contains('unlocked-icon')) {
      lock.classList.remove('unlocked-icon');
      lock.classList.add('locked-icon');
    } else if (lock.classList.contains('locked-icon')) {
      lock.classList.remove('locked-icon');
      lock.classList.add('unlocked-icon');
    }
  }
}