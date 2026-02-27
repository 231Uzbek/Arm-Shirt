document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const cartDisplay = document.getElementById('cart-count');

    // Клик на любую кнопку "В корзину"
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('buy-btn')) {
            count++;
            if(cartDisplay) cartDisplay.innerText = count;
            alert('Товар добавлен! Всего в корзине: ' + count);
        }
    });

    // Форма заказа (Телеграм)
    const orderForm = document.getElementById('orderForm');
    if(orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Твой код отправки в телеграм...
            alert('Заказ отправлен!');
        });
    }
});
