import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Car, Bike, Anchor, ShieldCheck, Truck, Wrench, Clock, Star,
  ChevronRight, ArrowRight, Zap, Palette, Tractor, Instagram
} from 'lucide-react'
import CTAButton from '../components/CTAButton'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import WorkGallery from '../components/WorkGallery'
import Speedometer from '../components/Speedometer'
import Inscription from '../components/Inscription'
import ig1 from '../assets/work-3.jpg'
import ig2 from '../assets/work-8.jpg'
import ig3 from '../assets/work-14.jpg'
import ig4 from '../assets/work-20.jpg'

const INSTAGRAM = 'https://instagram.com/velomaicon'
const igPhotos = [ig1, ig2, ig3, ig4]

const segments = [
  {
    icon: Car,
    title: 'Automóveis',
    description: 'Painéis, velocímetros, conta-giros, displays e computadores de bordo para carros de todas as marcas.',
  },
  {
    icon: Bike,
    title: 'Motos',
    description: 'Velocímetros digitais e analógicos, painéis multifuncionais e displays LCD para motos.',
  },
  {
    icon: Anchor,
    title: 'Náutica',
    description: 'Instrumentos para barcos e lanchas: velocímetros, RPM, temperatura e nível de combustível.',
  },
  {
    icon: Tractor,
    title: 'Quadricíclos',
    description: 'Painéis e velocímetros para quadricíclos, ATVs e side-by-sides de qualquer modelo.',
  },
]

