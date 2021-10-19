const rangeInputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const onRangeInputChange = (event) => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
  console.log("Font size:", textRef.style.fontSize);
};

rangeInputRef.addEventListener("input", onRangeInputChange);
