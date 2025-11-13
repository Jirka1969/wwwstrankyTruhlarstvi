// Vyber všechny obrázky v galerii
const images = document.querySelectorAll('.item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const caption = lightbox.querySelector('.lightbox-caption');
const closeBtn = lightbox.querySelector('.lightbox-close');
const nextBtn = lightbox.querySelector('.next');
const prevBtn = lightbox.querySelector('.prev');

let currentIndex = 0;

// Funkce pro zobrazení obrázku v lightboxu
function showImage(index) {
  currentIndex = (index + images.length) % images.length; // cyklická navigace
  const img = images[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  caption.textContent = img.alt;
  lightbox.classList.add('active');
}

// Otevření lightboxu po kliknutí na obrázek
images.forEach((img, i) => {
  img.addEventListener('click', () => showImage(i));
});

// Zavření lightboxu
function closeLightbox() {
  lightbox.classList.remove('active');
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

// Navigace šipkami
nextBtn.addEventListener('click', e => {
  e.stopPropagation();
  showImage(currentIndex + 1);
});

prevBtn.addEventListener('click', e => {
  e.stopPropagation();
  showImage(currentIndex - 1);
});

// Navigace klávesnicí
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
});
