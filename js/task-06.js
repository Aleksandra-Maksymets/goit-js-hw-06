const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputChange);

function classToggle(classToAdd, classToRemove) {
  if (!inputRef.classList.contains(classToAdd)) {
    inputRef.classList.add(classToAdd);
  }
  if (inputRef.classList.contains(classToAdd)) {
    inputRef.classList.remove(classToRemove);
  }
}

function onInputChange(event) {
  const dataDefaultLength = Number(inputRef.getAttribute("data-length"));
  console.log("Default Length", dataDefaultLength);

  if (event.currentTarget.value.length !== dataDefaultLength) {
    console.log(
      `Please enter ${dataDefaultLength} symbols. You've entered ${event.currentTarget.value.length}`
    );
    classToggle("invalid", "valid");
  } else {
    console.log("you've entered:", event.currentTarget.value.length);
    classToggle("valid", "invalid");
  }
}
