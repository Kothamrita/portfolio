import { personalInfo } from '../data/portfolio'
import { ExternalLink } from './ui/ExternalLink'

export function Footer() {
  return (
    <footer className="page-shell relative z-10 py-9">
      <div className="flex flex-col gap-6 border-t border-line pt-7 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div><p className="display font-semibold">{personalInfo.name}</p><p className="mt-1 text-xs text-muted">AI/ML • Full-Stack Developer • Computer Science Engineering Undergraduate · {personalInfo.location}</p></div>
        <div className="flex flex-wrap gap-5 text-xs font-semibold text-muted"><ExternalLink href={personalInfo.linkedin} className="transition-colors hover:text-copy">LinkedIn</ExternalLink><a href={personalInfo.emailLink} className="transition-colors hover:text-copy">Email</a><ExternalLink href={personalInfo.github} className="transition-colors hover:text-copy">GitHub</ExternalLink></div>
        <p className="font-mono text-[10px] text-muted">© {new Date().getFullYear()} {personalInfo.name}</p>
      </div>
    </footer>
  )
}
