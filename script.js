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
