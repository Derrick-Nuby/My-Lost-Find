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

// popup

const modalContent = document.getElementById("modal-content");
const modal = document.getElementById("simpleModal");
// const modalBtn = document.getElementById("modalBtn");
const modalBtns = document.querySelectorAll(".modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

// modalBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.animation = "modalOpen 1s";
  modal.style.display = "block";
}

function closeModal() {
  modal.style.animation = "modalClose 2s";
  setTimeout(function () {
    modal.style.display = "none";
    modalContent.innerHTML = "";
  }, 1000);
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.animation = "modalClose 2s";
    setTimeout(function () {
      modal.style.display = "none";
      modalContent.innerHTML = "";
    }, 1000);
  }
}

function displayItem() {
  const htmlContent = `<div class="singlelost">
                    <span style="padding-right: 20px;" class="closeBtn" onclick="closeModal()">&times;</span>
                <div class="title sbtnsc">Lost Item ID1987... </div>
                <div class="contents">
                    <table id="tables">
                        <tr>
                            <td>Item Type</td>
                            <td>Identification Card</td>
                        </tr>
                        <tr>
                            <td>Item Number</td>
                            <td>1801230296644121</td>
                        </tr>
                        <tr>
                            <td>Location Lost</td>
                            <td>Kigali-Gasabo-Gacuriro</td>
                        </tr>
                        <tr>
                            <td>Date Lost</td>
                            <td>09/01/2023</td>
                        </tr>
                        <tr>
                            <td>Date Reported</td>
                            <td>19/01/2023</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>Found</td>
                        </tr>
                        <tr>
                            <td>Date Found</td>
                            <td>12/01/2023</td>
                        </tr>
                        <tr>
                            <td>Location Found</td>
                            <td>Kigali-Gasabo-Gacuriro</td>
                        </tr>
                        <tr>
                            <td>Acquired</td>
                            <td>Yes</td>
                        </tr>
                    </table>

                </div>
                <div class="footeritem">Further Processes</div>
            </div>`;
  modalContent.innerHTML = htmlContent;
}
