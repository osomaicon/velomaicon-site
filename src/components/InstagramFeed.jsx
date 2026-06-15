import { useEffect, useState } from 'react'
import { Instagram, Play } from 'lucide-react'

// Live Instagram grid, fed by a Behold JSON feed (https://behold.so).
// We fetch client-side and render our own tiles so it matches the site's
// look instead of carrying a third-party widget's chrome.
//
// Instagram media URLs expire, so each tile falls back to a local work photo
// if its image fails to load — the grid never shows a broken image.
export default function InstagramFeed({ feedUrl, profileUrl, count = 6, fallback = [] }) {
  const [posts, setPosts] = useState(null) // null = loading, [] = failed/empty

  useEffect(() => {
    let active = true
    fetch(feedUrl)
      .then(r => (r.ok ? r.json() : Promise.reject(new Error('feed'))))
      .then(data => { if (active) setPosts((data.posts || []).slice(0, count)) })
      .catch(() => { if (active) setPosts([]) })
    return () => { active = false }
  }, [feedUrl, count])

  const gridClass = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2'

  // Loading — quiet skeleton tiles
  if (posts === null) {
    return (
      <div className={gridClass} aria-hidden>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="aspect-square rounded-md bg-brand-card animate-pulse" />
        ))}
      </div>
    )
  }

  // Failed/empty — fall back to local photos that still link to the profile
  if (posts.length === 0) {
    return (
      <div className={gridClass}>
        {fallback.map((src, i) => (
          <a
            key={i}
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-md border border-brand-border"
          >
            <img src={src} alt="Trabalho Velomaicon" loading="lazy" className="w-full h-full object-cover" />
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={gridClass}>
      {posts.map((post, i) => {
        const img = post.thumbnailUrl || post.mediaUrl
        const isVideo = post.mediaType === 'VIDEO' || post.isReel
        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={post.prunedCaption ? `Instagram: ${post.prunedCaption}` : 'Ver publicação no Instagram'}
            className="group relative aspect-square overflow-hidden rounded-md border border-brand-border"
          >
            <img
              src={img}
              alt={post.prunedCaption || 'Publicação da Velomaicon no Instagram'}
              loading="lazy"
              onError={e => { if (fallback.length) e.currentTarget.src = fallback[i % fallback.length] }}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {isVideo && (
              <span className="absolute top-2 right-2 text-white">
                <Play className="w-4 h-4 fill-white drop-shadow" />
              </span>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/0 group-hover:bg-brand-dark/45 transition-colors">
              <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        )
      })}
    </div>
  )
}
