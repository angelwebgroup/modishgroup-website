// Initialize Lucide Icons
lucide.createIcons();

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const menuIcon = document.getElementById('menuIcon');

mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('mobile-open');
    const isOpen = navMenu.classList.contains('mobile-open');
    menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    lucide.createIcons();
});

// Dropdown for mobile
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            this.classList.toggle('open');
        }
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('mobile-open');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Hero slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slider-dot');
const slideCount = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (index + slideCount) % slideCount;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function setSlide(index) {
    showSlide(index);
}

// Auto-advance slides
setInterval(() => {
    changeSlide(1);
}, 5000);

// Contact form submission
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<div style="width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 1s linear infinite;"></div> Sending...';
    
    // Here you can add your form submission logic
    // For example: send to server, email service, etc.
    
    // Simulate form submission (replace with actual backend call)
    setTimeout(() => {
        contactForm.style.display = 'none';
        successMessage.style.display = 'block';
        lucide.createIcons();
        
        // Reset form after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            successMessage.style.display = 'none';
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i data-lucide="send"></i> Send Message';
            lucide.createIcons();
        }, 5000);
    }, 2000);
});