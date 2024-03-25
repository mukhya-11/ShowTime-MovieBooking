// image animation
document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('.gallery img');
    let index = 0;

    function showImage() {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        index = (index + 1) % images.length; // Cycle through images
    }

    setInterval(showImage, 3000); // Change image every 3 seconds
});

// function to disable the "Continue" button if no option is selected
function selectMovie() {
    var selectBox = document.getElementById("selectMovie");
    var continueButton = document.getElementById("continueButton");

    // Enable the button only if a movie is selected
    continueButton.disabled = selectBox.value === "";

    // Change button color when a movie is selected
    continueButton.style.backgroundColor = selectBox.value === "" ? "" : "azure";
}

//Popup window
const continueButton = document.getElementById('continueButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');
// Function to display the popup
function displayPopup() {
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

// Event listener for the continue button
continueButton.addEventListener('click', displayPopup);

// Event listener for the close button inside the popup
closeButton.addEventListener('click', closePopup);