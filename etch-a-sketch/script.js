const gridSize = 16;
const container = document.querySelector(".container");

window.addEventListener("load", createGrid);

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    let box = document.createElement("div");
    box.classList.add("box", "unfilled");
    box.addEventListener("mouseover", (e) => fillBox(e.currentTarget));
    container.appendChild(box);
  }
}

function fillBox(box) {
  box.classList.remove("unfilled");
  box.classList.add("filled");
}
