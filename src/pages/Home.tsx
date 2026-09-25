import { useEffect, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Check, ShieldCheck, Globe, Users, Award,
  Handshake, Layers, Zap, Scale, MapPin, Quote, ChevronDown, Ship, Truck,
} from 'lucide-react'
import HeroGlobe from '../components/HeroGlobe'
import { Counter, Reveal, serviceIcons } from '../components/ui'
import {
  IMG, services, companies, memberships, leaders, offices, home, contact, warehouse,
} from '../data/site'

/** Smooth-scroll to an in-page section without touching the router. */
const jump = (e: ReactMouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  document.querySelector(e.currentTarget.getAttribute('href')!)?.scrollIntoView({ behavior: 'smooth' })
}

/* ---------- Hero ---------- */
// Captions are phrases taken from the site (Sea Freight page, homepage, Sea Freight page).
const slides = [
  { img: IMG.heroShip, pos: 'center 60%', kicker: 'Sea Freight', line: 'Reliable Ocean Freight Solutions Connecting Global Markets', icon: Ship },
  { img: IMG.multimodal, pos: 'center 40%', kicker: 'Saybolt Group', line: home.groupTagline, icon: Globe },
  { img: IMG.sayboltShip, pos: 'center 50%', kicker: 'Saybolt Express', line: 'Over 20,000 TEUs handled annually', icon: Zap },
]

/** Fixed (non-random) spread so particle positions stay stable across slide re-renders. */
const particles = Array.from({ length: 16 }, (_, k) => ({
  left: (4 + k * 6.1) % 100,
  delay: (k * 0.85) % 10,
  dur: 8 + (k % 5) * 2.2,
  size: 3 + (k % 3),
}))

/** Words for the staggered hero title reveal: [line index][word] */
const titleLines = [
  { words: ['Integrated', 'Business'], base: 0.05 },
  { words: ['Solutions.'], base: 0.32, em: true },
]

/** Subtle cursor-tracking parallax/spotlight — mutates CSS vars directly, no re-render. */
function useHeroParallax() {
  const ref = useRef<HTMLElement>(null)
  const onMove = (e: ReactMouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    ref.current?.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    ref.current?.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }
  return { ref, onMove }
}

