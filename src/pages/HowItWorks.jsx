import { useEffect, useRef, useState } from 'react'
import {
  MessageCircle, PackageOpen, Wrench, PackageCheck,
  AlertTriangle, Truck, CreditCard, Clock, MapPin, Copy, Check
} from 'lucide-react'
import CTAButton from '../components/CTAButton'
import Inscription from '../components/Inscription'

const ADDRESS_LINES = ['Rua João Sarmento, 1538 — Bairro Caravaggio', 'Osório – RS · CEP 95520-000']
const ADDRESS_COPY = 'Velomaicon — Rua João Sarmento, 1538, Bairro Caravaggio, Osório – RS, CEP 95520-000'

// The 4 stations of the part's round trip: you → bench → you.
const steps = [
  {
    icon: MessageCircle,
    leg: 'Ida',
    title: 'Entre em contato',
    description: 'Fale com a gente pelo WhatsApp e envie fotos ou um vídeo do problema. Isso nos ajuda a fazer um diagnóstico inicial mais preciso e te orientar sobre o envio.',
  },
  {
    icon: PackageOpen,
    leg: 'Ida',
    title: 'Envie seu painel',
    description: 'Embale a peça com cuidado e envie pelo correio para a nossa bancada em Osório. O endereço completo está logo abaixo.',
  },
  {
    icon: Wrench,
    leg: 'Volta',
    title: 'Diagnóstico e reparo',
    description: 'Nossa equipe avalia a peça, identifica o problema com precisão e realiza o conserto com peças e técnicas adequadas.',
  },
  {
    icon: PackageCheck,
    leg: 'Volta',
    title: 'Receba de volta',
    description: 'Após o reparo, testamos tudo e enviamos sua peça de volta pelo correio, pronta para instalar.',
  },
]

const tips = [
  { icon: AlertTriangle, text: 'Nunca use envelope ou plástico-bolha sem caixa — peças frágeis como displays podem quebrar no transporte.' },
  { icon: PackageOpen, text: 'Envolva toda a peça em plástico-bolha e acomode em caixa rígida com preenchimento (jornal, isopor ou espuma).' },
  { icon: Truck, text: 'Declare o valor real da peça no envio. Em caso de extravio, você só é ressarcido pelo valor declarado.' },
  { icon: MessageCircle, text: 'Coloque seu nome, telefone e uma breve descrição do problema dentro da caixa.' },
]

const prazos = [
  { label: 'Reparo simples (ponteiro, iluminação)', value: '3–5 dias úteis' },
  { label: 'Reparo de display / placa eletrônica', value: '5–8 dias úteis' },
  { label: 'Reparo complexo / múltiplos defeitos', value: '8–12 dias úteis' },
]

