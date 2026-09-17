import { motion } from 'framer-motion'
import { Activity, Cloud, Database, Flower2, Gauge, Map, ScanEye, Sprout } from 'lucide-react'

function WindowBar({ label }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
      <div className="flex gap-1.5"><i className="size-2 rounded-full bg-white/20" /><i className="size-2 rounded-full bg-white/15" /><i className="size-2 rounded-full bg-white/10" /></div>
      <span className="font-mono text-[8px] uppercase tracking-[.14em] text-white/45">{label}</span>
    </div>
  )
}

function MpladsVisual() {
  const bars = [42, 68, 52, 82, 61, 90, 76]
  return (
    <div className="absolute inset-[7%] overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020]/95 shadow-2xl">
      <WindowBar label="Monitoring overview" />
      <div className="grid h-[calc(100%-41px)] grid-cols-[52px_1fr]">
        <div className="border-r border-white/10 p-3"><div className="grid size-7 place-items-center rounded-lg bg-violet/25"><Gauge size={13} className="text-violet" /></div></div>
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-2">
            {[Database, Activity, Cloud].map((Icon, index) => <div key={index} className="rounded-lg border border-white/10 bg-white/[.035] p-2.5"><Icon size={12} className={index === 1 ? 'text-cyan' : 'text-violet'} /><div className="mt-3 h-1.5 w-8 rounded bg-white/20" /><div className="mt-1.5 h-1 w-12 rounded bg-white/10" /></div>)}
          </div>
          <div className="mt-3 flex h-24 items-end gap-2 rounded-lg border border-white/10 bg-white/[.025] px-3 pb-3 pt-4">
            {bars.map((height, index) => <motion.i key={index} className="flex-1 rounded-t bg-gradient-to-t from-violet/50 to-cyan" initial={{ height: '10%' }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ delay: index * 0.04, duration: 0.5 }} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function TrafficVisual() {
  return (
    <div className="absolute inset-[7%] overflow-hidden rounded-2xl border border-white/10 bg-[#07151c]/95 shadow-2xl">
      <WindowBar label="Traffic prediction model" />
      <svg viewBox="0 0 500 290" className="h-[calc(100%-41px)] w-full" aria-hidden="true">
        <defs><linearGradient id="route" x1="0" x2="1"><stop stopColor="#5eeaf0"/><stop offset="1" stopColor="#9d7cff"/></linearGradient></defs>
        <g stroke="rgba(255,255,255,.08)" strokeWidth="1"><path d="M0 58H500M0 116H500M0 174H500M0 232H500M100 0V290M200 0V290M300 0V290M400 0V290" /></g>
        <path d="M25 238C82 224 98 132 157 156S230 250 288 178 354 62 475 42" fill="none" stroke="rgba(94,234,240,.16)" strokeWidth="18" strokeLinecap="round" />
        <motion.path d="M25 238C82 224 98 132 157 156S230 250 288 178 354 62 475 42" fill="none" stroke="url(#route)" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
        {[[25,238],[157,156],[288,178],[385,82],[475,42]].map(([cx,cy], i) => <g key={i}><circle cx={cx} cy={cy} r="10" fill="#07151c" stroke={i === 2 ? '#9d7cff' : '#5eeaf0'} /><circle cx={cx} cy={cy} r="3" fill={i === 2 ? '#9d7cff' : '#5eeaf0'} /></g>)}
      </svg>
    </div>
  )
}

function EyeVisual() {
  return (
    <div className="absolute inset-[7%] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c1b]/95 shadow-2xl">
      <WindowBar label="Screening support interface" />
      <div className="relative flex h-[calc(100%-41px)] items-center justify-center">
        <span className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[8px] uppercase tracking-wider text-cyan"><i className="size-1.5 animate-pulse rounded-full bg-cyan" /> Camera input</span>
        <ScanEye className="absolute right-4 top-4 text-violet/60" size={17} />
        <svg viewBox="0 0 420 230" className="h-full w-full" aria-hidden="true">
          <path d="M55 117C96 49 165 28 210 28s114 21 155 89c-41 68-110 89-155 89S96 185 55 117Z" fill="none" stroke="rgba(125,140,255,.65)" strokeWidth="2"/>
          <circle cx="210" cy="117" r="55" fill="rgba(105,86,231,.14)" stroke="#9d7cff" strokeWidth="2"/>
          <circle cx="210" cy="117" r="23" fill="#5eeaf0" opacity=".9"/><circle cx="210" cy="117" r="9" fill="#071018"/>
          {[[170,88],[244,82],[161,139],[251,145],[210,60],[210,177]].map(([cx,cy],i)=><g key={i}><circle cx={cx} cy={cy} r="4" fill="#5eeaf0"/><path d={`M${cx} ${cy}L210 117`} stroke="rgba(94,234,240,.18)"/></g>)}
          <path d="M30 52V30h22M368 30h22v22M30 178v22h22M390 178v22h-22" fill="none" stroke="#5eeaf0" strokeWidth="2"/>
        </svg>
        <span className="absolute bottom-4 right-4 rounded-md border border-white/10 px-2 py-1 font-mono text-[7px] uppercase tracking-wider text-white/45">Risk assessment</span>
      </div>
    </div>
  )
}

function PlantsVisual() {
  const points = '20,174 72,162 118,148 168,153 215,116 264,124 310,80 358,66 405,39'
  return (
    <div className="absolute inset-[7%] overflow-hidden rounded-2xl border border-white/10 bg-[#081711]/95 shadow-2xl">
      <WindowBar label="Environmental dataset" />
      <div className="relative h-[calc(100%-41px)]">
        <svg viewBox="0 0 430 220" className="h-full w-full" aria-hidden="true">
          <g stroke="rgba(255,255,255,.07)"><path d="M20 45H410M20 90H410M20 135H410M20 180H410" /></g>
          <defs><linearGradient id="plantline"><stop stopColor="#5eeaf0"/><stop offset="1" stopColor="#79e381"/></linearGradient><linearGradient id="plantfill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#79e381" stopOpacity=".24"/><stop offset="1" stopColor="#79e381" stopOpacity="0"/></linearGradient></defs>
          <polygon points={`${points} 405,200 20,200`} fill="url(#plantfill)" />
          <motion.polyline points={points} fill="none" stroke="url(#plantline)" strokeWidth="3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
        </svg>
        <div className="absolute bottom-6 right-8 flex items-end gap-3"><Sprout className="text-[#79e381]/50" size={22}/><Flower2 className="text-[#79e381]" size={32}/></div>
      </div>
    </div>
  )
}

function IndiaVisual() {
  return (
    <div className="absolute inset-[9%] overflow-hidden rounded-2xl border border-white/10 bg-[#17100a]/95 shadow-2xl">
      <WindowBar label="Interactive map" />
      <div className="flex h-[calc(100%-41px)] items-center justify-center">
        <div className="relative grid size-24 place-items-center rounded-full border border-[#ffad70]/25 bg-[#ff8a4c]/10 sm:size-32"><Map className="text-[#ffad70]" size={46} strokeWidth={1.2}/><i className="absolute left-7 top-7 size-2 rounded-full bg-[#ffad70] shadow-[0_0_12px_#ffad70]" /><i className="absolute bottom-8 right-8 size-2 rounded-full bg-cyan shadow-[0_0_12px_#5eeaf0]" /></div>
      </div>
    </div>
  )
}

const visuals = { mplads: MpladsVisual, traffic: TrafficVisual, eye: EyeVisual, plants: PlantsVisual, india: IndiaVisual }
const accentBackgrounds = {
  violet: 'from-[#17102d] via-[#11182a] to-[#08151d]',
  cyan: 'from-[#071a20] via-[#0b1424] to-[#15102b]',
  blue: 'from-[#101630] via-[#0d1021] to-[#12102b]',
  green: 'from-[#0c2118] via-[#0a1716] to-[#11192a]',
  orange: 'from-[#28150b] via-[#151119] to-[#101829]',
}

export function ProjectVisual({ project }) {
  const Visual = visuals[project.visual]
  return (
    <div className={`project-visual-grid group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${accentBackgrounds[project.accent]}`}>
      <div className="absolute -right-[10%] -top-[18%] size-48 rounded-full bg-violet/20 blur-[70px] transition-transform duration-700 group-hover:translate-x-5 group-hover:translate-y-5" />
      <Visual />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
    </div>
  )
}
