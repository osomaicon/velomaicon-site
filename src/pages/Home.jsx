import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Car, Bike, Anchor, ShieldCheck, Truck, Wrench, Clock, Star,
  ChevronRight, ArrowRight, Zap
} from 'lucide-react'
import CTAButton from '../components/CTAButton'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import logo from '../assets/logo.png'

const segments = [
  {
    icon: Car,
    title: 'Automóveis',
    description: 'Reparo de painéis, velocímetros, conta-giros, displays e computadores de bordo para carros de todas as marcas.',
  },
  {
    icon: Bike,
    title: 'Motos',
    description: 'Conserto de velocímetros digitais e analógicos, painéis multifuncionais e displays LCD para motos.',
  },
  {
    icon: Anchor,
    title: 'Náutica',
    description: 'Manutenção especializada de instrumentos para barcos e lanchas: velocímetros, RPM, temperatura e combustível.',
  },
]

const differentials = [
  { icon: Wrench, title: 'Diagnóstico Preciso', desc: 'Equipamentos modernos para identificar a causa exata do problema, sem achismos.' },
  { icon: ShieldCheck, title: 'Garantia do Serviço', desc: 'Todos os reparos saem com garantia por escrito. Sua tranquilidade é prioridade.' },
  { icon: Truck, title: 'Atendimento Nacional', desc: 'Recebemos peças de todo o Brasil via Correios ou transportadora. Simples e seguro.' },
  { icon: Clock, title: 'Prazo de Entrega', desc: 'Prazo justo e comunicação transparente em cada etapa do processo de reparo.' },
  { icon: Zap, title: 'Técnicos Especializados', desc: 'Anos de experiência exclusiva em instrumentação veicular e eletrônica embarcada.' },
  { icon: Star, title: 'Qualidade Comprovada', desc: 'Centenas de clientes satisfeitos em todo o Brasil atestam nossa qualidade.' },
]

