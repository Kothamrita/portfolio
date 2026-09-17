import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowDownRight, Download, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { ExternalLink } from './ui/ExternalLink'
import { LinkedInIcon } from './ui/SocialIcons'

const badges = [
  { label: 'Python', className: 'left-0 top-[22%] sm:-left-5' },
  { label: 'React', className: 'right-0 top-[11%] sm:-right-2' },
  { label: 'AI/ML', className: 'bottom-[21%] left-[2%] sm:-left-2' },
  { label: 'LangChain', className: 'bottom-[12%] right-[2%] sm:-right-5' },
]

export function Hero() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const x = useSpring(pointerX, { stiffness: 80, damping: 24 })
  const y = useSpring(pointerY, { stiffness: 80, damping: 24 })

  function handlePointerMove(event) {
    if (reduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 18)
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 18)
  }

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32 sm:pt-36" onPointerMove={handlePointerMove} onPointerLeave={() => { pointerX.set(0); pointerY.set(0) }}>
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-[-15rem] top-28 size-[30rem] rounded-full bg-violet/10 blur-[120px]" />
      <div className="page-shell relative z-10 grid min-w-0 items-center gap-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-8">
        <motion.div className="min-w-0" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-3.5 py-2 text-xs font-semibold text-cyan">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-50" /><span className="relative size-2 rounded-full bg-cyan" /></span>
            Open to opportunities
          </div>
          <h1 className="display max-w-full text-[clamp(3rem,12vw,5.4rem)] font-semibold leading-[0.9] lg:text-[clamp(4rem,6.2vw,6.5rem)]">
            <span className="block">{personalInfo.firstName}</span>
            <span className="text-gradient block pb-2">{personalInfo.lastName}</span>
          </h1>
          <p className="mt-7 max-w-3xl break-words font-mono text-xs leading-6 text-cyan sm:text-sm">{personalInfo.role}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">{personalInfo.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-blue px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(94,76,225,.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(94,76,225,.38)]">View Projects <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
            <a href={personalInfo.resume} download className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:border-violet/45"><Download size={17} /> Download Resume</a>
          </div>
          <div className="mt-7 flex flex-wrap gap-5">
            <ExternalLink href={personalInfo.linkedin} className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-copy" ariaLabel="Open LinkedIn profile"><LinkedInIcon size={16} /> LinkedIn</ExternalLink>
            <a href={personalInfo.emailLink} className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-copy"><Mail size={16} /> Email</a>
          </div>
        </motion.div>

        <motion.div className="relative mx-auto aspect-square w-full min-w-0 max-w-[540px]" initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }} style={{ x, y }} aria-label="Decorative AI and development visualization">
          <div className="orb absolute inset-[14%] rounded-full opacity-90 shadow-[0_0_110px_rgba(103,80,240,.32)]" />
          <div className="absolute inset-[8%] rounded-full border border-violet/15" />
          <div className="absolute inset-[2%] rounded-full border border-cyan/10" />
          <div className="glass absolute left-[10%] right-[4%] top-[26%] overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3"><i className="size-2.5 rounded-full bg-[#ff6b6b]" /><i className="size-2.5 rounded-full bg-[#ffd166]" /><i className="size-2.5 rounded-full bg-[#62d99b]" /><span className="ml-2 font-mono text-[9px] text-muted">developer.js</span></div>
            <pre className="max-w-full overflow-hidden p-4 font-mono text-[9px] leading-6 sm:p-6 sm:text-xs sm:leading-7" aria-hidden="true"><code><span className="code-key">const</span> developer = {'{'}{`\n`}  <span className="code-prop">name</span>: <span className="code-string">&quot;Kothamrita&quot;</span>,{`\n`}  <span className="code-prop">focus</span>: [<span className="code-string">&quot;AI/ML&quot;</span>, <span className="code-string">&quot;Full-Stack&quot;</span>],{`\n`}  <span className="code-prop">building</span>: <span className="code-string">&quot;intelligent systems&quot;</span>,{`\n`}  <span className="code-prop">learning</span>: <span className="code-key">true</span>{`\n`}{'}'};</code></pre>
          </div>
          {badges.map((badge, index) => (
            <motion.div key={badge.label} className={`glass absolute z-10 rounded-xl px-3.5 py-2 font-mono text-[10px] font-medium text-copy shadow-lg ${badge.className}`} initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + index * 0.1 }}>{badge.label}</motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
