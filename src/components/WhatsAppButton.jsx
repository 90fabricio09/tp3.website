import './WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351963782766?text=Olá! Gostaria de mais informações sobre os serviços da TP3."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Falar pelo WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}

export default WhatsAppButton;
