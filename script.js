// image animation
document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('.gallery img');
    let index = 0;
    let fadeDuration = 300; // Duration of fade animation in ms

    function showImage() {
        let currentIndex = index;
        let nextIndex = (index + 1) % images.length;

        // Fade out the current image
        images[currentIndex].style.opacity = 0;

        // set a timeout to fade in the next image after the fade animation completes
        setTimeout(function() {
            // hide the current image
            images[currentIndex].classList.remove('active');
            // show the next image
            images[nextIndex].classList.add('active');
            images[nextIndex].style.opacity = 1;
            // update the index for the next iteration
            index = nextIndex;
        }, fadeDuration);
    }

    // Show the first image
    images[index].classList.add('active');
    images[index].style.opacity = 1;

    // transition loop
    setInterval(showImage, 4000); // Change image every 4 seconds
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