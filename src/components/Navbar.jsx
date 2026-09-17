import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, personalInfo } from '../data/portfolio'
import { ExternalLink } from './ui/ExternalLink'
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons'

export function Navbar({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className={`mx-auto flex h-16 max-w-[1320px] items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${scrolled ? 'glass shadow-[0_14px_50px_rgba(0,0,0,.18)]' : 'border border-transparent'}`}>
        <a href="#top" className="group flex items-center gap-3" aria-label="Kothamrita Chakraborty, home">
          <span className="display grid size-10 place-items-center rounded-xl bg-gradient-to-br from-violet to-blue text-sm font-bold text-white shadow-[0_0_28px_rgba(124,92,255,.3)] transition-transform group-hover:rotate-3">KC</span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-lg px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors ${activeSection === item.id ? 'text-copy' : 'text-muted hover:text-copy'}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
              {activeSection === item.id && <motion.span layoutId="active-nav" className="absolute inset-x-3 -bottom-0.5 h-px bg-cyan" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ExternalLink href={personalInfo.linkedin} className="hidden size-10 place-items-center rounded-xl border border-line text-muted transition-all hover:border-violet/50 hover:text-copy sm:grid" ariaLabel="Open Kothamrita's LinkedIn profile">
            <LinkedInIcon size={17} />
          </ExternalLink>
          <ExternalLink href={personalInfo.github} className="hidden size-10 place-items-center rounded-xl border border-line text-muted transition-all hover:border-violet/50 hover:text-copy md:grid" ariaLabel="Open Kothamrita's GitHub profile">
            <GitHubIcon size={17} />
          </ExternalLink>
          <button onClick={onThemeChange} type="button" className="grid size-10 place-items-center rounded-xl border border-line text-muted transition-all hover:border-violet/50 hover:text-copy" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={theme} initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <a href={personalInfo.resume} download className="hidden items-center gap-2 rounded-xl bg-copy px-4 py-2.5 text-xs font-bold text-background transition-transform hover:-translate-y-0.5 lg:flex">
            <Download size={15} /> Resume
          </a>
          <button type="button" className="grid size-10 place-items-center rounded-xl border border-line xl:hidden" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav id="mobile-navigation" className="glass mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-2xl p-3 xl:hidden" initial={{ opacity: 0, y: -12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.98 }} aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)} className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold ${activeSection === item.id ? 'bg-raised text-cyan' : 'text-muted'}`}>
                {item.label}<span className="font-mono text-[10px]">0{navItems.indexOf(item) + 1}</span>
              </a>
            ))}
            <a href={personalInfo.resume} download onClick={() => setMenuOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-blue px-4 py-3.5 text-sm font-semibold text-white"><Download size={16} /> Download Resume</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
