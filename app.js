document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();

    if (messageText) {
        displayMessage(messageText, 'user');
        input.value = '';

        setTimeout(() => {
            const botResponse = getBotResponse(messageText);
            displayMessage(botResponse, 'bot');
        }, 1000);
    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function getBotResponse(input) {
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you?": "I'm just a bot, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
        "default": "Sorry, I didn't understand that.",
        "who are you?": "i am jack",
        "ok": "ok"
    };
    const lowerInput = input.toLowerCase();
    return responses[lowerInput] || responses["default"];
}