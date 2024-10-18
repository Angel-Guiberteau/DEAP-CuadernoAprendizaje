// Función para aplicar el modo claro o oscuro según la preferencia del usuario
function aplicarModoPorDefecto() {
  const modoOscuroPreferido = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Comprobar si hay una preferencia guardada en localStorage
  const modoGuardado = localStorage.getItem('modo');

  if (modoGuardado === 'oscuro' || (modoGuardado === null && modoOscuroPreferido.matches)) {
    document.body.classList.add('modo-oscuro'); // Activa el modo oscuro
  } else {
    document.body.classList.remove('modo-oscuro'); // Activa el modo claro
  }
}

// Ejecutar al cargar la página
aplicarModoPorDefecto();

// Escuchar cambios en la preferencia de color del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (event.matches) {
    document.body.classList.add('modo-oscuro');
    localStorage.setItem('modo', 'oscuro'); // Guardar la preferencia
  } else {
    document.body.classList.remove('modo-oscuro');
    localStorage.setItem('modo', 'claro'); // Guardar la preferencia
  }
});

// Función para alternar entre modo claro y oscuro
function toggleModo() {
  document.body.classList.toggle('modo-oscuro');

  // Guardar la preferencia del usuario en localStorage
  if (document.body.classList.contains('modo-oscuro')) {
    localStorage.setItem('modo', 'oscuro');
  } else {
    localStorage.setItem('modo', 'claro');
  }
}

// Asignar el evento al botón de modo oscuro
const modoOscuroToggle = document.querySelector('.modo-oscuro-toggle');
modoOscuroToggle.addEventListener('click', toggleModo);

// Menú hamburguesa
const menuHamburguesa = document.getElementById('menuHamburguesa');
const navLinks = document.querySelector('.nav-links');

menuHamburguesa.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
