import { BookOpen, GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Education() {
  const [primary, ...secondary] = education
  return (
    <section id="education" className="section-space border-y border-line bg-surface/45">
      <div className="page-shell">
        <SectionHeading eyebrow="05 / Education" title="A foundation in computer science and engineering." />
        <div className="grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
          <Reveal className="h-full">
            <article className="relative h-full overflow-hidden rounded-3xl border border-violet/25 bg-gradient-to-br from-violet/15 via-surface to-blue/10 p-7 sm:p-10">
              <div className="absolute -right-16 -top-16 size-56 rounded-full bg-violet/15 blur-[70px]" />
              <div className="relative grid size-12 place-items-center rounded-2xl border border-violet/30 bg-violet/10 text-violet"><GraduationCap size={24} /></div>
              <p className="mono-label relative mt-12 text-cyan">{primary.year}</p>
              <h3 className="display relative mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">{primary.degree}</h3>
              <p className="relative mt-4 text-base font-semibold text-muted">{primary.institution}</p>
              <p className="relative mt-8 inline-flex rounded-lg border border-line bg-background/50 px-3 py-2 font-mono text-xs text-copy">{primary.detail}</p>
            </article>
          </Reveal>
          <div className="grid gap-4">
            {secondary.map((item, index) => <Reveal key={item.degree} delay={0.08 + index * 0.08}><article className="h-full rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:border-cyan/30"><BookOpen size={20} className="text-cyan" /><p className="mono-label mt-7 text-muted">{item.year}</p><h3 className="display mt-3 text-2xl font-semibold">{item.degree}</h3><p className="mt-2 text-sm leading-6 text-muted">{item.institution}</p>{item.detail && <p className="mt-5 font-mono text-sm font-medium text-violet">{item.detail}</p>}</article></Reveal>)}
          </div>
        </div>
      </div>
    </section>
  )
}
