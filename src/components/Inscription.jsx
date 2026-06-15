// Gauge-face inscription: a hairline tick + small mono label, like text printed
// on a dial. Used as the section/page eyebrow across the site instead of a
// floating uppercase-orange label.
export default function Inscription({ children, className = '' }) {
  return (
    <p className={`inscription flex items-center gap-3 text-brand-orange/90 ${className}`}>
      <span aria-hidden className="h-px w-8 bg-brand-orange/50" />
      {children}
    </p>
  )
}
