export default function ServiceCard({ icon: Icon, title, description, highlight = false }) {
  return (
    <div className={`card-dark p-6 rounded-2xl transition-all duration-300 hover:border-brand-orange/50 hover:-translate-y-1 group ${
      highlight ? 'border-brand-orange/40 bg-brand-orange/5' : ''
    }`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110 ${
        highlight ? 'bg-brand-orange text-white' : 'bg-brand-orange/10 text-brand-orange'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
