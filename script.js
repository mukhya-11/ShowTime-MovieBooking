// image animation
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded" ,initializeSlider); // calling the fn after the DOM content fully loads
function initializeSlider(){ //for the first image 

    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000); //goes to the next img every 5secs
}


function showSlide(index){
    if(index >= slides.length){ // to reset after it reaches the end image
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1; // if prev button is pressed on slide 1 it will display the end slide
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); // won't display as a block
    });
    slides[slideIndex].classList.add("displaySlide"); // will display as a block
}


function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}


function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

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