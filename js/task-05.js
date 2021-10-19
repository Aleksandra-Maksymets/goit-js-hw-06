const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const onInputChange = (event) => {
  const inputValue = event.currentTarget.value;
  if (inputValue === "") {
    return (nameOutputRef.textContent = "Anonymous");
  } else return (nameOutputRef.textContent = inputValue);
};

nameInputRef.addEventListener("input", onInputChange);