const testimonials = [
  {
    name: 'Carlos Eduardo',
    city: 'São Paulo, SP',
    vehicle: 'Honda Civic',
    rating: 5,
    text: 'Enviei o painel do meu Civic pelos Correios e em menos de 10 dias recebi de volta, perfeito. Velocímetro e conta-giros funcionando como zero. Super recomendo!',
  },
  {
    name: 'Mariana Souza',
    city: 'Curitiba, PR',
    vehicle: 'Yamaha MT-07',
    rating: 5,
    text: 'O display da minha moto havia apagado completamente. A Velomaicon fez o diagnóstico rápido e o reparo foi impecável. Atendimento excelente do início ao fim.',
  },
  {
    name: 'Roberto Lima',
    city: 'Manaus, AM',
    vehicle: 'Lancha Focker 215',
    rating: 5,
    text: 'Pensava que teria que trocar o painel inteiro da minha lancha. A Velomaicon consertou tudo com um terço do preço. Profissionalismo total, mesmo atendendo do outro lado do Brasil.',
  },
  {
    name: 'Ana Paula Ferreira',
    city: 'Belo Horizonte, MG',
    vehicle: 'Fiat Toro',
    rating: 5,
    text: 'O computador de bordo da minha Toro estava com defeito. Mandei para Osório e voltou funcionando perfeitamente. Processo muito fácil e atendimento super atencioso.',
  },
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

export default function Home() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Deep instrument-cluster background */}
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(8,20,40,0.9),transparent)]" />

        {/* Signature element: speedometer arc SVG */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <svg
            viewBox="0 0 800 800"
            className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] opacity-[0.07]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer arc */}
            <path d="M 100 550 A 340 340 0 1 1 700 550" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
            {/* Inner arc */}
            <path d="M 150 565 A 280 280 0 1 1 650 565" stroke="#f97316" strokeWidth="1" strokeLinecap="round" />
            {/* Tick marks — major */}
            {Array.from({ length: 11 }).map((_, i) => {
              const angle = -225 + i * 27
              const rad = (angle * Math.PI) / 180
              const cx = 400, cy = 400, r1 = 330, r2 = 305
              const x1 = cx + r1 * Math.cos(rad), y1 = cy + r1 * Math.sin(rad)
              const x2 = cx + r2 * Math.cos(rad), y2 = cy + r2 * Math.sin(rad)
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
            })}
            {/* Tick marks — minor */}
            {Array.from({ length: 55 }).map((_, i) => {
              if (i % 5 === 0) return null
              const angle = -225 + i * 5.4
              const rad = (angle * Math.PI) / 180
              const cx = 400, cy = 400, r1 = 330, r2 = 318
              const x1 = cx + r1 * Math.cos(rad), y1 = cy + r1 * Math.sin(rad)
              const x2 = cx + r2 * Math.cos(rad), y2 = cy + r2 * Math.sin(rad)
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1" strokeLinecap="round" />
            })}
            {/* Center dot */}
            <circle cx="400" cy="400" r="8" fill="#f97316" />
            <circle cx="400" cy="400" r="20" stroke="#f97316" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-10 animate-fade-in">
            <img src={logo} alt="Velomaicon" className="h-24 md:h-32 w-auto drop-shadow-2xl" />
          </div>

          {/* Eyebrow */}
          <p className="font-display text-brand-orange tracking-[0.25em] text-sm uppercase mb-5 animate-fade-in">
            Osório, RS · Atendimento para Todo o Brasil
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-7 animate-slide-up">
            Seu painel de volta<br />
            <span className="text-brand-orange">funcionando.</span>
          </h1>

          <p className="text-lg text-brand-silver max-w-xl mx-auto mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Reparo especializado de velocímetros, painéis e computadores de bordo para carros, motos e embarcações. Você envia pelos Correios — nós devolvemos funcionando, com garantia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CTAButton size="lg" label="Solicitar Orçamento Grátis" />
            <Link
              to="/como-funciona"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand-silver border border-brand-border rounded-xl hover:border-brand-orange hover:text-white transition-all group"
            >
              Como funciona o envio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-14 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {[
              '✓ Diagnóstico preciso',
              '✓ Garantia por escrito',
              '✓ 26 estados atendidos',
              '✓ Prazo comunicado',
            ].map(item => (
              <span key={item} className="text-brand-silver text-sm font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="section-padding bg-brand-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Atendemos <span className="text-gradient">3 segmentos</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Expertise especializada para cada tipo de veículo, com diagnóstico e reparo precisos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((s, i) => (
              <div key={s.title} className="animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <ServiceCard {...s} highlight={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por que escolher a <span className="text-gradient">Velomaicon?</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Comprometidos com a qualidade técnica e a satisfação completa do cliente em cada reparo.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentials.map((d, i) => (
              <div key={d.title} className="animate-on-scroll card-dark p-5 flex gap-4 hover:border-brand-orange/40 transition-all" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <d.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{d.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="section-padding bg-brand-surface">
        <div className="max-w-5xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simples de enviar, <span className="text-gradient">fácil de receber de volta</span></h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Você embala a peça, envia pelos Correios ou transportadora, e nós cuidamos do resto. Seu painel chega de volta reparado com garantia.</p>
          <Link
            to="/como-funciona"
            className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:underline group"
          >
            Ver o processo completo
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que nossos <span className="text-gradient">clientes dizem</span></h2>
            <p className="text-gray-400">Avaliações reais de clientes de todo o Brasil.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div key={t.name} className="animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-to-br from-brand-orange/20 via-brand-surface to-brand-surface border-y border-brand-border">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para recuperar seu painel?</h2>
          <p className="text-gray-300 mb-8 text-lg">Fale com nossos especialistas agora pelo WhatsApp e receba um orçamento sem compromisso.</p>
          <CTAButton size="lg" label="Falar com Especialista" />
          <p className="text-gray-500 text-sm mt-4">Atendimento em todo o Brasil · Osório, RS</p>
        </div>
      </section>
    </div>
  )
}
