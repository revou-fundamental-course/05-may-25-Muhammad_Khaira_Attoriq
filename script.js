document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile nav when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Banner Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    // Initialize slider
    function initSlider() {
        if (slides.length > 0) {
            // Set first slide as active
            slides[currentSlide].classList.add('active');
            startSlideInterval();
        }
    }

    // Auto slide function
    function startSlideInterval() {
        slideInterval = setInterval(() => {
            goToNextSlide();
        }, 5000); // Change slide every 5 seconds
    }

    // Reset interval when manually changing slides
    function resetInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    // Go to a specific slide
    function goToSlide(slideIndex) {
        if (slides.length > 0) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (slideIndex + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }

    // Go to next slide
    function goToNextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Go to previous slide
    function goToPrevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Event listeners for slider buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            goToPrevSlide();
            resetInterval();
        });
        
        nextBtn.addEventListener('click', () => {
            goToNextSlide();
            resetInterval();
        });
    }

    // Initialize slider if there are slides
    if (slides.length > 0) {
        initSlider();
    }
});