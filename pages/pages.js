// javascript for tab switching

const loginBtn = document.getElementById("loginbtn");
const createBtn = document.getElementById("createbtn");
const loginDiv = document.getElementById("login");
const createDiv = document.getElementById("create");

loginBtn.addEventListener("click", () => {
  loginDiv.style.display = "block";
  createDiv.style.display = "none";

  loginBtn.classList.add("active");
  createBtn.classList.remove("active");
});

createBtn.addEventListener("click", () => {
  loginDiv.style.display = "none";
  createDiv.style.display = "block";

  createBtn.classList.add("active");
  loginBtn.classList.remove("active");
});

// javascript for form validation
let errorDiv = document.getElementById("error");

function validateForm(event) {
  event.preventDefault();
  const emailValue = document.getElementById("emailInput").value;
  const password = document.getElementById("password").value;
  function validateEmail(emailValue) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(emailValue);
  }

  if (validateEmail(emailValue)) {
    console.log("Valid email address!");
  } else {
    errorDiv.innerText =
      "Invalid email address. Please write your email address correctly";
    errorDiv.style.display = "block";

    setTimeout(() => {
      errorDiv.style.display = "none";
    }, 5000);
  }
  function validatePassword(password) {
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&()[\]{}<>])[A-Za-z\d@$!%*?&()[\]{}<>]{8,}$/;
    return passwordPattern.test(password);
  }

  if (validatePassword(password)) {
    console.log("Valid password!");
  } else {
    errorDiv.innerText +=
      "\n\n\nInvalid password. Please make your password strong by including 8 characters, capital letters and symbols";
    errorDiv.style.display = "block";

    setTimeout(() => {
      errorDiv.style.display = "none";
    }, 5000);
  }
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", validateForm);
