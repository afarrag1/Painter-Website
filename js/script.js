// JavaScript for FS New Breed website
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('header nav'); // The <nav> element

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('nav-open');
            hamburger.classList.toggle('is-active'); // For icon animation
            // Toggle aria-expanded attribute
            let expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !expanded);
        });
    }
});
