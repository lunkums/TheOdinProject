const gridSize = 16;
const container = document.querySelector(".container");

window.addEventListener("load", createGrid);

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);
  }
}
