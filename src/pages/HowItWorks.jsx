import { useEffect, useRef } from 'react'
import {
  MessageCircle, PackageOpen, Truck, Wrench, PackageCheck,
  AlertTriangle, CreditCard, Clock
} from 'lucide-react'
import StepCard from '../components/StepCard'
import CTAButton from '../components/CTAButton'

const steps = [
  {
    icon: MessageCircle,
    title: 'Entre em contato via WhatsApp ou formulário',
    description: 'Descreva o problema do seu painel — velocímetro parado, display apagado, marcador de combustível travado, etc. Envie fotos se possível. Nossa equipe responde rapidamente com orientações iniciais e uma estimativa de orçamento.',
  },
  {
    icon: PackageOpen,
    title: 'Embale a peça com segurança',
    description: 'Após confirmar o orçamento, embale o painel em plástico-bolha, coloque dentro de uma caixa resistente e preencha os espaços com jornal ou espuma. Identifique a caixa com seu nome e telefone dentro do pacote.',
  },
  {
    icon: Truck,
    title: 'Envie para Osório, RS',
    description: 'Envie via Correios (PAC ou SEDEX), Jadlog, Total Express ou qualquer transportadora de sua preferência. O endereço completo para envio é fornecido via WhatsApp. Guarde o código de rastreamento e nos informe.',
  },
  {
    icon: Wrench,
    title: 'Diagnóstico, reparo e testes',
    description: 'Ao receber a peça, nossos técnicos realizam diagnóstico completo, identificam todos os pontos com defeito e executam o reparo com peças de qualidade. Cada painel passa por testes rigorosos antes de ser liberado.',
  },
  {
    icon: PackageCheck,
    title: 'Devolução com garantia',
    description: 'Seu painel volta embalado com segurança, acompanhado de nota fiscal e garantia por escrito. Você recebe o código de rastreamento assim que o despacho é realizado. Prazo médio de reparo: 5 a 10 dias úteis.',
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
