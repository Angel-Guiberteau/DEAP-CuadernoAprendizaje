const searchInput = document.querySelector('header input');
searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    const horizontalRules = document.querySelectorAll('hr');

    let visibleSections = 0;

    sections.forEach((section, index) => {
        const textContent = section.textContent.toLowerCase();
        if (textContent.includes(query)) {
            section.style.display = 'block';
            if (horizontalRules[index]) {
                horizontalRules[index].style.display = 'block';
            }
            visibleSections++;
        } else {
            section.style.display = 'none';
            if (horizontalRules[index]) {
                horizontalRules[index].style.display = 'none';
            }
        }
    });

    // Ocultar última <hr> si no hay resultados visibles
    if (visibleSections === 0 && horizontalRules.length > sections.length) {
        horizontalRules[horizontalRules.length - 1].style.display = 'none';
    }
});
