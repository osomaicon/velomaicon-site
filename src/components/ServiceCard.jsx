// An instrument tile: flat graphite panel, hairline bezel that brightens on hover.
// No lift, no glow — the quiet surface around the signature.
export default function ServiceCard({ icon: Icon, title, description, highlight = false }) {
  return (
    <div className={`tile p-6 h-full transition-colors duration-200 hover:border-brand-bezel ${
      highlight ? 'border-brand-orange/50' : ''
    }`}>
      <div className="flex items-center gap-3 mb-3">
        <Icon className={`w-6 h-6 shrink-0 ${highlight ? 'text-brand-orange' : 'text-brand-orange/80'}`} strokeWidth={1.75} />
        <h3 className="text-brand-ink font-display font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-brand-silver text-sm leading-relaxed">{description}</p>
    </div>
  )
}
