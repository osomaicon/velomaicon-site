import { MessageCircle } from 'lucide-react'

const WHATSAPP = '5551995435251'

export default function CTAButton({
  label = 'Solicitar Orçamento',
  message = 'Olá! Gostaria de um orçamento para reparo de painel.',
  size = 'md',
  className = '',
  variant = 'primary',
}) {
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2',
  }

  const variants = {
    primary: 'bg-brand-orange hover:bg-brand-orange-dark text-white glow hover:glow',
    outline: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      {label}
    </a>
  )
}
