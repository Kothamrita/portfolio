import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-cyan" />
        <span className="mono-label text-cyan">{eyebrow}</span>
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
        <h2 className="section-title display max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
        {description && <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">{description}</p>}
      </div>
    </Reveal>
  )
}
