import { Award, Medal, Rocket, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { achievements } from '../data/portfolio'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const icons = [Trophy, Medal, Rocket, Award]

export function Achievements() {
  return (
    <section id="achievements" className="section-space">
      <div className="page-shell">
        <SectionHeading eyebrow="06 / Achievements & Certifications" title="Milestones along the way." />
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={achievement.title} delay={index * 0.07}>
                <motion.article whileHover={{ y: -5 }} className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-violet/40 sm:p-8">
                  <div className="absolute -right-10 -top-10 size-32 rounded-full bg-violet/0 blur-3xl transition-colors group-hover:bg-violet/15" />
                  <div className="flex items-start justify-between gap-5"><span className="mono-label text-cyan">{achievement.type}</span><div className="grid size-11 place-items-center rounded-xl border border-line bg-raised text-violet"><Icon size={20} /></div></div>
                  <h3 className="display mt-10 max-w-md text-xl font-semibold leading-snug sm:text-2xl">{achievement.title}</h3>
                  {achievement.detail && <p className="mt-3 text-sm font-semibold text-muted">{achievement.detail}</p>}
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
