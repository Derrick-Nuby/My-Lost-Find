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
// const body = document.getElementsByTagName("body")[0];

// window.addEventListener("load", function () {
//   errorDiv.style.display = "none";
// });

function validateForm(event) {
  event.preventDefault();
  const emailValue = document.getElementById("emailInput").value;

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
}

// const submitButton = document.getElementById("submitButton");
// submitButton.addEventListener("click", validateForm);
