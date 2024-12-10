const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.carousel-indicators');
let activeIndex = 1;  // Iniciar el carrusel en el segundo elemento (índice 1)

// Actualizar los indicadores para reflejar el slide activo
function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    indicators.forEach((indicator, index) => {
        if (index === activeIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Ir al slide específico
function goToSlide(index) {
    activeIndex = index;
    updateCarousel();
}

// Actualizar el carrusel (clase activa en el item y el título)
function updateCarousel() {
    items.forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    updateIndicators();
}

// Navegar al siguiente slide
function nextSlide() {
    activeIndex = (activeIndex + 1) % items.length;
    updateCarousel();
}

// Navegar al slide anterior
function prevSlide() {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateCarousel();
}

// Asignar los eventos a los botones de navegación
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Inicializar el carrusel
updateIndicators();
updateCarousel();  // Asegura que el carrusel se actualice al cargar la página
