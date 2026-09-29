import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, ArrowUp, ArrowRight, ChevronDown } from 'lucide-react'
import { Logo, Reveal } from './ui'
import { IMG, companies, offices, services, home, overview, memberships, PRIMARY_PHONE, PRIMARY_PHONE_TEL, PRIMARY_EMAIL } from '../data/site'

const nav: { to: string; label: string; items?: { to: string; label: string }[] }[] = [
  { to: '/', label: 'Home' },
  {
    to: '/about', label: 'About', items: [
      { to: '/about', label: 'Company Overview' },
      { to: '/message/ceo', label: 'CEO Message' },
      { to: '/message/gm', label: 'GM Message' },
    ],
  },
  { to: '/services', label: 'Services', items: services.map((s) => ({ to: `/services/${s.slug}`, label: s.title })) },
  { to: '/companies', label: 'Companies' },
  { to: '/warehouses', label: 'Warehouses' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [shut, setShut] = useState<string | null>(null) // dropdown hidden after a click until the mouse leaves
  const [sub, setSub] = useState<string | null>(null) // expanded submenu in the mobile menu
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    setSub(null)
    // drop focus from the clicked submenu link so :focus-within closes the dropdown
    ;(document.activeElement as HTMLElement | null)?.blur()
  }, [pathname])
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`site-header ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="container nav-inner">
        <Link to="/" aria-label="Saybolt Group home"><Logo light={!scrolled && !open} /></Link>
        <nav className="main-nav" aria-label="Main">
          {nav.map((n) =>
            n.items ? (
              <div className={`has-mega ${shut === n.to ? 'shut' : ''}`} key={n.to} onMouseLeave={() => setShut(null)}>
                <NavLink to={n.to}>{n.label} <ChevronDown size={16} aria-hidden /></NavLink>
                <div className={`mega ${n.items.length < 5 ? 'mega-sm' : ''}`} role="menu">
                  {n.items.map((i) => (
                    <Link key={i.to} to={i.to} role="menuitem" onClick={() => setShut(n.to)}>{i.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>
            ),
          )}
        </nav>
        <a href={`tel:${PRIMARY_PHONE_TEL}`} className="nav-phone"><span><Phone size={18} aria-hidden /></span><small>Call us</small>{PRIMARY_PHONE}</a>
        <Link to="/contact#quote" className="btn btn-gold nav-cta">Get a Quote</Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((n) =>
            n.items ? (
              <div key={n.to}>
                <button className="mm-toggle" aria-expanded={sub === n.to} onClick={() => setSub(sub === n.to ? null : n.to)} tabIndex={open ? 0 : -1}>
                  {n.label} <ChevronDown size={22} aria-hidden />
                </button>
                {sub === n.to && n.items.map((i) => (
                  <NavLink key={i.to} to={i.to} end className="sub" tabIndex={open ? 0 : -1}>{i.label}</NavLink>
                ))}
              </div>
            ) : (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} tabIndex={open ? 0 : -1}>{n.label} <ArrowRight size={20} aria-hidden /></NavLink>
            ),
          )}
        </nav>
        <a href={`tel:${PRIMARY_PHONE_TEL}`} className="btn btn-gold btn-block btn-lg" tabIndex={open ? 0 : -1}><Phone size={20} aria-hidden /> Call {PRIMARY_PHONE}</a>
        <a href={`mailto:${PRIMARY_EMAIL}`} className="btn btn-outline btn-block" tabIndex={open ? 0 : -1}><Mail size={20} aria-hidden /> {PRIMARY_EMAIL}</a>
      </div>
    </header>
  )
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-img" style={{ backgroundImage: `url(${IMG.containerShip})` }} aria-hidden="true" />
      <div className="container cta-inner">
        <Reveal>
          <h2>{overview.ctaTitle}</h2>
          <p>{overview.ctaText}</p>
        </Reveal>
        <Reveal delay={120} className="cta-actions">
          <Link to="/contact#quote" className="btn btn-gold btn-lg">Request a Quote <ArrowRight size={20} aria-hidden /></Link>
          <a href={`tel:${PRIMARY_PHONE_TEL}`} className="btn btn-outline-light btn-lg"><Phone size={20} aria-hidden /> {PRIMARY_PHONE}</a>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-about">{home.partnerText}</p>
          <div className="socials">
            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer">f</a>
            <a href="https://x.com/" aria-label="X (Twitter)" target="_blank" rel="noreferrer">𝕏</a>
            <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noreferrer">▶</a>
          </div>
        </div>
        <div>
          <h3>Services</h3>
          <ul>{services.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Group Companies</h3>
          <ul>{companies.map((c) => <li key={c.slug}><Link to={`/companies/${c.slug}`}>{c.name}</Link></li>)}</ul>
          <h3 className="mt">Company</h3>
          <ul>
            <li><Link to="/about">Company Overview</Link></li>
            <li><Link to="/message/ceo">CEO Message</Link></li>
            <li><Link to="/message/gm">GM Message</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          {offices.slice(0, 2).map((o) => (
            <div className="footer-office" key={o.city}>
              <strong>{o.label}</strong>
              <p>{o.address}</p>
              <a href={`tel:${o.phones[0].replace(/[^+\d]/g, '')}`}>{o.phones[0]}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Saybolt Group. All rights reserved.</span>
        <span>{home.membersTitle}: {memberships.join(' · ')}</span>
      </div>
    </footer>
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <button className={`to-top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
      <ArrowUp size={22} />
    </button>
  )
}

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  return (
    <>
      <a href="#main" className="skip" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }}>Skip to content</a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1}><Outlet /></main>
      <CtaBand />
      <Footer />
      <BackToTop />
      <a href={`tel:${PRIMARY_PHONE_TEL}`} className="call-fab" aria-label="Call Saybolt Group"><Phone size={24} /></a>
    </>
  )
}
