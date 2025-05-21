let slideIndex = 1;
let autoSlideTimeout; // Variable to store the timeout for auto sliding

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearTimeout(autoSlideTimeout); // Clear the existing timeout
  showSlides(slideIndex += n);
  setAutoSlide(); // Restart auto slide after manual navigation
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(autoSlideTimeout); // Clear the existing timeout
  showSlides(slideIndex = n);
  setAutoSlide(); // Restart auto slide after manual navigation
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Automatic slideshow function
function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setAutoSlide(); // Call itself again to continue the loop
}

// Function to set/reset the auto slide timer
function setAutoSlide() {
  autoSlideTimeout = setTimeout(autoSlide, 5000); // Change image every 5 seconds
}

// Initialize auto sliding
setAutoSlide();
