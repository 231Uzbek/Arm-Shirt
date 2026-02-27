let count = 0;
const cartDisplay = document.getElementById('cart-count');

// Считаем товары в корзине
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartDisplay.innerText = count;
        alert('Добавлено в корзину!');
    });
});

// Отправка данных в Telegram
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // ВСТАВЬ СВОИ ДАННЫЕ СЮДА:
    const token = "ВСТАВЬ_СЮДА_ТОКЕН_ОТ_BOTFATHER";
    const chatId = "ВСТАВЬ_СЮДА_ID_ОТ_USERINFOBOT";

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    const message = `🛍 НОВЫЙ ЗАКАЗ!\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🛒 Товаров выбрано: ${count}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url).then(res => {
        if(res.ok) {
            alert('Заказ отправлен! Проверь свой Telegram.');
            this.reset();
        }
    });
});
