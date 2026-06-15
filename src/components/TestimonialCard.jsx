import { Star } from 'lucide-react'

export default function TestimonialCard({ name, city, rating = 5, text, vehicle }) {
  return (
    <div className="tile p-6 flex flex-col gap-4 h-full">
      {/* Rating */}
      <div className="flex gap-1" aria-label={`${rating} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-brand-orange fill-brand-orange' : 'text-brand-bezel'}`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-brand-silver text-sm leading-relaxed flex-1">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
        <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-bezel flex items-center justify-center text-brand-orange font-display font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-brand-ink font-medium text-sm">{name}</p>
          <p className="inscription text-[11px] tracking-[0.12em] mt-0.5">{city} · {vehicle}</p>
        </div>
      </div>
    </div>
  )
}
