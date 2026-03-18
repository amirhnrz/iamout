const about = document.querySelector('.about-content');
about.style.opacity = 0;
about.style.transform = 'translateY(20px)';

window.addEventListener('load', () => {
    about.style.transition = 'all 0.6s ease';
    about.style.opacity = 1;
    about.style.transform = 'translateY(0)';
});