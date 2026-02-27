let count = 0;
const cartDisplay = document.getElementById('cart-count');

document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartDisplay.innerText = count;
        alert('Ура! Товар AndShirt добавлен в корзину.');
    });
});
