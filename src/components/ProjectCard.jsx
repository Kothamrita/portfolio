import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, CircleCheck } from 'lucide-react'
import { ProjectVisual } from './ProjectVisual'
import { ExternalLink } from './ui/ExternalLink'

export function ProjectCard({ project, expanded, onToggle, reversed = false }) {
  const hasDetails = project.details || project.highlights || project.flow || project.technologies
  return (
    <motion.article layout className={`project-card relative z-0 rounded-[1.35rem] bg-line p-px transition-transform duration-300 hover:-translate-y-1 ${project.supporting ? 'lg:max-w-3xl' : ''}`}>
      <div className="overflow-hidden rounded-[1.3rem] bg-surface">
        <div className={`grid items-stretch ${project.supporting ? 'md:grid-cols-[.8fr_1.2fr]' : 'lg:grid-cols-2'} ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <button type="button" onClick={onToggle} className="block w-full p-3 text-left sm:p-4" aria-label={`${expanded ? 'Collapse' : 'Expand'} details for ${project.title}`} aria-expanded={expanded}>
            <ProjectVisual project={project} />
          </button>
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="mono-label text-cyan">Project / {project.number}</span>
              {project.badge && <span className="rounded-full border border-violet/25 bg-violet/10 px-3 py-1.5 text-[10px] font-bold text-violet">{project.badge}</span>}
            </div>
            <h3 className="display mt-8 text-3xl font-semibold sm:text-4xl lg:text-5xl">{project.title}</h3>
            <p className="mt-3 text-sm font-semibold text-violet sm:text-base">{project.subtitle}</p>
            <p className="mt-6 text-sm leading-7 text-muted sm:text-base">{project.description}</p>
            {!expanded && project.technologies && <div className="mt-7 flex flex-wrap gap-2">{project.technologies.slice(0, 4).map((tech) => <span key={tech} className="rounded-md border border-line bg-raised px-2.5 py-1.5 font-mono text-[9px] text-muted">{tech}</span>)}</div>}
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
              {hasDetails && (
                <button type="button" onClick={onToggle} className="group inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-xs font-bold transition-colors hover:border-violet/45 hover:bg-raised" aria-expanded={expanded}>
                  {expanded ? 'Close details' : 'Explore details'}
                  <ChevronDown size={15} className={`transition-transform ${expanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
                </button>
              )}
              {project.live && <ExternalLink href={project.live} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet to-blue px-4 py-2.5 text-xs font-bold text-white transition-transform hover:-translate-y-0.5" ariaLabel={`Open live demo for ${project.title}`}>Live Demo <ArrowUpRight size={15} /></ExternalLink>}
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div key="details" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: 0.38 }, opacity: { duration: 0.25 } }} className="overflow-hidden">
              <div className="grid gap-8 border-t border-line px-6 py-8 sm:px-8 lg:grid-cols-2 lg:px-10">
                <div>
                  <h4 className="mono-label mb-4 text-cyan">Project details</h4>
                  {project.details && <p className="text-sm leading-7 text-muted">{project.details}</p>}
                  {project.highlights && <ul className="space-y-3">{project.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted"><CircleCheck size={16} className="mt-1 shrink-0 text-cyan" />{highlight}</li>)}</ul>}
                  {!project.details && !project.highlights && <p className="text-sm leading-7 text-muted">{project.description}</p>}
                </div>
                <div className="space-y-8">
                  {project.technologies && <div><h4 className="mono-label mb-4 text-cyan">Tech stack</h4><div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-lg border border-line bg-raised px-3 py-2 font-mono text-[10px] text-copy">{tech}</span>)}</div></div>}
                  {project.flow && <div><h4 className="mono-label mb-4 text-cyan">How it works</h4><div className="flex flex-wrap items-center gap-2">{project.flow.map((step, index) => <div key={step} className="contents"><span className="rounded-lg bg-blue/10 px-3 py-2 text-[11px] font-semibold text-blue">{step}</span>{index < project.flow.length - 1 && <span className="text-muted">→</span>}</div>)}</div></div>}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}
