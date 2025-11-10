// === Actualizar año automáticamente ===
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// === Animación "reveal" suave al hacer scroll ===
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Observar todas las secciones y elementos con clase .reveal
document.querySelectorAll('section, .reveal').forEach(el => observer.observe(el));

// === Efecto hover animado en certificaciones ===
// Compatible con .cert-gallery y .cert-container
document.querySelectorAll('.cert-gallery img, .cert-container img').forEach(img => {
  img.addEventListener('mouseenter', () => img.classList.add('zoom'));
  img.addEventListener('mouseleave', () => img.classList.remove('zoom'));
});

// === Opcional: animar títulos h2 al aparecer ===
document.querySelectorAll('section h2').forEach(h2 => {
  h2.classList.add('reveal');
  observer.observe(h2);
});

