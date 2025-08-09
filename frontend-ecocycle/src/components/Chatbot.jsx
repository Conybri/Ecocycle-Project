import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: '¡Hola! Soy EcoBot, tu asistente virtual. ¿En qué puedo ayudarte hoy?', isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const botResponses = [
    '¡Gracias por tu mensaje! ¿Te gustaría saber más sobre cómo funciona EcoCycle?',
    'Puedo ayudarte con información sobre reciclaje, puntos y recompensas.',
    '¿Necesitas ayuda para registrarte en nuestra plataforma?',
    'Te puedo explicar cómo conectarte con empresas de reciclaje cercanas.',
    '¿Tienes alguna pregunta específica sobre el proceso de reciclaje?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, { text: inputValue, isUser: true }];
      setMessages(newMessages);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <button 
        className="chatbot-btn" 
        onClick={toggleChatbot}
        aria-label="Abrir chatbot"
      >
        💬
      </button>
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>EcoBot</h4>
            <button 
              className="chatbot-close" 
              onClick={toggleChatbot}
              aria-label="Cerrar chatbot"
            >
              ×
            </button>
          </div>
          
          <div className="chatbot-body">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`chatbot-message ${message.isUser ? 'user-message' : 'bot-message'}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
