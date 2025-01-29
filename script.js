document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userMessage = document.getElementById('user-message').value;
    if (userMessage.trim() !== "") {
        addMessageToChat(userMessage);
        document.getElementById('user-message').value = ''; // Clear the input field
    }
});

function addMessageToChat(message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
