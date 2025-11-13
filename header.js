const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Efekt při scrollu (volitelný)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 20) {
    header.style.background = 'linear-gradient(90deg, #0b7877, #3b82f6)';
    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  } else {
    header.style.background = 'linear-gradient(90deg, #0ea5a4, #60a5fa)';
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  }
});
