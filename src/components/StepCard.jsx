export default function StepCard({ number, title, description, icon: Icon }) {
  return (
    <div className="relative flex gap-4 md:gap-6">
      {/* Line connector */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-lg shrink-0 glow">
          {number}
        </div>
        <div className="w-0.5 bg-brand-border flex-1 mt-3 last:hidden" />
      </div>

      {/* Content */}
      <div className="pb-10 pt-1 flex-1">
        {Icon && (
          <div className="w-8 h-8 text-brand-orange mb-3">
            <Icon className="w-full h-full" />
          </div>
        )}
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
