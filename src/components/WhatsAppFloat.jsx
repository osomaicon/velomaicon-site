import { MessageCircle } from 'lucide-react'

const WHATSAPP = '5551995435251'
const MESSAGE = 'Olá! Gostaria de um orçamento para reparo de painel.'

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-all duration-200 animate-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}
