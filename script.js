document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо за заказ в AndShirt! Мы свяжемся с вами в ближайшее время.');
    e.target.reset(); // Очистить форму
});
