import { useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import Inscription from '../components/Inscription'

const WHATSAPP = '5551995435251'

const socials = [
  { icon: Instagram, label: 'Instagram', handle: '@velomaicon', href: 'https://instagram.com/velomaicon', color: 'hover:text-pink-400 hover:border-pink-400' },
  { icon: Facebook, label: 'Facebook', handle: 'Velomaicon', href: 'https://facebook.com/velomaicon', color: 'hover:text-blue-400 hover:border-blue-400' },
  { icon: MessageCircle, label: 'WhatsApp', handle: '(51) 99543-5251', href: `https://wa.me/${WHATSAPP}`, color: 'hover:text-green-400 hover:border-green-400' },
]

function useScrollAnimation() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Contact() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <Inscription className="justify-center mb-4">Orçamento sem compromisso</Inscription>
          <h1 className="text-4xl md:text-5xl text-brand-ink mb-4">
            Entre em <span className="text-brand-orange">contato</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl mx-auto">
            Descreva o problema do seu painel e receba um orçamento sem compromisso. Atendemos todo o Brasil.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-bold text-white mb-6">Solicitar orçamento</h2>
              <div className="card-dark p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-2xl font-bold text-white">Informações de contato</h2>

              {/* Contact cards */}
              <div className="space-y-4">
                <div className="card-dark p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Endereço</p>
                    <p className="text-gray-400 text-sm">Rua João Sarmento, 1538 — Caravaggio<br />Osório, RS — CEP 95520-000</p>
                    <p className="text-gray-500 text-xs mt-1">📦 Recebemos peças de todo o Brasil via Correios e transportadora</p>
                  </div>
                </div>

                <div className="card-dark p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Telefone / WhatsApp</p>
                    <a href="tel:+5551995435251" className="text-gray-400 text-sm hover:text-brand-orange transition-colors">
                      (51) 99543-5251
                    </a>
                  </div>
                </div>

                <div className="card-dark p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">E-mail</p>
                    <a href="mailto:contato@velomaicon.com.br" className="text-gray-400 text-sm hover:text-brand-orange transition-colors">
                      contato@velomaicon.com.br
                    </a>
                  </div>
                </div>

                <div className="card-dark p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Horário de atendimento</p>
                    <p className="text-gray-400 text-sm">Segunda a Sexta: 08h às 18h</p>
                    <p className="text-gray-400 text-sm">Sábado: 08h às 12h</p>
                    <p className="text-gray-500 text-xs mt-1">Mensagens fora do horário respondidas no próximo dia útil</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-white font-semibold mb-4">Redes sociais</p>
                <div className="flex flex-col gap-3">
                  {socials.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`card-dark p-4 flex items-center gap-4 transition-all border border-brand-border ${s.color}`}
                    >
                      <s.icon className="w-5 h-5 shrink-0" />
                      <div>
                        <p className="text-white font-medium text-sm">{s.label}</p>
                        <p className="text-gray-500 text-xs">{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div>
                <p className="text-white font-semibold mb-4">Localização — Osório, RS</p>
                <div className="card-dark rounded-2xl overflow-hidden h-52 flex items-center justify-center border border-brand-border">
                  <iframe
                    title="Velomaicon no mapa"
                    src="https://maps.google.com/maps?q=Rua+João+Sarmento,+1538,+Caravaggio,+Osório+-+RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
