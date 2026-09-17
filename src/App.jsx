import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('portfolio-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f5f7fc' : '#07080c')
  }, [theme])

  return (
    <div className="site-root min-h-screen bg-background text-copy transition-colors duration-500">
      <div className="ambient-bg" aria-hidden="true" />
      <motion.div className="fixed inset-x-0 top-0 z-[100] h-0.5 origin-left bg-gradient-to-r from-violet via-blue to-cyan" style={{ scaleX: progress }} />
      <Navbar theme={theme} onThemeChange={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