const payments = [
  { label: 'PIX', desc: 'Transferência instantânea' },
  { label: 'Cartão de crédito', desc: 'Em até 12x via link' },
  { label: 'Transferência', desc: 'TED / DOC' },
  { label: 'Boleto', desc: 'Prazo de 3 dias úteis' },
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

function CopyAddressButton() {
  const [copied, setCopied] = useState(false)
  const onCopy = () => {
    navigator.clipboard?.writeText(ADDRESS_COPY)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={onCopy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-brand-bezel text-brand-ink text-sm font-medium hover:border-brand-orange hover:text-brand-orange transition-colors"
    >
      {copied ? <><Check className="w-4 h-4 text-brand-orange" /> Endereço copiado</> : <><Copy className="w-4 h-4" /> Copiar endereço</>}
    </button>
  )
}

export default function HowItWorks() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <Inscription className="justify-center mb-4">O trajeto da sua peça</Inscription>
          <h1 className="text-4xl md:text-5xl text-brand-ink mb-4">
            Como <span className="text-brand-orange">funciona</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl mx-auto">
            Atendemos todo o Brasil via envio postal. Sua peça faz uma viagem de ida e volta — e
            você acompanha cada etapa pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* The route — 4 stations */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <Inscription className="mb-10 animate-on-scroll">Quatro paradas, ida e volta</Inscription>

          <ol className="relative grid gap-12 md:grid-cols-4 md:gap-6 animate-on-scroll">
            {/* Route line behind the station nodes (desktop) */}
            <div
              aria-hidden
              className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-brand-border"
            />
            {steps.map((step, i) => (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                {/* Station node */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-brand-dark border border-brand-bezel flex items-center justify-center mb-5">
                  <span className="font-display font-semibold text-xl text-brand-orange">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="inscription text-[10px] text-brand-silver mb-3">{step.leg}</span>
                <step.icon className="w-6 h-6 text-brand-orange mb-3" strokeWidth={1.75} />
                <h3 className="text-brand-ink font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-brand-silver text-sm leading-relaxed max-w-xs">{step.description}</p>
              </li>
            ))}
          </ol>

          {/* Shipping address — promoted to its own callout */}
          <div className="animate-on-scroll mt-14 tile border-l-2 border-l-brand-orange p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-start gap-4 flex-1">
              <MapPin className="w-7 h-7 text-brand-orange shrink-0 mt-0.5" strokeWidth={1.75} />
              <div>
                <p className="inscription text-[11px] text-brand-silver mb-2">Endereço para envio</p>
                <p className="font-mono text-base md:text-lg text-brand-ink leading-relaxed">
                  {ADDRESS_LINES[0]}<br />{ADDRESS_LINES[1]}
                </p>
                <p className="text-brand-silver text-sm mt-2">Atendemos todo o Brasil pelos Correios.</p>
              </div>
            </div>
            <div className="shrink-0">
              <CopyAddressButton />
            </div>
          </div>
        </div>
      </section>

      {/* Packaging tips */}
      <section className="section-padding bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 animate-on-scroll">
            <Inscription className="mb-3">Antes de despachar</Inscription>
            <h2 className="text-2xl md:text-3xl text-brand-ink">Como embalar com segurança</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="animate-on-scroll tile p-5 flex gap-4" style={{ transitionDelay: `${i * 0.08}s` }}>
                <tip.icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-brand-silver text-sm leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines & payment */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Prazos — spec plate */}
          <div className="animate-on-scroll tile p-7">
            <div className="flex items-center gap-3 mb-5">
              <Clock className="w-5 h-5 text-brand-orange" strokeWidth={1.75} />
              <h3 className="text-brand-ink font-display font-semibold text-lg">Prazos médios de reparo</h3>
            </div>
            <ul className="divide-y divide-brand-border">
              {prazos.map(p => (
                <li key={p.label} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="text-brand-silver">{p.label}</span>
                  <span className="font-mono text-brand-ink whitespace-nowrap">{p.value}</span>
                </li>
              ))}
            </ul>
            <p className="text-brand-silver/70 text-xs mt-4">A partir do recebimento da peça. Não inclui transporte.</p>
          </div>

          {/* Payment */}
          <div className="animate-on-scroll tile p-7">
            <div className="flex items-center gap-3 mb-5">
              <CreditCard className="w-5 h-5 text-brand-orange" strokeWidth={1.75} />
              <h3 className="text-brand-ink font-display font-semibold text-lg">Formas de pagamento</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {payments.map(p => (
                <div key={p.label} className="bg-brand-surface rounded-md p-4 border border-brand-border">
                  <p className="text-brand-ink font-medium text-sm">{p.label}</p>
                  <p className="text-brand-silver/80 text-xs mt-0.5">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-brand-silver/70 text-xs mt-4">Confirmado antes do envio de retorno da peça.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-surface border-t border-brand-border">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl text-brand-ink mb-4">Pronto para começar?</h2>
          <p className="text-brand-silver mb-8">Fale com a equipe agora e receba orientações para o seu caso.</p>
          <CTAButton size="lg" label="Iniciar orçamento pelo WhatsApp" />
        </div>
      </section>
    </div>
  )
}
