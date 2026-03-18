function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const countElements = document.querySelectorAll('.cart-count');

    countElements.forEach(el => {
        el.textContent = cart.length;
    });
}

updateCartCount();