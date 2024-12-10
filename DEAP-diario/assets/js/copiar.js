function copiarAlPortapapeles(comando) {
    navigator.clipboard.writeText(comando).then(() => {
        const mensaje = document.getElementById('mensajeCopiado');
        mensaje.innerText = 'Copiado al portapapeles';
        mensaje.style.display = 'block';
        setTimeout(() => {
            mensaje.style.display = 'none';
        }, 2000);
    });
}
