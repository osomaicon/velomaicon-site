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
    lg: 'px-7 py-3.5 text-base gap-2',
  }

  // Primary reads like a lit key on the dashboard; outline is an unlit bezel control.
  const variants = {
    primary: 'bg-brand-orange hover:bg-brand-orange-dark text-brand-dark backlight',
    outline: 'border border-brand-bezel text-brand-ink hover:border-brand-orange hover:text-brand-orange',
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center font-semibold rounded-md transition-colors duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      {label}
    </a>
  )
}
