import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/como-funciona', label: 'Como Funciona' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

const WHATSAPP = '5551995435251'

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Velomaicon Velocímetros" className="h-14 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Especialistas em reparo e manutenção de painéis de velocímetro e computadores de bordo para carros, motos e embarcações.
            </p>
            <p className="mt-3 text-brand-orange text-sm font-semibold">
              📦 Atendemos todo o Brasil via envio postal
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/velomaicon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/velomaicon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-brand-orange text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <span>Rua João Sarmento, 1538 — Caravaggio<br />Osório, RS</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+5551995435251" className="hover:text-brand-orange transition-colors">
                  (51) 99543-5251
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:contato@velomaicon.com.br" className="hover:text-brand-orange transition-colors">
                  contato@velomaicon.com.br
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-brand-card rounded-lg border border-brand-border text-xs text-gray-400">
              <strong className="text-white block mb-1">Horário de atendimento</strong>
              Seg – Sex: 08h às 18h<br />
              Sáb: 08h às 12h
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Velomaicon. Todos os direitos reservados.</p>
          <p>Desenvolvido com precisão técnica — Osório, RS 🇧🇷</p>
        </div>
      </div>
    </footer>
  )
}
