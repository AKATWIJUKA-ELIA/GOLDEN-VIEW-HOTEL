const zoomedclassic = document.querySelector('.zoomclassic');
let scale = 1;

window.addEventListener('scroll', () => {
    // Calculate the scale factor based on scroll position or any other condition
    // In this example, we'll use scroll position.
    const scrollY = window.scrollY;
    scale = 1 + scrollY * 0.001; // Adjust the multiplier to control zoom speed
    zoomedclassic.style.transform = `scale(${scale})`;
});
/*CLASS CAROUSEL */
const slides = document.querySelectorAll('.slides li');
let currentSlide = 0;
function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}
function nextSlide() {
    showSlide(currentSlide + 1);
}

// You can change the slide every 3 seconds (3000 milliseconds)
setInterval(nextSlide, 3000);

// Initialize the slideshow by showing the first slide
showSlide(0);