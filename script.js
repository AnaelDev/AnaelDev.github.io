// Menu Mobile Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Animation Notes de Musique
function createNote() {
    const background = document.getElementById('music-background');
    if (!background) return;

    const notes = ['♪', '♫', '♬', '♩'];
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerText = notes[Math.floor(Math.random() * notes.length)];
    
    note.style.left = Math.random() * 100 + "vw";
    note.style.animationDuration = Math.random() * 5 + 5 + "s";
    note.style.fontSize = Math.random() * 20 + 20 + "px";
    
    background.appendChild(note);

    setTimeout(() => {
        note.remove();
    }, 10000);
}

// Générer des notes régulièrement
setInterval(createNote, 500);

// Animation au défilement (Scroll Reveal basique)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .prof-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = '0.6s ease-out';
    observer.observe(el);
});