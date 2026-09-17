import { AnimatePresence, motion } from 'framer-motion'
import { BriefcaseBusiness, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { experience } from '../data/portfolio'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Experience() {
  const [openEntry, setOpenEntry] = useState(0)
  return (
    <section id="experience" className="section-space">
      <div className="page-shell">
        <SectionHeading eyebrow="04 / Experience" title="Learning by building, researching and shipping." />
        <div className="relative ml-3 max-w-5xl border-l border-line pl-8 sm:ml-5 sm:pl-12">
          {experience.map((item, index) => {
            const isOpen = openEntry === index
            return (
              <Reveal key={item.company} delay={index * 0.08} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[2.6rem] top-7 grid size-5 place-items-center rounded-full border border-violet/40 bg-background sm:-left-[3.6rem]"><i className="size-1.5 rounded-full bg-cyan shadow-[0_0_10px_var(--cyan)]" /></span>
                <div className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-violet/30">
                  <button type="button" className="flex w-full items-start justify-between gap-5 p-6 text-left sm:p-8" onClick={() => setOpenEntry(isOpen ? null : index)} aria-expanded={isOpen}>
                    <div className="flex gap-4 sm:gap-6">
                      <div className="hidden size-11 shrink-0 place-items-center rounded-xl bg-violet/10 text-violet sm:grid"><BriefcaseBusiness size={20} /></div>
                      <div><span className="mono-label text-cyan">{item.date}</span><h3 className="display mt-3 text-xl font-semibold sm:text-2xl">{item.role}</h3><p className="mt-1.5 text-sm font-semibold text-muted">{item.company}</p></div>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line"><ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} /></span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><ul className="space-y-4 border-t border-line px-6 py-6 sm:px-8 sm:pl-[6.75rem]">{item.responsibilities.map((responsibility) => <li key={responsibility} className="flex gap-3 text-sm leading-7 text-muted"><span className="mt-3 size-1 shrink-0 rounded-full bg-cyan" />{responsibility}</li>)}</ul></motion.div>}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
