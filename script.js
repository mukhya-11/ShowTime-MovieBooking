// image animation
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded" ,initializeSlider); // calling the fn after the DOM content fully loads

function initializeSlider(){ //for the first image 
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000); //goes to the next img every 5secs
    }
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

// function to store the selected movie name for the next page
    const selectElement = document.getElementById('selectMovie');
    const selectedValue = selectElement.value;
    sessionStorage.setItem('selectedMovie', selectedValue); // Store selected value in sessionStorage
}