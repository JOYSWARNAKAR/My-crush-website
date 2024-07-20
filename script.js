document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.querySelector('.message');
    const crushName = prompt("What's your crush's name?");
    
    if (crushName) {
        messageElement.textContent = `Hi ${crushName}, You make my heart skip a beat!`;
    }
});