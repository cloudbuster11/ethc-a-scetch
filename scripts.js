const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    container.appendChild(cell).className = `${c + 1}`;
  }
}

makeRows(16, 16);

// Colors clicked div.
container.addEventListener("click", function (e) {
  if (e.target.matches("div")) {
    e.target.classList.add("active");
  }
});
