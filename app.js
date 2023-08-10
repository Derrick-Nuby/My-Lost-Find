document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const mobileMenu = document.querySelector(".mobile-menu"); // Select the .menu-items element

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
