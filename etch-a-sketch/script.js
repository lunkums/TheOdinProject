const container = document.querySelector(".container");
const clearButton = document.querySelector("#clear-button");
const resizeButton = document.querySelector("#resize-button");

let gridWidth = 16;
let boxes;

window.addEventListener("load", resetGrid);
clearButton.addEventListener("click", clearBoxes);
resizeButton.addEventListener("click", resize);

function resetGrid() {
  removeAllChildNodes(container);
  boxes = new Array(gridWidth ** 2);
  for (let i = 0; i < boxes.length; i++) {
    let box = document.createElement("div");
    box.classList.add("box", "unfilled");
    box.addEventListener("mouseover", (e) => fillBox(e.currentTarget));
    container.appendChild(box);
    boxes[i] = box;
  }
  container.style = `grid-template-columns: repeat(auto-fill, ${
    100 / gridWidth
  }%)`;
}

function fillBox(box) {
  box.classList.remove("unfilled");
  box.classList.add("filled");
}

function clearBoxes() {
  boxes.forEach((box) => {
    box.classList.remove("filled");
    box.classList.add("unfilled");
  });
}

function resize() {
  do {
    gridWidth = +prompt(
      "Enter the new width of the grid (between 16 & 100): ",
      gridWidth
    );
  } while (isNaN(gridWidth) || gridWidth > 100 || gridWidth < 16);
  resetGrid();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
