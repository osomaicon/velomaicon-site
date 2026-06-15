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
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-surface to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.08),transparent_60%)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Logo hero */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img src={logo} alt="Velomaicon" className="h-28 md:h-36 w-auto drop-shadow-2xl" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
            Reparo de Painéis e<br />
            <span className="text-gradient">Velocímetros</span> com<br />
            Garantia para Todo o Brasil
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Sediados em <strong className="text-white">Osório, RS</strong>, atendemos clientes de todo o Brasil via envio postal. Diagnóstico preciso, reparo profissional e garantia no serviço.
          </p>
          <p className="text-gray-400 text-base mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Carros · Motos · Embarcações Náuticas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CTAButton size="lg" label="Solicitar Orçamento Grátis" />
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-gray-300 border border-brand-border rounded-xl hover:border-brand-orange hover:text-brand-orange transition-all group"
            >
              Ver Serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {[
              { value: '500+', label: 'Clientes atendidos' },
              { value: '10+', label: 'Anos de experiência' },
              { value: '100%', label: 'Garantia no serviço' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-brand-orange">{s.value}</div>
                <div className="text-gray-400 text-xs mt-1">{s.label}</div>
              </div>
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
