// Función para navegar entre categorías desde el select
function navigateCategory(url) {
    if (url) {
        window.location.href = url;
    }
}

// Funcionalidad de compra
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            alert(`Has agregado al carrito:\n${productName}\nPrecio: ${productPrice}`);
            // MODIFICAR: Aquí puedes agregar tu lógica de carrito personalizada
            // Por ejemplo: agregar a localStorage, enviar a un servidor, etc.
        });
    });
    
    // Animación de entrada para productos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});

// MODIFICAR: Puedes agregar más funcionalidades JavaScript aquí
// Por ejemplo: filtros de productos, búsqueda, carrito de compras, etc.
