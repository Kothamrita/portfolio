import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Orbit, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { technologies, technologyCategories } from '../data/portfolio'
import { SectionHeading } from './ui/SectionHeading'

const orbitCategories = technologyCategories.filter((category) => category !== 'All')

const categoryAccent = {
  Languages: '#8b7cff',
  'AI/ML': '#55dce7',
  Frameworks: '#5b8cff',
  Libraries: '#b56cff',
  'Web/Cloud': '#49c8a8',
  Tools: '#f29f67',
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const visibleTechnologies = activeCategory === 'All'
    ? technologies
    : technologies.filter((tech) => tech.category === activeCategory)

  return (
    <section id="tech-stack" className="section-space relative overflow-hidden border-y border-line bg-surface/45">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/5 blur-[130px]" />
      <div className="page-shell relative">
        <SectionHeading
          eyebrow="03 / Tech Stack"
          title="A connected system of tools, not a checklist."
          description="Choose an orbit to explore the technologies I use across intelligent systems, data and full-stack development."
        />

        <div className="grid items-start gap-10 xl:grid-cols-[500px_minmax(0,1fr)] xl:gap-16">
          <div
            className={`orbit-system relative mx-auto aspect-square w-full max-w-[500px] ${paused ? 'is-paused' : ''}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="absolute inset-[8%] rounded-full border border-line bg-background/30 shadow-[inset_0_0_70px_rgba(104,70,235,.06)] backdrop-blur-sm" />
            <div className="absolute inset-[18%] rounded-full border border-dashed border-violet/25" />
            <div className="absolute inset-[29%] rounded-full border border-cyan/15" />
            <div className="orbit-spinner" aria-hidden="true" />
            <div className="orbit-spinner orbit-spinner-secondary" aria-hidden="true" />

            <motion.div
              className="absolute inset-[31%] z-20 grid place-items-center rounded-full border border-violet/35 bg-surface text-center shadow-[0_0_65px_rgba(104,70,235,.2)]"
              animate={reduceMotion ? undefined : { boxShadow: ['0 0 42px rgba(104,70,235,.14)', '0 0 75px rgba(57,190,210,.23)', '0 0 42px rgba(104,70,235,.14)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <button type="button" onClick={() => setActiveCategory('All')} aria-pressed={activeCategory === 'All'} className="group flex size-full flex-col items-center justify-center rounded-full">
                <span className={`grid size-11 place-items-center rounded-full transition-all ${activeCategory === 'All' ? 'bg-gradient-to-br from-violet to-blue text-white' : 'border border-line bg-raised text-cyan group-hover:border-cyan/40'}`}>
                  <Orbit size={21} />
                </span>
                <span className="display mt-3 text-lg font-semibold">All tools</span>
                <span className="mono-label mt-1 text-[8px] text-muted">Select the core</span>
              </button>
            </motion.div>

            <div className="orbit-track absolute inset-0" aria-label="Technology category orbit">
              {orbitCategories.map((category, index) => {
                const representative = technologies.find((tech) => tech.category === category)
                const Icon = representative.icon
                const degrees = index * (360 / orbitCategories.length) - 90
                const isActive = activeCategory === category
                return (
                  <div key={category} className="orbit-node" style={{ '--orbit-angle': `${degrees}deg`, '--orbit-inverse': `${-degrees}deg` }}>
                    <div className="orbit-node-upright">
                      <div>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(category)}
                          aria-pressed={isActive}
                          className={`group flex min-w-[82px] items-center gap-2 rounded-xl border px-3 py-2.5 text-left shadow-lg backdrop-blur-xl transition-all sm:min-w-[104px] ${isActive ? 'scale-105 border-transparent bg-copy text-background shadow-[0_12px_35px_rgba(79,63,172,.2)]' : 'border-line bg-surface/90 text-muted hover:border-violet/45 hover:text-copy'}`}
                        >
                          <span className="grid size-7 shrink-0 place-items-center rounded-lg" style={{ color: isActive ? 'currentColor' : categoryAccent[category], backgroundColor: isActive ? 'transparent' : `${categoryAccent[category]}16` }}>
                            <Icon size={14} strokeWidth={1.8} />
                          </span>
                          <span className="text-[9px] font-bold sm:text-[10px]">{category}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {[18, 38, 62, 82].map((position, index) => (
              <motion.i
                key={position}
                className="absolute z-10 size-1.5 rounded-full bg-cyan shadow-[0_0_13px_var(--cyan)]"
                style={{ left: `${position}%`, top: `${index % 2 ? 22 : 77}%` }}
                animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25], scale: [0.8, 1.25, 0.8] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.45 }}
              />
            ))}

            <button type="button" className="absolute -bottom-7 left-1/2 z-30 -translate-x-1/2 rounded-full border border-line bg-background/90 px-3 py-1.5 font-mono text-[8px] uppercase tracking-wider text-muted shadow-lg backdrop-blur-md transition-colors hover:text-copy" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>
              {paused ? 'Resume orbit' : 'Pause orbit'}
            </button>
          </div>

          <div className="min-w-0 rounded-3xl border border-line bg-background/40 p-4 backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan"><Sparkles size={15} /><span className="mono-label">Active constellation</span></div>
                <AnimatePresence mode="wait">
                  <motion.h3 key={activeCategory} className="display mt-3 text-3xl font-semibold sm:text-4xl" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>{activeCategory}</motion.h3>
                </AnimatePresence>
              </div>
              <p className="max-w-xs text-xs leading-6 text-muted">Select a category from the orbit to focus the system.</p>
            </div>

            <motion.div layout className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visibleTechnologies.map((technology, index) => {
                  const Icon = technology.icon
                  return (
                    <motion.div
                      key={technology.name}
                      layout
                      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: -8, scale: 0.88 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 8, scale: 0.88 }}
                      transition={{ duration: 0.28, delay: Math.min(index * 0.018, 0.16) }}
                      whileHover={reduceMotion ? undefined : { x: 4, scale: 1.015 }}
                      className="group flex items-center gap-3 rounded-xl border border-line bg-surface/75 p-3 transition-colors hover:border-cyan/35"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-raised text-cyan transition-transform duration-300 group-hover:rotate-6"><Icon size={16} strokeWidth={1.7} /></span>
                      <div className="min-w-0"><h4 className="truncate text-xs font-bold sm:text-sm">{technology.name}</h4><p className="mt-1 truncate font-mono text-[8px] uppercase tracking-wider text-muted">{technology.category}</p></div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
