const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatContainer = document.getElementById('chat-container');

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.classList.add(sender === 'user' ? 'user-msg' : 'jarvis-msg');
    msgDiv.textContent = text;
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleUserSubmit() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    userInput.value = '';

    // Simulate Jarvis response
    setTimeout(() => {
        let response = "I am processing your request, sir.";
        const lowerText = text.toLowerCase();
        
        if (lowerText.includes('hello') || lowerText.includes('hi')) {
            response = "Hello sir, all systems are fully operational.";
        } else if (lowerText.includes('status')) {
            response = "Power levels optimal. Network connection stable.";
        }
        
        addMessage(response, 'jarvis');
    }, 600);
}

sendBtn.addEventListener('click', handleUserSubmit);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserSubmit();
    }
});
