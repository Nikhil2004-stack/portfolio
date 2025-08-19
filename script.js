// ===== Select Elements =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// ===== Toggle Menu on Click =====
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // toggle menu icon
    navbar.classList.toggle('active'); // toggle navbar
};

// ===== Close Menu When Link is Clicked =====
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// ===== Scroll Behavior =====
window.onscroll = () => {
    let top = window.scrollY;

    // Highlight Active Link
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document
                .querySelector(`header nav a[href*="${id}"]`)
                .classList.add('active');
        }
    });

    // Sticky Header
    document.querySelector('header').classList.toggle('sticky', top > 100);
};

// ===== ScrollReveal Initialization =====
const sr = ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
    origin: 'bottom'
});

// Reveal multiple selectors
sr.reveal('.home-content, .about-content, .services-box, .education-box, .contact form');

// Reveal skill cards one by one
sr.reveal('.skill-card', { interval: 200 });


sr.reveal('.home-content h1 ,.about-img',{origin:'left'});
// typed js
 
const typed = new Typed('.multiple-text', {
    strings: [ 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// particle js

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#000000" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#000000", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

