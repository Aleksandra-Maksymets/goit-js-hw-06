const loginFormRef = document.querySelector(".login-form");
console.log("loginFormRef", loginFormRef);

loginFormRef.addEventListener("submit", onSubmission);

function onSubmission(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  } else {
    const userInfo = {
      email: email.value,
      password: password.value,
    };
    console.log(userInfo);
    event.currentTarget.reset();
  }
}
