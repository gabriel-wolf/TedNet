// Function to open the popup
function openPopup() {
    var popup = document.getElementById("centerpopup");
    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("centerpopup");
    popup.style.display = "none";
}

// Add event listener for clicking the close button
var closeButton = document.getElementById("close-button");
if (closeButton) {
    closeButton.addEventListener("click", closePopup);
}

var showPopupButton = document.getElementById("show-popup-button");
if (showPopupButton) {
    showPopupButton.addEventListener("click", openPopup);
}