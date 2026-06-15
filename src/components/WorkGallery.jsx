import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

// Import all work photos
import w1 from '../assets/work-1.jpg'
import w2 from '../assets/work-2.jpg'
import w3 from '../assets/work-3.jpg'
import w4 from '../assets/work-4.jpg'
import w5 from '../assets/work-5.jpg'
import w6 from '../assets/work-6.jpg'
import w7 from '../assets/work-7.jpg'
import w8 from '../assets/work-8.jpg'
import w9 from '../assets/work-9.jpg'
import w10 from '../assets/work-10.jpg'
import w11 from '../assets/work-11.jpg'
import w12 from '../assets/work-12.jpg'
import w13 from '../assets/work-13.jpg'
import w14 from '../assets/work-14.jpg'
import w15 from '../assets/work-15.jpg'
import w16 from '../assets/work-16.jpg'
import w17 from '../assets/work-17.jpg'
import w18 from '../assets/work-18.jpg'
import w19 from '../assets/work-19.jpg'
import w20 from '../assets/work-20.jpg'
import w21 from '../assets/work-21.jpg'

const photos = [
  w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11,
  w12, w13, w14, w15, w16, w17, w18, w19, w20, w21,
]

export default function WorkGallery() {
  const [lightbox, setLightbox] = useState(null)

  const prev = () => setLightbox(i => (i - 1 + photos.length) % photos.length)
  const next = () => setLightbox(i => (i + 1) % photos.length)

  // Keyboard navigation + lock body scroll while lightbox is open
  useEffect(() => {
    if (lightbox === null) return
    const onKey = e => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  return (
    <>
      {/* Uniform responsive grid — consistent square tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="relative overflow-hidden rounded-xl group cursor-zoom-in aspect-square"
          >
            <img
              src={src}
              alt={`Trabalho Velomaicon ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={photos[lightbox]}
            alt={`Trabalho ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            onClick={e => e.stopPropagation()}
          />

          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm">
            {lightbox + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  )
}
