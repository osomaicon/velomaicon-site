import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On every route change, jump the view back to the top of the page.
// Without this, React Router keeps the previous scroll position when you
// navigate, so a new page can open already scrolled halfway down.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
