import { focusAreas } from '../data/portfolio'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-space relative border-y border-line bg-surface/45">
      <div className="page-shell">
        <SectionHeading eyebrow="01 / About" title="Engineering intelligence into practical software." />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          <Reveal>
            <p className="text-lg leading-9 text-muted sm:text-xl">I am a Computer Science Engineering undergraduate focused on AI/ML, computer vision, LLM applications and full-stack development. I enjoy building practical software systems that combine intelligent models with usable applications.</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Reveal key={area.title} delay={index * 0.07}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet/40 hover:shadow-[0_18px_50px_rgba(84,64,170,.12)]">
                    <div className="absolute -right-8 -top-8 size-24 rounded-full bg-violet/10 blur-2xl transition-colors group-hover:bg-cyan/15" />
                    <Icon className="relative text-cyan" size={22} strokeWidth={1.6} />
                    <h3 className="display relative mt-8 text-lg font-semibold">{area.title}</h3>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
