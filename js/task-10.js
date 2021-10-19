// Elements references
const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  clearBtn: document.querySelector("[data-destroy]"),
  container: document.getElementById("boxes"),
};

// adding EventListeners
refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.clearBtn.addEventListener("click", onClearBtnClick);

// Callback functions
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  refs.container.append(...boxes);
}

//Event handlers functions
function onCreateBtnClick() {
  createBoxes(refs.input.value);
}

function onClearBtnClick() {
  refs.container.innerHTML = "";
  refs.input.value = "";
  refs.input.focus();
}
