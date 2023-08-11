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
