function copyToClipboard(command) {
    navigator.clipboard.writeText(command).then(() => {
        const message = document.getElementById('copyMessage');
        message.innerText = 'Copiado al portapapeles';
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    });
}