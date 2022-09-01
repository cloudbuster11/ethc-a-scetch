const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
let grid = document.querySelectorAll("grid");
const grid16Btn = document.getElementById("16grid");
const grid32Btn = document.getElementById("32grid");
const grid64Btn = document.getElementById("64grid");
let buttonPressed;

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    container.appendChild(cell).className = "grid";
  }
}

function removeDivs() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function resetBtn() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  if (buttonPressed === 16) {
    makeGrid(16, 16);
  } else if (buttonPressed === 32) {
    makeGrid(32, 32);
  } else if (buttonPressed === 64) {
    makeGrid(64, 64);
  }
}

function randomColor() {}

// Change color on  div.
container.addEventListener("mouseover", function (e) {
  if (e.target.matches("div")) {
    e.target.classList.add("active");
    // e.target.style.backgroundColor = "red";
  }
});

// Buttons
resetButton.addEventListener("click", resetBtn);

grid16Btn.addEventListener("click", function () {
  removeDivs();
  buttonPressed = 16;
  makeGrid(16, 16);
});
grid32Btn.addEventListener("click", function () {
  removeDivs();
  buttonPressed = 32;
  makeGrid(32, 32);
});
grid64Btn.addEventListener("click", function () {
  removeDivs();
  buttonPressed = 64;
  makeGrid(64, 64);
});
