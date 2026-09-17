import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 650)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <AnimatePresence>
      {visible && <motion.button type="button" className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-xl border border-line bg-surface/90 text-copy shadow-xl backdrop-blur-xl transition-colors hover:border-cyan/45 sm:bottom-7 sm:right-7" initial={{ opacity: 0, y: 12, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.9 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp size={18} /></motion.button>}
    </AnimatePresence>
  )
}
