const zoomedclassic = document.querySelector('.zoomclassic');
let scale = 1;

window.addEventListener('scroll', () => {
    // Calculate the scale factor based on scroll position or any other condition
    // In this example, we'll use scroll position.
    const scrollY = window.scrollY;
    scale = 1 + scrollY * 0.001; // Adjust the multiplier to control zoom speed
    zoomedclassic.style.transform = `scale(${scale})`;
});
