function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('nav-active');
}

// BO'LIM TANLANGANDA MENYUNI AVTOMATIK YOPISH
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('navLinks');
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
        }
    });
});

// Intersection Observer kodingiz (Scroll animatsiya)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)"; // Telefonda masofani qisqartirdik
    observer.observe(section);
});
