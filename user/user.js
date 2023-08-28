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

// javascript for popup

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

function displayLostForm() {
  const htmlContent = `<span class="closeBtn" onclick="closeModal()">&times;</span>
                <div class="" id="">
                <form action="">
                    <label for="itemType">Item Type</label>
                    <select name="itemType" id="itemType">
                        <option value="">Select Document Type...</option>
                        <option value="id">Identification Card</option>
                        <option value="passport">Passport</option>
                        <option value="driversLicense">Driver's License</option>
                        <option value="studentCard">Student ID Card</option>
                        <option value="visa">Visa</option>
                        <option value="birthCertificate">Birth Certificate</option>
                        <option value="landDocs">Land Documents</option>
                        <option value="businessLicense">Business License</option>
                        <option value="other">Other...</option>
                    </select>
                    <label for="otherDocumentType" id="otherLabel" class="hidden">Other Document Type</label>
                    <input type="text" id="otherDocumentType" class="hidden">
            
                    <label for="">Document Number</label>
                    <input type="text">
                    <label for="">Location Lost</label>
                    <input type="text">
                    <label for="">Date Lost</label>
                    <input type="datetime-local">
                    <label for="">Description</label>
                    <textarea name="" id="" cols="60" rows="10"></textarea>
                    <div class="middle"><input type="submit" value="Recover-Lost-Items"></div>
                </form>
            </div>`;

  modalContent.innerHTML = htmlContent;
}

function displayFoundForm() {
  const htmlContent = `<span class="closeBtn" onclick="closeModal()">&times;</span> <div class="" id="">
                <form action="">
                    <label for="itemType">Item Type</label>
                    <select name="itemType" id="itemType">
                        <option value="">Select Document Type...</option>
                        <option value="id">Identification Card</option>
                        <option value="passport">Passport</option>
                        <option value="driversLicense">Driver's License</option>
                        <option value="studentCard">Student ID Card</option>
                        <option value="visa">Visa</option>
                        <option value="birthCertificate">Birth Certificate</option>
                        <option value="landDocs">Land Documents</option>
                        <option value="businessLicense">Business License</option>
                        <option value="other">Other...</option>
                    </select>
                    <label for="otherDocumentType" id="otherLabel" class="hidden">Other Document Type</label>
                    <input type="text" id="otherDocumentType" class="hidden">
    
                    <label for="">Document Number</label>
                    <input type="text">
                    <label for="">Location Found</label>
                    <input type="text">
                    <label for="">Date Found</label>
                    <input type="datetime-local">
                    <label for="">Description</label>
                    <textarea name="" id="" cols="60" rows="10"></textarea>
                    <div class="middle"><input type="submit" value="Recover-Lost-Items"></div>
                <p class="notification"><span>*You will have to <a href="./account.html">Login</a> to access all functionalities</span></p>

                </form>
            </div>`;
  modalContent.innerHTML = htmlContent;
}
