import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react'
import {
  Plane, Ship, Construction, Network, Shirt, Factory, Cpu, Briefcase, Printer, Megaphone,
} from 'lucide-react'
import type { IconName } from '../data/site'

export const serviceIcons: Record<IconName, ElementType> = {
  plane: Plane, ship: Ship, crane: Construction, network: Network, shirt: Shirt,
  factory: Factory, cpu: Cpu, briefcase: Briefcase, printer: Printer, megaphone: Megaphone,
}

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Fades + lifts children into view once when they enter the viewport. */
export function Reveal({
  children, delay = 0, as: Tag = 'div', className = '',
}: { children: ReactNode; delay?: number; as?: ElementType; className?: string }) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced()) { setShown(true); return }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/** Counts up to `to` when scrolled into view. */
export function Counter({ to, suffix = '', duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced()) { setVal(to); return }
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration)
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to, duration])
  return <span ref={ref}>{val.toLocaleString('en-US')}{suffix}</span>
}

export function SectionHead({
  eyebrow, title, lead, center = false, light = false,
}: { eyebrow: string; title: ReactNode; lead?: string; center?: boolean; light?: boolean }) {
  return (
    <Reveal className={`section-head ${center ? 'center' : ''} ${light ? 'light' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}

export function PageHero({ eyebrow, title, lead, children, image }: { eyebrow: string; title: string; lead?: string; children?: ReactNode; image?: string }) {
  return (
    <section className="page-hero">
      {image && <div className="page-hero-img" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />}
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <span className="eyebrow gold">{eyebrow}</span>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className={`logo ${light ? 'light' : ''}`}>
      {!failed ? (
        <img
          src="https://sayboltgroup.com/wp-content/uploads/elementor/thumbs/logo_half-removebg-preview-rqwdzrlpfeucbcbaygr270rz3bmyka0zuunksuuv4k.png"
          alt=""
          width={52}
          height={34}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="logo-mark" aria-hidden="true">S</span>
      )}
      <span className="logo-text">
        <strong>SAYBOLT</strong>
        <small>GROUP · SINCE 1991</small>
      </span>
    </span>
  )
}
