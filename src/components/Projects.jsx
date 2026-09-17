import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './ui/SectionHeading'

const filters = ['All', 'AI/ML', 'Full-Stack', 'Data']

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedProject, setExpandedProject] = useState(null)
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.categories.includes(activeFilter))

  function changeFilter(filter) {
    setActiveFilter(filter)
    setExpandedProject(null)
  }

  return (
    <section id="projects" className="section-space relative">
      <div className="page-shell">
        <SectionHeading eyebrow="02 / Featured Projects" title="Technical systems, thoughtfully built." description="AI, machine learning, data and software projects designed around real problems." />
        <div className="scrollbar-none mb-10 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => <button key={filter} type="button" onClick={() => changeFilter(filter)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition-all ${activeFilter === filter ? 'bg-copy text-background' : 'border border-line bg-surface text-muted hover:border-violet/40 hover:text-copy'}`} aria-pressed={activeFilter === filter}>{filter}</button>)}
        </div>
        <motion.div layout className="space-y-6 lg:space-y-10">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => {
              const originalIndex = projects.findIndex((item) => item.id === project.id)
              return (
                <motion.div key={project.id} layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                  <ProjectCard project={project} reversed={originalIndex % 2 === 1} expanded={expandedProject === project.id} onToggle={() => setExpandedProject((current) => current === project.id ? null : project.id)} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
