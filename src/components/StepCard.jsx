export default function StepCard({ number, title, description, icon: Icon, address, note }) {
  return (
    <div className="relative flex gap-4 md:gap-6">
      {/* Sequence marker — the steps are a real ordered process */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-brand-card border border-brand-bezel flex items-center justify-center text-brand-orange font-display font-semibold text-xl shrink-0">
          {String(number).padStart(2, '0')}
        </div>
        <div className="w-px bg-brand-border flex-1 mt-3 last:hidden" />
      </div>

      {/* Content */}
      <div className="pb-10 pt-1.5 flex-1">
        {Icon && <Icon className="w-6 h-6 text-brand-orange mb-3" strokeWidth={1.75} />}
        <h3 className="text-brand-ink font-display font-semibold text-lg mb-2">{title}</h3>
        <p className="text-brand-silver text-sm leading-relaxed">{description}</p>

        {/* Shipping address — an instrument-style callout, set in mono */}
        {address && (
          <address className="mt-3 tile border-l-2 border-l-brand-orange px-4 py-3 not-italic">
            <p className="font-mono text-sm text-brand-ink leading-relaxed whitespace-pre-line">{address}</p>
          </address>
        )}

        {note && <p className="text-brand-silver text-sm mt-3">{note}</p>}
      </div>
    </div>
  )
}
