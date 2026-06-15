import { useEffect, useRef } from 'react'
import { MapPin, ShieldCheck, Wrench, Users, Star, Truck } from 'lucide-react'
import CTAButton from '../components/CTAButton'
import Inscription from '../components/Inscription'

const values = [
  { icon: Wrench, title: 'Excelência Técnica', desc: 'Utilizamos equipamentos modernos de diagnóstico e técnicos com vasta experiência em eletrônica veicular.' },
  { icon: ShieldCheck, title: 'Garantia Real', desc: 'Todo serviço tem garantia por escrito. Se o problema voltar no período de garantia, resolvemos sem custo adicional.' },
  { icon: Truck, title: 'Alcance Nacional', desc: 'De Osório até o Amazonas ou o Nordeste — atendemos qualquer estado do Brasil via envio postal.' },
  { icon: Users, title: 'Relacionamento', desc: 'Comunicação clara e honesta em cada etapa. Você sabe o que está acontecendo com sua peça a todo momento.' },
  { icon: Star, title: 'Qualidade Comprovada', desc: 'Centenas de clientes satisfeitos que voltam e indicam. Nossa reputação é construída um reparo de cada vez.' },
  { icon: MapPin, title: 'Raízes Gaúchas', desc: 'Nascidos e criados em Osório, RS, levamos o jeito gaúcho de trabalhar — com seriedade e compromisso.' },
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

export default function About() {
  const ref = useScrollAnimation()

  return (
    <div ref={ref} className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <Inscription className="justify-center mb-4">Osório, RS · desde a bancada</Inscription>
          <h1 className="text-4xl md:text-5xl text-brand-ink mb-4">
            Sobre a <span className="text-brand-orange">Velomaicon</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl mx-auto">
            Uma empresa nascida da paixão por eletrônica veicular e do compromisso com a qualidade técnica.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-white mb-6">Nossa história</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  A <strong className="text-white">Velomaicon</strong> nasceu em <strong className="text-white">Osório, Rio Grande do Sul</strong>, da combinação de conhecimento técnico em eletrônica com a percepção de uma demanda que o mercado não atendia bem: o reparo especializado de painéis de instrumentos.
                </p>
                <p>
                  Quando um painel de velocímetro falha, muitos proprietários se deparam com a difícil escolha entre pagar um preço elevadíssimo pela troca do conjunto completo ou conviver com o problema. A Velomaicon veio para oferecer a <strong className="text-white">terceira opção: o reparo profissional</strong>, com qualidade e preço justo.
                </p>
                <p>
                  Com o tempo, percebemos que o problema afetava clientes de todo o país — não apenas do Rio Grande do Sul. Foi assim que desenvolvemos nosso modelo de <strong className="text-white">atendimento nacional via envio postal</strong>, permitindo que qualquer pessoa, de qualquer estado, tenha acesso ao nosso serviço especializado.
                </p>
                <p>
                  Hoje atendemos carros, motos e embarcações náuticas, com técnicos especializados e equipamentos de diagnóstico que garantem um reparo preciso e duradouro.
                </p>
              </div>
            </div>

            {/* Visual card */}
            <div className="animate-on-scroll">
              <div className="card-dark p-8 space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-brand-border">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Osório, RS</p>
                    <p className="text-gray-400 text-sm">Rio Grande do Sul, Brasil</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '10+', label: 'Anos de experiência' },
                    { value: '500+', label: 'Peças reparadas' },
                    { value: '26', label: 'Estados atendidos' },
                    { value: '100%', label: 'Garantia nos serviços' },
                  ].map(s => (
                    <div key={s.label} className="bg-brand-dark rounded-xl p-4 text-center border border-brand-border">
                      <p className="text-brand-orange font-extrabold text-2xl">{s.value}</p>
                      <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-brand-surface">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark p-8 md:p-12 text-center border-brand-orange/30 animate-on-scroll">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-6">
              <Star className="w-7 h-7 text-brand-orange" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Nossa missão</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Oferecer reparo especializado e confiável de painéis de instrumentos veiculares, com diagnóstico preciso, qualidade técnica comprovada e atendimento de excelência — acessível a todo o Brasil, a partir de Osório, RS.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-4">Nossos <span className="text-gradient">valores</span></h2>
            <p className="text-gray-400">Os princípios que guiam cada reparo e cada atendimento.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={v.title} className="animate-on-scroll card-dark p-6 hover:border-brand-orange/40 transition-all" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-surface border-t border-brand-border">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-gray-400 mb-8">Entre em contato e descubra como podemos resolver o problema do seu painel.</p>
          <CTAButton size="lg" label="Falar com a Velomaicon" />
        </div>
      </section>
    </div>
  )
}
