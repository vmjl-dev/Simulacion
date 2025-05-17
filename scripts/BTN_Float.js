// Smooth scroll para el botón de "Volver arriba"
document.querySelectorAll('.nav-btn[href="#top"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Opcional: Ocultar/mostrar al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.querySelector('.float-nav');

    if (currentScroll > lastScroll) {
        // Scroll hacia abajo
        nav.style.opacity = '0.5';
        nav.style.transform = 'translateY(20px)';
    } else {
        // Scroll hacia arriba
        nav.style.opacity = '0.7';
        nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});