function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");

buttonRef.addEventListener("click", onClickBtnChange);

function onClickBtnChange() {
  const randomHexColor = getRandomHexColor();
  spanRef.textContent = randomHexColor;
  document.body.style.backgroundColor = randomHexColor;
}
