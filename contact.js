// CONTACT FORM LOGIC
const form = document.getElementById('contactForm');
const statusText = document.querySelector('.form-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        statusText.textContent = '❌ Please fill in all fields.';
        statusText.style.color = '#f87171';
        return;
    }

    if (!email.includes('@')) {
        statusText.textContent = '❌ Please enter a valid email.';
        statusText.style.color = '#f87171';
        return;
    }

    statusText.textContent = '✅ Message sent successfully.';
    statusText.style.color = '#34d399';
    form.reset();
});


// ===============================
// INSTAGRAM INTERACTION
// ===============================

const instagramLink = document.querySelector('.instagram a');

// Fade-in animation on load
window.addEventListener('load', () => {
    instagramLink.style.opacity = '0';
    instagramLink.style.transition = 'opacity 0.6s ease';

    setTimeout(() => {
        instagramLink.style.opacity = '1';
    }, 300);
});

// Click tracking (realistic frontend behavior)
instagramLink.addEventListener('click', () => {
    console.log('Instagram link clicked');
});

// Double-click to copy handle
instagramLink.addEventListener('dblclick', (e) => {
    e.preventDefault();

    const handle = '@urbanwear';
    navigator.clipboard.writeText(handle);

    statusText.textContent = '📋 Instagram handle copied!';
    statusText.style.color = '#c9a96a';

    setTimeout(() => {
        statusText.textContent = '';
    }, 2000);
});