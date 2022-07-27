const container = document.querySelector("#container");

addRedText(container);
addBlueHeader(container);
addPinkDiv(container);

const buttons = document.querySelectorAll("#btn");
buttons[0].onclick = () =>
  alert("Hello, world (from onclick, through external JavaScript)!");
buttons[1].addEventListener("click", () => {
  alert("Hello, world (from addEventListener, through external JavaScript)!");
});
buttons[2].addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  e.target.setAttribute("style", "background: blue;");
});

function addRedText(parent) {
  const redText = document.createElement("p");
  redText.textContent = "Hey I'm red!";
  redText.setAttribute("style", "color: red;");
  parent.appendChild(redText);
}

function addBlueHeader(parent) {
  const blueHeader = document.createElement("h3");
  blueHeader.textContent = "I'm a blue h3!";
  blueHeader.setAttribute("style", "color: blue;");
  parent.appendChild(blueHeader);
}

function addPinkDiv(parent) {
  /* Create div */
  const pinkDiv = document.createElement("div");
  pinkDiv.setAttribute(
    "style",
    "border: 2px solid black; background-color: pink;"
  );
  /* Add internal elements */
  const header = document.createElement("h1");
  header.textContent = "I'm in a div";
  pinkDiv.appendChild(header);
  const para = document.createElement("p");
  para.textContent = "ME TOO!";
  pinkDiv.appendChild(para);
  /* Add div to parent */
  parent.appendChild(pinkDiv);
}
