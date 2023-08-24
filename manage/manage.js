const closeMenu = document.getElementById("close");
const side = document.getElementById("sidesection");
const openMenu = document.getElementById("openmenu");

function menuOpen() {
  side.style.display = "block";
  side.style.animation = "slideInFromLeft 1s forwards";
}

function menuClose() {
  side.style.animation = "closeOutFromLeft 2s forwards";
  setTimeout(() => {
    side.style.display = "none";
  }, 2000);
}
