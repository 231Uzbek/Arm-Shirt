let count = 0;
const cartDisplay = document.getElementById('cart-count');

// Логика кнопок "В корзину"
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartDisplay.innerText = count;
        alert('Добавлено в корзину!');
    });
});

// Логика формы заказа
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert('Спасибо, ' + name + '! Ваш заказ в AndShirt принят.');
    e.target.reset();
});
