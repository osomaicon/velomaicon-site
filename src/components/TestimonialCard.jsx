import { Star } from 'lucide-react'

export default function TestimonialCard({ name, city, rating = 5, text, vehicle }) {
  return (
    <div className="card-dark p-6 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-brand-orange fill-brand-orange' : 'text-gray-600'}`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-300 text-sm leading-relaxed flex-1">"{text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-brand-border">
        <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-medium text-sm">{name}</p>
          <p className="text-gray-500 text-xs">{city} · {vehicle}</p>
        </div>
      </div>
    </div>
  )
}
