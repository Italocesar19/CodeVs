function handleSupportOption(option) {
    const chatContent = document.getElementById('chat-content');
    
    // Adiciona a mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.textContent = getOptionText(option);
    chatContent.appendChild(userMessage);
    
    // Adiciona a resposta do bot com base na opção selecionada
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'bot');
    botMessage.textContent = getBotResponse(option);
    
    // Remove as opções após a seleção
    const chatOptions = document.querySelector('.chat-options');
    if (chatOptions) {
        chatOptions.remove();
    }
    
    // Adiciona a resposta do bot ao chat
    setTimeout(() => {
        chatContent.appendChild(botMessage);
        chatContent.scrollTop = chatContent.scrollHeight; // Rolagem automática para a nova mensagem
    }, 500);
}

// Função para obter o texto do botão selecionado
function getOptionText(option) {
    switch (option) {
        case 'meu-pet-esta-doente':
            return 'Meu pet está doente';
        case 'achei-pet-perdido':
            return 'Achei um pet perdido';
        case 'problemas-conta':
            return 'Estou com problemas na minha conta';
        default:
            return '';
    }
}

// Função para obter a resposta do bot
function getBotResponse(option) {
    switch (option) {
        case 'meu-pet-esta-doente':
            return 'Entendemos que seu pet está doente. Recomendamos que você agende uma consulta com um de nossos veterinários especializados. Por favor, entre em contato pelo número (XX) XXXXX-XXXX para suporte imediato.';
        case 'achei-pet-perdido':
            return 'Você encontrou um pet perdido? Agradecemos pela sua preocupação! Entre em contato com nossa equipe para que possamos ajudar a localizar o tutor do animal. Você pode também trazer o pet até nossa loja mais próxima.';
        case 'problemas-conta':
            return 'Se você está com problemas em sua conta, nossa equipe de suporte pode ajudar. Verifique se suas informações estão corretas e tente novamente. Se o problema persistir, entre em contato pelo e-mail suporte@chekpet.com.';
        default:
            return 'Por favor, selecione uma opção válida.';
    }
}

// Função para enviar uma mensagem personalizada pelo usuário
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessageText = inputField.value.trim();
    if (userMessageText === '') return; // Não envia mensagem vazia
    
    const chatContent = document.getElementById('chat-content');
    
    // Adiciona a mensagem do usuário no chat
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.textContent = userMessageText;
    chatContent.appendChild(userMessage);
    
    inputField.value = ''; // Limpa o campo de entrada
    
    // Resposta do bot
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'bot');
    botMessage.textContent = 'Obrigado pela sua mensagem! Nossa equipe de suporte analisará e responderá em breve.';
    
    setTimeout(() => {
        chatContent.appendChild(botMessage);
        chatContent.scrollTop = chatContent.scrollHeight; // Rolagem automática
    }, 500);
}

// Envia a mensagem ao clicar no botão "Enviar"
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessageText = inputField.value.trim();
    if (userMessageText === '') return; // Não envia mensagem vazia
    
    const chatContent = document.getElementById('chat-content');
    
    // Adiciona a mensagem do usuário no chat
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user');
    userMessage.textContent = userMessageText;
    chatContent.appendChild(userMessage);
    
    inputField.value = ''; // Limpa o campo de entrada
    
    // Resposta do bot
    const botMessage = document.createElement('div');
    botMessage.classList.add('chat-message', 'bot');
    botMessage.textContent = 'Obrigado pela sua mensagem! Nossa equipe de suporte analisará e responderá em breve.';
    
    setTimeout(() => {
        chatContent.appendChild(botMessage);
        chatContent.scrollTop = chatContent.scrollHeight; // Rolagem automática
    }, 500);
}

// Evento para detectar "Enter" e enviar a mensagem
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
        event.preventDefault(); // Evita que o "Enter" insira uma nova linha no campo de texto
    }
});