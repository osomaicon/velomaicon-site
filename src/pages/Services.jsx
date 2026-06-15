import { useEffect, useRef } from 'react'
import {
  Gauge, Activity, Fuel, Lightbulb, Monitor, CircuitBoard,
  Zap, Smartphone, Layers, Anchor, Thermometer, RotateCcw,
  PackageOpen, Truck, ShieldCheck
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import CTAButton from '../components/CTAButton'

const categories = [
  {
    title: 'Automóveis',
    icon: '🚗',
    services: [
      { icon: Gauge, title: 'Painel de Instrumentos', description: 'Reparo completo do painel, incluindo ponteiros, retroiluminação, motores de passo e eletrônica interna.' },
      { icon: Activity, title: 'Velocímetro e Conta-Giros', description: 'Calibração e conserto de velocímetros analógicos e digitais, e conta-giros com defeito ou imprecisão.' },
      { icon: Fuel, title: 'Marcador de Combustível', description: 'Reparo de marcadores de nível que estão travados, com leitura errada ou que não funcionam.' },
      { icon: Lightbulb, title: 'Iluminação do Painel', description: 'Substituição e reparo de iluminação interna, LEDs e luzes indicadoras apagadas ou piscando.' },
      { icon: Monitor, title: 'Displays e Telas', description: 'Reparo e substituição de displays LCD, OLED e telas de computadores de bordo danificados.' },
      { icon: CircuitBoard, title: 'Placas Eletrônicas', description: 'Diagnóstico e reparo de placas eletrônicas internas do painel com curto, componentes queimados ou corrosão.' },
    ],
  },
  {
    title: 'Motos',
    icon: '🏍️',
    services: [
      { icon: Gauge, title: 'Velocímetro Analógico', description: 'Reparo de velocímetros de cabo e eletrônicos para motos com agulha travada, parada ou com leitura errada.' },
      { icon: Smartphone, title: 'Painel Digital Multifuncional', description: 'Reparo de painéis digitais completos com falhas de display, botões, conexões e software.' },
      { icon: Monitor, title: 'Display LCD/TFT', description: 'Substituição e reparo de telas e displays que apagaram, mancharam ou perderam luminosidade.' },
      { icon: Zap, title: 'Sensores e Sinalizadores', description: 'Diagnóstico e reparo de sensores de velocidade, temperatura, combustível e indicadores de marcha.' },
      { icon: Layers, title: 'Painéis Multimarca', description: 'Atendimento para Honda, Yamaha, Kawasaki, Suzuki, BMW, KTM, Ducati e outras marcas.' },
    ],
  },
  {
    title: 'Náutica',
    icon: '⚓',
    services: [
      { icon: Anchor, title: 'Painel Náutico Completo', description: 'Reparo de painéis de instrumentos para barcos, lanchas e jet-skis com defeitos elétricos ou mecânicos.' },
      { icon: Activity, title: 'Velocímetro Náutico', description: 'Conserto de velocímetros para embarcações com leitura incorreta, agulha travada ou display danificado.' },
      { icon: Fuel, title: 'Indicador de Combustível', description: 'Reparo de medidores de nível de combustível para embarcações com falha de leitura ou sensor.' },
      { icon: Thermometer, title: 'Temperatura e Rotação', description: 'Conserto de medidores de temperatura do motor e conta-giros náuticos com defeito.' },
      { icon: RotateCcw, title: 'Horímetros e Totalizadores', description: 'Reparo de horímetros e contadores de uso para embarcações com parada ou leitura errada.' },
    ],
  },
]

const sendSteps = [
  { icon: PackageOpen, title: 'Embale com cuidado', description: 'Use caixa resistente, envolva o painel em plástico-bolha e preencha os espaços com jornal ou esponja. Nunca use envelope simples.' },
  { icon: Truck, title: 'Envie para Osório, RS', description: 'Você pode usar Correios (PAC ou SEDEX), Jadlog, Total Express ou qualquer transportadora. Solicite o endereço completo via WhatsApp.' },
  { icon: ShieldCheck, title: 'Declare o valor correto', description: 'Sempre declare o valor real da peça no envio. Isso garante ressarcimento em caso de extravio. Guarde o código de rastreamento.' },
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

export default function Services() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reparo especializado para painéis, velocímetros e computadores de bordo de qualquer marca e modelo. Recebemos de todo o Brasil.
          </p>
        </div>
      </section>

      {/* Services by category */}
      {categories.map((cat, ci) => (
        <section key={cat.title} className={`section-padding ${ci % 2 === 1 ? 'bg-brand-surface' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-10 animate-on-scroll">
              <span className="text-4xl">{cat.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{cat.title}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.services.map((s, i) => (
                <div key={s.title} className="animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <ServiceCard {...s} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Send process */}
      <section className="section-padding bg-brand-surface border-t border-brand-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-4">Como enviar sua peça</h2>
            <p className="text-gray-400">Dicas para garantir que seu painel chegue seguro até nós em Osório, RS.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {sendSteps.map((s, i) => (
              <div key={s.title} className="animate-on-scroll card-dark p-6" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center animate-on-scroll">
            <p className="text-gray-300 mb-6">Dúvidas sobre o processo? Fale diretamente com nossos técnicos.</p>
            <CTAButton size="lg" label="Pedir Orçamento Agora" />
          </div>
        </div>
      </section>
    </div>
  )
}
