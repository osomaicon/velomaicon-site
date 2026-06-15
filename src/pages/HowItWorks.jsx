import { useEffect, useRef } from 'react'
import {
  MessageCircle, PackageOpen, Truck, Wrench, PackageCheck,
  AlertTriangle, CreditCard, Clock
} from 'lucide-react'
import StepCard from '../components/StepCard'
import CTAButton from '../components/CTAButton'
import Inscription from '../components/Inscription'

const steps = [
  {
    icon: MessageCircle,
    title: 'Entre em contato',
    description: 'Fale com a gente pelo WhatsApp e envie fotos ou um vídeo do problema no seu painel, velocímetro ou computador de bordo. Isso nos ajuda a fazer um diagnóstico inicial mais preciso e te orientar sobre o envio.',
  },
  {
    icon: PackageOpen,
    title: 'Envie seu painel',
    description: 'Embale a peça com cuidado e envie pelo correio para o seguinte endereço:',
    address: 'Rua João Sarmento, 1538 — Bairro Caravaggio\nOsório – RS',
    note: 'Atendemos todo o Brasil.',
  },
  {
    icon: Wrench,
    title: 'Diagnóstico e reparo',
    description: 'Nossa equipe avalia a peça, identifica o problema com precisão e realiza o conserto com peças e técnicas adequadas.',
  },
  {
    icon: PackageCheck,
    title: 'Receba de volta',
    description: 'Após o reparo, testamos tudo e enviamos sua peça de volta pelo correio, pronta para instalar.',
  },
]

const tips = [
  { icon: AlertTriangle, text: 'Nunca use envelope ou plástico de bolha simples sem caixa — peças frágeis como displays podem quebrar no transporte.' },
  { icon: PackageOpen, text: 'Use plástico-bolha em volta de toda a peça, depois acomode em caixa rígida com preenchimento (jornal, isopor ou espuma).' },
  { icon: Truck, text: 'Declare o valor real da peça no envio. Em caso de extravio, você só é ressarcido pelo valor declarado.' },
  { icon: MessageCircle, text: 'Sempre coloque seu nome, telefone e uma breve descrição do problema dentro da caixa.' },
]

const payments = [
  { label: 'PIX', desc: 'Transferência instantânea' },
  { label: 'Cartão de Crédito', desc: 'Em até 12x via link' },
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

export default function HowItWorks() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <Inscription className="justify-center mb-4">Do envio à devolução</Inscription>
          <h1 className="text-4xl md:text-5xl text-brand-ink mb-4">
            Como <span className="text-brand-orange">funciona</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl mx-auto">
            Atendemos todo o Brasil via envio postal. O processo é simples, seguro e você acompanha cada etapa pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10 animate-on-scroll">Passo a passo do processo</h2>
          <div className="animate-on-scroll">
            {steps.map((step, i) => (
              <StepCard key={step.title} number={i + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Packaging tips */}
      <section className="section-padding bg-brand-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Dicas de embalagem</h2>
            <p className="text-gray-400">Para garantir que sua peça chegue em perfeitas condições.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="animate-on-scroll card-dark p-5 flex gap-4" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <tip.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines & payment */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Prazo */}
            <div className="animate-on-scroll card-dark p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="text-white font-bold text-lg">Prazos médios</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex justify-between border-b border-brand-border pb-3">
                  <span>Reparo simples (ponteiro, iluminação)</span>
                  <span className="text-white font-medium">3–5 dias úteis</span>
                </li>
                <li className="flex justify-between border-b border-brand-border pb-3">
                  <span>Reparo de display / placa eletrônica</span>
                  <span className="text-white font-medium">5–8 dias úteis</span>
                </li>
                <li className="flex justify-between">
                  <span>Reparo complexo / múltiplos defeitos</span>
                  <span className="text-white font-medium">8–12 dias úteis</span>
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-4">* Prazos a partir do recebimento da peça. Não inclui transporte.</p>
            </div>

            {/* Payment */}
            <div className="animate-on-scroll card-dark p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="text-white font-bold text-lg">Formas de pagamento</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {payments.map(p => (
                  <div key={p.label} className="bg-brand-dark rounded-xl p-4 border border-brand-border">
                    <p className="text-white font-semibold text-sm">{p.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{p.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4">* Pagamento confirmado antes do envio de retorno da peça.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-surface border-t border-brand-border">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Pronto para começar?</h2>
          <p className="text-gray-400 mb-8">Fale com nossos técnicos agora e receba orientações personalizadas para o seu caso.</p>
          <CTAButton size="lg" label="Iniciar Orçamento pelo WhatsApp" />
        </div>
      </section>
    </div>
  )
}