const differentials = [
  { icon: Wrench, title: 'Diagnóstico preciso', desc: 'Equipamentos modernos identificam a causa exata do problema, sem achismos.' },
  { icon: ShieldCheck, title: 'Garantia por escrito', desc: 'Todo reparo sai com garantia documentada. Sua tranquilidade vem antes.' },
  { icon: Truck, title: 'Atendimento nacional', desc: 'Recebemos peças de todo o Brasil via Correios ou transportadora.' },
  { icon: Clock, title: 'Prazo informado', desc: 'Prazo justo e comunicação transparente em cada etapa do reparo.' },
  { icon: Zap, title: 'Técnicos especializados', desc: 'Anos de experiência exclusiva em instrumentação veicular e eletrônica embarcada.' },
  { icon: Star, title: 'Qualidade comprovada', desc: 'Centenas de clientes atendidos de norte a sul do país.' },
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
    text: 'Pensava que teria que trocar o painel inteiro da minha lancha. A Velomaicon consertou tudo com um terço do preço. Profissionalismo total, mesmo do outro lado do Brasil.',
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

const specs = ['Diagnóstico preciso', 'Garantia por escrito', '26 estados atendidos', 'Prazo informado']

export default function Home() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref}>
      {/* Hero — the gauge is the thesis: a panel coming back to life */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 cluster-vignette">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Copy */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="flex justify-center lg:justify-start mb-6 animate-fade-in">
              <Inscription>Osório, RS · todo o Brasil pelos Correios</Inscription>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-brand-ink mb-6 animate-slide-up">
              Seu painel<br />de volta{' '}
              <span className="text-brand-orange">funcionando.</span>
            </h1>

            <p className="text-lg text-brand-silver max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
              Reparo especializado de velocímetros, painéis e computadores de bordo
              para carros, motos e embarcações. Você envia pelos Correios — devolvemos
              funcionando, com garantia por escrito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CTAButton size="lg" label="Solicitar orçamento grátis" />
              <Link
                to="/como-funciona"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-brand-ink border border-brand-bezel rounded-md hover:border-brand-orange hover:text-brand-orange transition-colors group"
              >
                Como funciona o envio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Spec strip — reads like a gauge readout, not a checkmark trust bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mt-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {specs.map((item, i) => (
                <span key={item} className="inscription flex items-center gap-4 text-[11px] text-brand-silver">
                  {i > 0 && <span aria-hidden className="h-3 w-px bg-brand-border" />}
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Signature gauge */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <Speedometer className="w-full max-w-lg mx-auto h-auto" />
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="section-padding bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 animate-on-scroll">
            <Inscription>O que reparamos</Inscription>
            <h2 className="text-3xl md:text-4xl text-brand-ink max-w-2xl mt-3">
              Quatro tipos de veículo, uma especialidade: instrumentação.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {segments.map((s, i) => (
              <div key={s.title} className="animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>

          {/* Personalização — a different kind of service, flat panel with an amber rule */}
          <div className="animate-on-scroll mt-4 tile p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 border-l-2 border-l-brand-orange">
            <div className="flex items-center gap-4 flex-1">
              <Palette className="w-8 h-8 text-brand-orange shrink-0" strokeWidth={1.75} />
              <div>
                <h3 className="text-brand-ink font-display font-semibold text-xl md:text-2xl mb-1">Personalização de painéis</h3>
                <p className="text-brand-silver text-sm md:text-base max-w-2xl">
                  Vai além do reparo: faces de mostrador customizadas, iluminação LED,
                  ponteiros e displays com visual exclusivo. Seu painel com a sua cara.
                </p>
              </div>
            </div>
            <Link
              to="/servicos"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-brand-ink font-semibold rounded-md border border-brand-bezel hover:border-brand-orange hover:text-brand-orange transition-colors group"
            >
              Ver opções
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Differentials — a technical spec plate, hairline-divided rows */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-on-scroll">
            <Inscription>Por que a Velomaicon</Inscription>
            <h2 className="text-3xl md:text-4xl text-brand-ink mt-3">Confiança técnica, do diagnóstico à entrega</h2>
          </div>
          <div className="tile divide-y divide-brand-border grid sm:grid-cols-2 sm:divide-y-0">
            {differentials.map((d, i) => (
              <div
                key={d.title}
                className={`animate-on-scroll flex gap-4 p-6 sm:border-b sm:border-brand-border ${i % 2 === 0 ? 'sm:border-r' : ''} ${i >= differentials.length - 2 ? 'sm:border-b-0' : ''}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <d.icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="text-brand-ink font-display font-semibold text-base mb-1">{d.title}</h3>
                  <p className="text-brand-silver text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="section-padding bg-brand-surface border-y border-brand-border">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl text-brand-ink mb-4">Simples de enviar, fácil de receber de volta</h2>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto leading-relaxed">
            Você embala a peça, envia pelos Correios ou transportadora, e cuidamos do resto.
            Seu painel chega de volta reparado, com garantia.
          </p>
          <Link
            to="/como-funciona"
            className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all group"
          >
            Ver o processo completo
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Work gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 animate-on-scroll">
            <div>
              <Inscription>Trabalhos realizados</Inscription>
              <h2 className="text-3xl md:text-4xl text-brand-ink mt-3">Veja o que fazemos na prática</h2>
            </div>
            <Link to="/contato" className="inscription text-brand-silver hover:text-brand-orange flex items-center gap-1.5 transition-colors shrink-0">
              Enviar meu painel <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="animate-on-scroll">
            <WorkGallery />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-surface border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 animate-on-scroll">
            <Inscription>Quem já enviou</Inscription>
            <h2 className="text-3xl md:text-4xl text-brand-ink mt-3">O que os clientes dizem</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <div key={t.name} className="animate-on-scroll" style={{ transitionDelay: `${i * 0.08}s` }}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram — conheça a marca pela bancada */}
      <section className="section-padding border-t border-brand-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Convite */}
          <div className="animate-on-scroll">
            <Inscription>@velomaicon no Instagram</Inscription>
            <h2 className="text-3xl md:text-4xl text-brand-ink mt-3 mb-4">Conheça a marca pela bancada</h2>
            <p className="text-brand-silver leading-relaxed mb-8 max-w-lg">
              Postamos reparos do dia a dia, antes e depois, bastidores da oficina e
              personalizações. É o melhor jeito de ver de perto como trabalhamos —
              antes mesmo de enviar a sua peça.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-brand-orange text-brand-dark font-semibold backlight hover:bg-brand-orange-dark transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Seguir @velomaicon
            </a>
          </div>

          {/* Colagem de fotos reais — leva ao perfil */}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir o Instagram da Velomaicon"
            className="animate-on-scroll group relative block rounded-lg overflow-hidden border border-brand-border"
          >
            <div className="grid grid-cols-2 gap-1">
              {igPhotos.map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt={`Trabalho Velomaicon ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 px-4 py-2 rounded-md bg-brand-dark/85 text-brand-ink text-sm font-medium border border-brand-bezel">
                <Instagram className="w-4 h-4 text-brand-orange" />
                Ver no Instagram
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding border-t border-brand-border relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 cluster-vignette opacity-60" />
        <div className="relative max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl text-brand-ink mb-4">Pronto para recuperar seu painel?</h2>
          <p className="text-brand-silver mb-8 text-lg">
            Fale com um especialista pelo WhatsApp e receba um orçamento sem compromisso.
          </p>
          <div className="flex justify-center">
            <CTAButton size="lg" label="Falar com especialista" />
          </div>
          <p className="inscription text-brand-silver text-[11px] mt-5">Atendimento em todo o Brasil · Osório, RS</p>
        </div>
      </section>
    </div>
  )
}
