import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const WHATSAPP = '5551995435251'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', vehicleType: '', problem: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Olá! Me chamo *${form.name}* e tenho um problema com meu *${form.vehicleType}*.\n\n📋 *Descrição:* ${form.problem}\n\n📧 E-mail: ${form.email}\n📱 Telefone: ${form.phone}`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const inputClass = 'w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-orange transition-colors'
  const labelClass = 'block text-sm font-medium text-gray-300 mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Nome completo *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Telefone / WhatsApp *</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="(51) 99999-9999"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>E-mail</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Tipo de veículo *</label>
        <select
          name="vehicleType"
          value={form.vehicleType}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">Selecione...</option>
          <option value="Carro">Carro</option>
          <option value="Moto">Moto</option>
          <option value="Embarcação náutica">Embarcação náutica</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Descreva o problema *</label>
        <textarea
          name="problem"
          value={form.problem}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Ex: Velocímetro parou de funcionar, display apagado, marcador de combustível travado..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] glow"
      >
        {sent ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Redirecionando para o WhatsApp...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar via WhatsApp
          </>
        )}
      </button>

      <p className="text-gray-500 text-xs text-center">
        Ao enviar, você será redirecionado para o WhatsApp com as informações preenchidas.
      </p>
    </form>
  )
}
