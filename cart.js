const cartContainer = document.getElementById('cart-items');
const emptyText = document.querySelector('.cart-empty');
const checkoutBtn = document.getElementById('checkoutBtn');

function renderCart() {
    cartContainer.innerHTML = '';

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        emptyText.style.display = 'block';
        checkoutBtn.classList.add('disabled');
        checkoutBtn.disabled = true;
        return;
    }

    emptyText.style.display = 'none';
    checkoutBtn.classList.remove('disabled');
    checkoutBtn.disabled = false;

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');

        div.innerHTML = `
            <h3>${item.name}</h3>
            <span>£${item.price}</span>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;

        cartContainer.appendChild(div);
    });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

/* CHECKOUT LOGIC */
checkoutBtn.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) return;

    alert('✅ Checkout successful! Thank you for your purchase.');

    localStorage.removeItem('cart');

    window.location.href = 'index.html';
});

renderCart();