function Hero() {
  const [i, setI] = useState(0)
  const { ref, onMove } = useHeroParallax()
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 8000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hx" ref={ref} onMouseMove={onMove}>
      <div className="hx-media" aria-hidden="true">
        {slides.map((s, k) => (
          <div key={s.img} className={`hx-slide ${k === i ? 'on' : ''}`} style={{ backgroundImage: `url(${s.img})`, backgroundPosition: s.pos }} />
        ))}
        <div className="hx-shade" />
        <div className="hx-grain" />
        <div className="hx-orb hx-orb-a" aria-hidden />
        <div className="hx-orb hx-orb-b" aria-hidden />
        <div className="hx-orb hx-orb-c" aria-hidden />
        <div className="hx-particles" aria-hidden="true">
          {particles.map((p, k) => (
            <span key={k} style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }} />
          ))}
        </div>
      </div>

      <div className="container hx-inner">
        <div className="hx-copy">
          <p className="hx-kicker"><span className="dot" /> Saybolt Group · Since 1991</p>
          <h1 className="hx-title">
            {titleLines.map((line) => (
              <span className="ln" key={line.words.join(' ')}>
                {line.words.map((w, wi) => (
                  <span className="word" key={w}>
                    <span style={{ animationDelay: `${line.base + wi * 0.09}s` }}>{line.em ? <em>{w}</em> : w}</span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <div className="hx-title-accent" aria-hidden />
          <p className="hx-lead fade-up" style={{ animationDelay: '.5s' }}>{home.heroLead}</p>
          <div className="hx-actions fade-up" style={{ animationDelay: '.65s' }}>
            <Link to="/about" className="btn btn-gold btn-lg">Learn More <ArrowRight size={20} aria-hidden /></Link>
            <a href="#services" onClick={jump} className="btn btn-glass btn-lg">Our Services</a>
          </div>
        </div>

        <div className="hx-caption fade-up" style={{ animationDelay: '.8s' }} aria-live="polite">
          <div className="hx-cap-glow" aria-hidden />
          <div key={i} className="hx-cap-top">
            <span className="hx-cap-icon">{(() => { const CapIcon = slides[i].icon; return <CapIcon size={20} aria-hidden /> })()}</span>
            <span className="hx-cap-kicker">{slides[i].kicker}</span>
          </div>
          <p key={`l${i}`} className="hx-line">{slides[i].line}</p>
          <div className="hx-dots">
            {slides.map((s, k) => (
              <button key={s.img} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Show slide ${k + 1}`}>
                {k === i && <span key={i} className="hx-dot-fill" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hx-route" aria-hidden="true">
          <span className="route-ship"><Truck size={18} aria-hidden /></span>
        </div>
      </div>

      <div className="container hx-stats-wrap">
        <div className="hx-stats fade-up" style={{ animationDelay: '.95s' }}>
          {home.stats.map((x) => (
            <div key={x.l} className="hx-stat">
              <strong><Counter to={x.n} suffix={x.s} /></strong>
              <span>{x.l}</span>
            </div>
          ))}
        </div>
      </div>
      <a href="#intro" onClick={jump} className="hx-scroll" aria-label="Scroll down"><ChevronDown size={22} /></a>
    </section>
  )
}

/* ---------- Services strip ---------- */
function Marquee() {
  const items = services.map((s) => s.title)
  return (
    <div className="services-strip">
      <div className="services-strip-mask">
        <div className="services-strip-track">
          {[0, 1].map((g) => (
            <div className="services-group" key={g}>
              {items.map((t) => <span key={t}>{t}<i>✦</i></span>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Service explorer ---------- */
function ServiceExplorer() {
  const [active, setActive] = useState(0)
  const s = services[active]
  const Icon = serviceIcons[s.icon]
  return (
    <div className="sx">
      <div className="sx-list" role="tablist" aria-label="Services">
        {services.map((x, k) => {
          const XI = serviceIcons[x.icon]
          return (
            <button
              key={x.slug}
              role="tab"
              aria-selected={k === active}
              className={`sx-tab ${k === active ? 'on' : ''}`}
              onClick={() => setActive(k)}
              onMouseEnter={() => setActive(k)}
            >
              <span className="sx-num">{String(k + 1).padStart(2, '0')}</span>
              <XI size={22} aria-hidden />
              <span className="sx-name">{x.title}</span>
              <ArrowRight size={18} className="sx-arrow" aria-hidden />
            </button>
          )
        })}
      </div>
      <div className="sx-panel" role="tabpanel">
        {services.map((x, k) => (
          <div key={x.slug} className={`sx-img ${k === active ? 'on' : ''}`} style={{ backgroundImage: `url(${x.image})` }} aria-hidden="true" />
        ))}
        <div className="sx-overlay" />
        <div className="sx-body" key={s.slug}>
          <span className="sx-badge"><Icon size={18} aria-hidden /> {s.group}</span>
          <h3>{s.title}</h3>
          {s.home.paras.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          {s.home.list && (
            <ul className="sx-chips">
              {s.home.list.map((o) => <li key={o}>{o}</li>)}
            </ul>
          )}
          <Link to={`/services/${s.slug}`} className="btn btn-gold">Learn More <ArrowRight size={18} aria-hidden /></Link>
        </div>
      </div>
      {/* Mobile: swipeable cards */}
      <div className="sx-mobile">
        {services.map((x) => (
          <Link key={x.slug} to={`/services/${x.slug}`} className="sx-card">
            <div className="sx-card-img" style={{ backgroundImage: `url(${x.image})` }} />
            <div className="sx-card-body">
              <span className="sx-badge dark">{x.group}</span>
              <h4>{x.title}</h4>
              <p>{x.home.paras[0]}</p>
              <span className="card-link">Learn More <ArrowRight size={16} aria-hidden /></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const whyIcons = [Layers, Handshake, Globe, Users, Award, ShieldCheck, Zap, Scale]

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* INTRO */}
      <section className="section intro" id="intro">
        <div className="container intro-grid">
          <Reveal className="collage">
            <div className="collage-glow" aria-hidden />
            <div className="collage-a" style={{ backgroundImage: `url(${IMG.officeBuilding})` }} />
            <div className="collage-b" style={{ backgroundImage: `url(${IMG.manufacturing})` }} />
            <div className="collage-ring" aria-hidden />
            <div className="collage-badge">
              <strong><Counter to={35} suffix="+" /></strong>
              <span>Year of<br />Experience</span>
            </div>
          </Reveal>
          <div>
            <Reveal><span className="eyebrow">About Saybolt Group</span></Reveal>
            <Reveal delay={80}><h2 className="display intro-title">Your Gateway To <em>Global</em> Solutions</h2></Reveal>
            <Reveal delay={160}>
              {home.gatewayParas.map((p, k) => (
                <p className={`body-lg ${k === 0 ? 'intro-lede' : ''}`} key={p.slice(0, 24)}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={190} className="intro-stats">
              <div className="intro-stat"><strong>1991</strong><span>Founded</span></div>
              <div className="intro-stat"><strong><Counter to={69} suffix="+" /></strong><span>Countries Served</span></div>
              <div className="intro-stat"><strong><Counter to={500} suffix="+" /></strong><span>Global Partners</span></div>
            </Reveal>
            <Reveal delay={220}>
              <ul className="value-list">
                {home.coreValues.map((v) => (
                  <li key={v}><span><Check size={16} aria-hidden /></span>{v}</li>
                ))}
              </ul>
              <Link to="/about" className="gateway-cta"><span>Learn More</span><ArrowRight size={20} aria-hidden /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section dark services-sec" id="services">
        <div className="container">
          <div className="sec-top">
            <div>
              <Reveal><span className="eyebrow gold">Our Services</span></Reveal>
              <Reveal delay={80}><h2 className="display light">Saybolt Group Is Dealing The <em>Following</em> Services</h2></Reveal>
            </div>
            <Reveal delay={160}><p className="sec-lead">{home.perfectSolution}</p></Reveal>
          </div>
          <Reveal delay={120}><ServiceExplorer /></Reveal>
        </div>
      </section>

      {/* WHY US — bento */}
      <section className="section bento-sec">
        <div className="container">
          <div className="sec-top">
            <div>
              <Reveal><span className="eyebrow">Why Saybolt</span></Reveal>
              <Reveal delay={80}><h2 className="display">Why Choose <em>Saybolt Group?</em></h2></Reveal>
            </div>
          </div>
          <div className="bento">
            <Reveal className="bento-photo">
              <div className="bento-img" style={{ backgroundImage: `url(${IMG.team})` }} />
              <span className="bento-photo-badge"><span className="dot" /> Our Promise</span>
              <div className="bento-photo-body">
                <h3>{home.partnerTitle}</h3>
                <p>{home.partnerText}</p>
              </div>
            </Reveal>
            {home.whyUs.map((w, k) => {
              const I = whyIcons[k]
              return (
                <Reveal key={w} delay={(k % 4) * 70} className={`bento-tile ${k === 2 ? 'accent' : ''}`}>
                  <span className="bento-num">{String(k + 1).padStart(2, '0')}</span>
                  <span className="bento-icon"><I size={24} aria-hidden /></span>
                  <h4>{w}</h4>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="section tint">
        <div className="container">
          <div className="sec-top">
            <div>
              <Reveal><span className="eyebrow">{home.groupTagline}</span></Reveal>
              <Reveal delay={80}><h2 className="display">Our Group <em>Companies</em></h2></Reveal>
            </div>
            <Reveal delay={160}><Link to="/companies" className="btn btn-outline">All companies <ArrowRight size={18} aria-hidden /></Link></Reveal>
          </div>
          <div className="co-grid">
            {companies.map((c, k) => (
              <Reveal key={c.slug} delay={(k % 3) * 90} className={`co-cell ${k === 0 ? 'big' : ''}`}>
                <Link to={`/companies/${c.slug}`} className="co-card">
                  <div className="co-img" style={{ backgroundImage: `url(${c.image})` }} />
                  <div className="co-shade" />
                  <div className="co-body">
                    {c.flagship && <span className="pill">Flagship</span>}
                    <h3>{c.name}</h3>
                    <p>{c.description}</p>
                  </div>
                  <span className="co-go" aria-hidden><ArrowUpRight size={22} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="section dark presence">
        <div className="container">
          <Reveal><span className="eyebrow gold">Contact Us</span></Reveal>
          <Reveal delay={80}><h2 className="display light">Get In <em>Touch</em></h2></Reveal>
          <Reveal delay={160}><p className="sec-lead">{contact.intro}</p></Reveal>
          <div className="presence-grid">
            <div className="presence-offices">
              {offices.map((o, k) => (
                <Reveal key={o.label} delay={200 + k * 90} className="po">
                  <MapPin size={20} aria-hidden />
                  <div><strong>{o.label}</strong><span>{o.address}</span></div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}><HeroGlobe /></Reveal>
          </div>
        </div>
      </section>

      {/* WAREHOUSE feature */}
      <section className="wh">
        <div className="wh-img" style={{ backgroundImage: `url(${IMG.warehouse})` }} aria-hidden="true" />
        <div className="wh-grid" aria-hidden="true" />
        <div className="container wh-inner">
          <Reveal className="wh-stat">
            <strong>1,00,000</strong>
            <span>Sq Ft Facility<br />in Savar</span>
          </Reveal>
          <Reveal className="wh-card" delay={100}>
            <span className="eyebrow gold">{warehouse.eyebrow}</span>
            <h2 className="display sm">{warehouse.title}</h2>
            <p>{warehouse.intro[0]}</p>
            <div className="wh-chips">
              {[
                { icon: ShieldCheck, label: 'Secure Storage' },
                { icon: Zap, label: 'Efficient Distribution' },
                { icon: Truck, label: 'Reliable Logistics' },
              ].map((f) => (
                <span className="wh-chip" key={f.label}><f.icon size={15} aria-hidden />{f.label}</span>
              ))}
            </div>
            <Link to="/warehouses" className="btn btn-navy">Learn More <ArrowRight size={18} aria-hidden /></Link>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="container">
          <div className="sec-top center">
            <div>
              <Reveal><span className="eyebrow">Leadership</span></Reveal>
              <Reveal delay={80}><h2 className="display">Messages From Our <em>Leadership</em></h2></Reveal>
            </div>
          </div>
          <div className="lead-grid">
            {leaders.map((l, k) => (
              <Reveal key={l.slug} delay={k * 120} className="leader">
                <div className="leader-photo" style={{ backgroundImage: `url(${l.photo})` }} role="img" aria-label={`Portrait of ${l.name}`} />
                <div className="leader-body">
                  <Quote size={30} className="quote-mark" aria-hidden />
                  <blockquote>{l.message[0]} {l.message[1].split('. ')[0]}.</blockquote>
                  <strong>{l.name}</strong>
                  <span>{l.role}, Saybolt Group</span>
                  <Link to={`/message/${l.slug}`} className="link-arrow sm">Read full message <ArrowRight size={18} aria-hidden /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS */}
      <section className="members">
        <div className="container members-inner">
          <p>{home.membersTitle}</p>
          <div className="members-marquee">
            <div className="marquee-track slow">
              {[0, 1, 2].map((k) => (
                <div className="marquee-group" key={k}>
                  {memberships.map((m) => <span key={m + k} className="member-mark">{m}</span>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
