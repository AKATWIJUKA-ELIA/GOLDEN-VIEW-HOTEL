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

//adding three button navigation
//function myFunction() {
  //  var x = document.getElementById("nav-div");
    //if (x.className === "col-5") {
      //x.className += " responsive";
    //} else {
      //x.className = "col-5";
    //}
  //}



  //
    // Function to update the class based on screen width
    function updateClass() {
        var myElement = document.getElementById("golden-col");
  
        // Check if the window width is less than or equal to 600px
        if (window.innerWidth <= 600) {
          // Add the class for narrow screens
          myElement.classList.add("col-6");
          // Remove the class for wide screens
          myElement.classList.remove("col-4");
        } else {
          // Add the class for wide screens
          myElement.classList.add("col-4");
          // Remove the class for narrow screens
          myElement.classList.remove("col-6");
        }
      }
  
      // Initial call to set the class based on the initial screen width
      updateClass();
  
      // Add an event listener to handle window resize
      window.addEventListener("resize", updateClass);






    /*  let startX = null;

document.querySelector('.slider').addEventListener('touchstart', function(event) {
 startX = event.touches[0].clientX;
});

document.querySelector('.slider').addEventListener('touchmove', function(event) {
 if (startX === null) return;
 let currentX = event.touches[0].clientX;
 let diffX = currentX - startX;
 if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      slidePrev();
    } else {
      slideNext();
    }
    startX = null;
 }
});

function slideNext() {
 let activeSlide = document.querySelector('.slide.active');
 let nextSlide = activeSlide.nextElementSibling;
 if (nextSlide) {
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');
 }
}

function slidePrev() {
 let activeSlide = document.querySelector('.slide.active');
 let prevSlide = activeSlide.previousElementSibling;
 if (prevSlide) {
    activeSlide.classList.remove('active');
    prevSlide.classList.add('active');
 }
}