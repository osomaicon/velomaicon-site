import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

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

const photos = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12]

export default function WorkGallery() {
  const [lightbox, setLightbox] = useState(null)

  const prev = () => setLightbox(i => (i - 1 + photos.length) % photos.length)
  const next = () => setLightbox(i => (i + 1) % photos.length)

  return (
    <>
      {/* Masonry-style asymmetric grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className={`relative overflow-hidden rounded-xl group cursor-zoom-in ${
              i === 0 ? 'col-span-2 row-span-2' :
              i === 5 ? 'col-span-2' :
              i === 10 ? 'col-span-2' : ''
            }`}
            style={{ aspectRatio: i === 0 ? '1/1' : i === 5 || i === 10 ? '2/1' : '1/1' }}
          >
            <img
              src={src}
              alt={`Trabalho Velomaicon ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
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
