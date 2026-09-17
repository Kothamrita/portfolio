import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { ExternalLink } from './ui/ExternalLink'
import { Reveal } from './ui/Reveal'
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons'

export function Contact() {
  return (
    <section id="contact" className="pb-5 sm:pb-8">
      <div className="page-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-violet/25 bg-gradient-to-br from-[#19122e] via-[#0d1425] to-[#091b22] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16">
            <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-violet/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 size-80 rounded-full bg-cyan/10 blur-[100px]" />
            <div className="relative grid gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <div>
                <span className="mono-label text-cyan">07 / Let&apos;s connect</span>
                <h2 className="display mt-6 max-w-4xl text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-7xl">Let&apos;s build something intelligent together.</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">Interested in AI, software engineering, or building something meaningful? Let&apos;s connect.</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href={personalInfo.emailLink} className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#10131d] transition-transform hover:-translate-y-0.5">Send an email <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
                  <a href={personalInfo.resume} download className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/30"><Download size={17} /> Resume</a>
                </div>
              </div>
              <address className="not-italic">
                <p className="display text-2xl font-semibold">{personalInfo.name}</p>
                <div className="mt-6 space-y-4 text-sm text-white/60">
                  <p className="flex items-center gap-3"><MapPin size={17} className="text-cyan" />{personalInfo.location}</p>
                  <a href={personalInfo.emailLink} className="flex items-center gap-3 transition-colors hover:text-white"><Mail size={17} className="text-cyan" />{personalInfo.email}</a>
                  <a href={personalInfo.phoneLink} className="flex items-center gap-3 transition-colors hover:text-white"><Phone size={17} className="text-cyan" />{personalInfo.phone}</a>
                </div>
                <div className="mt-7 flex gap-2">
                  <ExternalLink href={personalInfo.linkedin} className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/70 transition-all hover:border-cyan/40 hover:text-white" ariaLabel="Open LinkedIn profile"><LinkedInIcon size={18} /></ExternalLink>
                  <ExternalLink href={personalInfo.github} className="grid size-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/70 transition-all hover:border-cyan/40 hover:text-white" ariaLabel="Open GitHub profile"><GitHubIcon size={18} /></ExternalLink>
                </div>
              </address>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
