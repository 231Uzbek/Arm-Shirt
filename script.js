// 1. Счётчик корзины
let count = 0;
const cartDisplay = document.getElementById('cart-count');

// 2. Оживляем кнопки "В корзину"
// Мы используем делегирование, чтобы кнопки работали, даже если их много
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('buy-btn')) {
        count++;
        if (cartDisplay) {
            cartDisplay.innerText = count;
        }
        alert('Товар AndShirt добавлен в корзину! Всего: ' + count);
    }
});

// 3. Отправка заказа в Telegram
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // ВСТАВЬ СВОИ ДАННЫЕ СЮДА:
        const token = "8674173226:AAGztTss8Jsyw_HvMdxfHMelaasvl1s4gVM"; // Твой токен из скриншота
        const chatId = "7843555955"; // Твой ID от userinfobot

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        const message = `🛍 НОВЫЙ ЗАКАЗ!\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n🛒 Товаров в корзине: ${count}`;

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

        fetch(url)
            .then(res => {
                if(res.ok) {
                    alert('Заказ успешно отправлен! Ждите звонка.');
                    orderForm.reset();
                    count = 0; // Сбрасываем корзину после заказа
                    cartDisplay.innerText = count;
                } else {
                    alert('Ошибка отправки. Проверьте настройки бота.');
                }
            })
            .catch(err => alert('Ошибка сети. Попробуйте позже.'));
    });
}
