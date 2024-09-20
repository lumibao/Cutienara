function displayMessage() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
    if (!message.classList.contains('hidden')) {
        message.style.animation = 'fadeIn 1s ease-in-out';
    }
}
