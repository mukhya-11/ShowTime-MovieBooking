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

