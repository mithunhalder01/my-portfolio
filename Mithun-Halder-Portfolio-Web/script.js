// ========== Loader Hide after Page Load ========== 
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000); // 1 second delay before hiding loader
});

// ========== Scroll Reveal Animation ========== 
window.sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 2000,
  reset: false,
});

sr.reveal('.home', { delay: 300 });
sr.reveal('.about', { delay: 400 });
sr.reveal('.skills', { delay: 500 });
sr.reveal('.projects', { delay: 600 });
sr.reveal('.contact', { delay: 700 });

// ========== Scroll Animation for Typed Text (Home Section) ========== 
const typedText = document.getElementById('typed-text');
const typedWords = ['Web Developer', 'UI/UX Specialist', 'Freelancer'];
let wordIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < typedWords[wordIndex].length) {
    typedText.textContent += typedWords[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 150);
  } else {
    setTimeout(() => {
      typedText.textContent = '';
      charIndex = 0;
      wordIndex = (wordIndex + 1) % typedWords.length;
      typeWriter();
    }, 2000); // wait for 2 seconds before typing the next word
  }
}

typeWriter();

// ========== Hamburger Menu Toggle (Mobile View) ========== 
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// ========== Back to Top Button ========== 
const backToTopButton = document.getElementById('backToTop');

// Show the button when user scrolls down
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
