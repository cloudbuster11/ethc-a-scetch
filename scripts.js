const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
const div = document.querySelectorAll("div");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    container.appendChild(cell).className = "div";
  }
}

makeRows(16, 16);

// Colors clicked div.
container.addEventListener("click", function (e) {
  if (e.target.matches("div")) {
    e.target.classList.add("active");
  }
});

function reset() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  makeRows(16, 16);
}

resetButton.addEventListener("click", reset);

console.log(div);
