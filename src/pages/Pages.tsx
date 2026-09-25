import { useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight, Check, CircleCheck, Mail, MapPin, Phone, Quote, Send, ShieldCheck, Upload,
} from 'lucide-react'
import { Counter, PageHero, Reveal, SectionHead, serviceIcons } from '../components/ui'
import type { Item, PageContent } from '../data/types'
import {
  IMG, services, companies, offices, leaders, overview, warehouse, careers, contact,
  CAREERS_EMAIL, PRIMARY_PHONE_TEL,
} from '../data/site'

/* ---------- Shared: render verbatim page content ---------- */
function ItemLi({ it }: { it: Item }) {
  return typeof it === 'string'
    ? <li><CircleCheck size={22} aria-hidden /> <span>{it}</span></li>
    : <li className="labelled"><CircleCheck size={22} aria-hidden /> <span><strong>{it.label}:</strong> {it.text}</span></li>
}

function ContentBody({ page }: { page: PageContent }) {
  return (
    <div className="content-body">
      <Reveal>
        {page.tagline && <h2 className="h-tagline">{page.tagline}</h2>}
        {page.intro.map((p) => <p className="body-lg" key={p.slice(0, 30)}>{p}</p>)}
      </Reveal>
      {page.blocks.map((b) => {
        const labelled = b.items?.some((i) => typeof i !== 'string')
        return (
          <Reveal key={b.heading} className="content-block">
            <h2 className="h-sm">{b.heading}</h2>
            {b.paras?.map((p) => <p className="body-lg" key={p.slice(0, 30)}>{p}</p>)}
            {b.intro && <p className="body-lg">{b.intro}</p>}
            {b.items && (
              <ul className={`check-list ${labelled ? 'one-col' : ''}`}>
                {b.items.map((it, k) => <ItemLi key={k} it={it} />)}
              </ul>
            )}
            {b.after?.map((p) => <p className="body-lg after" key={p.slice(0, 30)}>{p}</p>)}
          </Reveal>
        )
      })}
      {page.closing && (
        <Reveal className="closing">
          {page.closing.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
        </Reveal>
      )}
    </div>
  )
}

function SideCard({ title }: { title: string }) {
  return (
    <Reveal delay={150} as="aside" className="side-card">
      <h3>{title}</h3>
      <p>{contact.formIntro}</p>
      <Link to="/contact#quote" className="btn btn-gold btn-block">Send Us A Message</Link>
      <a href={`tel:${PRIMARY_PHONE_TEL}`} className="btn btn-outline btn-block"><Phone size={18} aria-hidden /> Call Us</a>
      <ul className="side-points">
        <li><ShieldCheck size={18} aria-hidden /> Since 1991</li>
      </ul>
    </Reveal>
  )
}

/* ---------------- ABOUT / COMPANY OVERVIEW ---------------- */
export function About() {
  return (
    <>
      <PageHero eyebrow="Company Overview" title={overview.title} image={IMG.multimodal} />
      <section className="section">
        <div className="container detail-grid">
          <div>
            <Reveal><span className="eyebrow">{overview.eyebrow}</span></Reveal>
            <Reveal>{overview.story.map((p) => <p className="body-lg" key={p.slice(0, 30)}>{p}</p>)}</Reveal>
          </div>
          <Reveal delay={120} as="aside" className="numbers-card">
            <h3>{overview.numbersTitle}</h3>
            {overview.numbers.map((n) => (
              <div className="num" key={n.l}>
                <strong><Counter to={n.n} suffix={n.s} /></strong>
                <span>{n.l}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="section tint">
        <div className="container narrow">
          <SectionHead eyebrow="Our purpose" title="Our Purpose" />
          <Reveal>{overview.purpose.map((p) => <p className="body-lg" key={p.slice(0, 30)}>{p}</p>)}</Reveal>
        </div>
      </section>
      <section className="section" id="leadership">
        <div className="container">
          <SectionHead center eyebrow="Leadership" title="Messages From Our Leadership" />
          <div className="lead-grid">
            {leaders.map((l, i) => (
              <Reveal key={l.slug} delay={i * 120} className="leader">
                <div className="leader-photo" style={{ backgroundImage: `url(${l.photo})` }} role="img" aria-label={`Portrait of ${l.name}`} />
                <div className="leader-body">
                  <Quote size={30} className="quote-mark" aria-hidden />
                  <blockquote>{l.message[0]}</blockquote>
                  <strong>{l.name}</strong>
                  <span>{l.role}, Saybolt Group</span>
                  <Link to={`/message/${l.slug}`} className="link-arrow sm">Read full message <ArrowRight size={18} aria-hidden /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- CEO / GM MESSAGE ---------------- */
export function Message() {
  const { slug } = useParams()
  const l = leaders.find((x) => x.slug === slug)
  if (!l) return <NotFound />
  return (
    <>
      <PageHero eyebrow="Leadership" title={l.heading} image={IMG.heroShip} />
      <section className="section">
        <div className="container letter-grid">
          <Reveal className="letter-photo">
            <div className="leader-photo tall" style={{ backgroundImage: `url(${l.photo})` }} role="img" aria-label={`Portrait of ${l.name}`} />
            <strong>{l.name}</strong>
            <span>{l.role}, Saybolt Group</span>
          </Reveal>
          <Reveal delay={100} className="letter">
            <Quote size={40} className="quote-mark" aria-hidden />
            {l.message.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            <div className="signature">
              <strong>{l.name}</strong>
              <span>{l.role}</span>
              <span>Saybolt Group</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ---------------- SERVICES ---------------- */
export function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Saybolt Group Is Dealing The Following Services" lead="The Only Place Where You’ll Get The Perfect Solution For All Your Industry Needs." image={IMG.cover} />
      <section className="section">
        <div className="container card-grid">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon]
            return (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link to={`/services/${s.slug}`} className="service-card photo">
                  <div className="service-card-img" style={{ backgroundImage: `url(${s.image})` }} />
                  <div className="service-card-body">
                    <span className="icon-tile"><Icon size={26} aria-hidden /></span>
                    <h4>{s.title}</h4>
                    <p>{s.home.paras[0]}</p>
                    <span className="card-link">Learn More <ArrowRight size={18} aria-hidden /></span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}

export function ServiceDetail() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  if (!s) return <NotFound />
  const Icon = serviceIcons[s.icon]
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3)
  return (
    <>
      <PageHero eyebrow={s.group} title={s.page.title} image={s.image}>
        <div className="hero-icon"><Icon size={36} aria-hidden /></div>
      </PageHero>
      <section className="section">
        <div className="container detail-grid">
          <ContentBody page={s.page} />
          <SideCard title={contact.formTitle} />
        </div>
      </section>
      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="Explore more" title="Other Services" />
          <div className="card-grid">
            {others.map((o) => {
              const OIcon = serviceIcons[o.icon]
              return (
                <Link key={o.slug} to={`/services/${o.slug}`} className="service-card photo">
                  <div className="service-card-img" style={{ backgroundImage: `url(${o.image})` }} />
                  <div className="service-card-body">
                    <span className="icon-tile"><OIcon size={26} aria-hidden /></span>
                    <h4>{o.title}</h4>
                    <p>{o.page.tagline}</p>
                    <span className="card-link">Learn More <ArrowRight size={18} aria-hidden /></span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- COMPANIES ---------------- */
export function Companies() {
  return (
    <>
      <PageHero eyebrow="One Group. Multiple Industries. Unlimited Possibilities." title="Our Group Companies" image={IMG.sayboltShip} />
      <section className="section">
        <div className="container company-list">
          {companies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link to={`/companies/${c.slug}`} className={`company-row ${c.flagship ? 'flagship' : ''}`}>
                <div className="company-thumb" style={{ backgroundImage: `url(${c.image})` }} />
                <div>
                  <div className="row-head"><h3>{c.name}</h3>{c.flagship && <span className="pill">Flagship</span>}</div>
                  <p>{c.description}</p>
                </div>
                <span className="btn btn-outline">Learn More <ArrowRight size={16} aria-hidden /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export function CompanyDetail() {
  const { slug } = useParams()
  const c = companies.find((x) => x.slug === slug)
  if (!c) return <NotFound />
  return (
    <>
      <PageHero eyebrow="Our Group Companies" title={c.page.title} image={c.image} />
      <section className="section">
        <div className="container detail-grid">
          <ContentBody page={c.page} />
          <SideCard title={contact.formTitle} />
        </div>
      </section>
    </>
  )
}

/* ---------------- WAREHOUSES ---------------- */
export function Warehouses() {
  return (
    <>
      <PageHero eyebrow={warehouse.eyebrow} title={warehouse.title} image={IMG.warehouse} />
      <section className="section">
        <div className="container detail-grid">
          <div>
            <ContentBody page={warehouse} />
            <Reveal><p className="motto">{warehouse.motto}</p></Reveal>
          </div>
          <SideCard title={contact.formTitle} />
        </div>
      </section>
    </>
  )
}

/* ---------------- CAREERS ---------------- */
export function Careers() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageHero eyebrow="Career" title={careers.title} image={IMG.team}>
        <p className="lead" style={{ marginTop: 16 }}>{careers.lead} <a className="hero-mail" href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a></p>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="Career" title={careers.benefitsTitle} />
          <div className="benefit-grid">
            {careers.benefits.map((b, i) => (
              <Reveal key={b} delay={(i % 4) * 60} className="benefit"><Check size={20} aria-hidden /> {b}</Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Apply" title="Send Your CV" />
            <Reveal className="empty-state">
              <p className="body-lg">{careers.lead}</p>
              <p><a href={`mailto:${CAREERS_EMAIL}`}>{CAREERS_EMAIL}</a></p>
            </Reveal>
          </div>
          <Reveal delay={120} className="form-card">
            {sent ? <Success text="Thank you. Your details have been received." /> : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <label className="field">
                  <span>CV (PDF or Word)</span>
                  <span className="file-input"><Upload size={18} aria-hidden /><input type="file" accept=".pdf,.doc,.docx" /></span>
                </label>
                <button className="btn btn-gold btn-block btn-lg" type="submit">Submit <Send size={18} aria-hidden /></button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ---------------- CONTACT ---------------- */
function Field({ label, name, type = 'text', required, textarea }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  return (
    <label className="field">
      <span>{label}{required && <em aria-hidden> *</em>}</span>
      {textarea ? <textarea name={name} rows={5} required={required} /> : <input name={name} type={type} required={required} />}
    </label>
  )
}

function Success({ text }: { text: string }) {
  return (
    <div className="success" role="status">
      <CircleCheck size={48} aria-hidden />
      <h3>Message received</h3>
      <p>{text}</p>
    </div>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true) }
  return (
    <>
      <PageHero eyebrow="Contact Us" title={contact.title} lead={contact.intro} image={IMG.heroShip} />
      <section className="section">
        <div className="container office-grid four">
          {offices.map((o, i) => (
            <Reveal key={o.label} delay={i * 90} className="office-card">
              <h3>{o.label}</h3>
              <p className="office-line"><MapPin size={20} aria-hidden /> {o.address}</p>
              {o.phones.map((p) => (
                <a key={p} className="office-line" href={`tel:${p.replace(/[^+\d]/g, '')}`}><Phone size={20} aria-hidden /> {p}</a>
              ))}
              {o.email && <a className="office-line" href={`mailto:${o.email}`}><Mail size={20} aria-hidden /> {o.email}</a>}
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section tint" id="quote">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Contact Us" title={contact.formTitle} lead={contact.formIntro} />
            <Reveal className="map-wrap">
              <iframe
                title="Saybolt Group Dhaka office map"
                src="https://www.google.com/maps?q=33+Topkhana+Road,+Dhaka+1000&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
          <Reveal delay={120} className="form-card">
            {sent ? <Success text="Thank you for contacting Saybolt Group." /> : (
              <form onSubmit={submit}>
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Subject" name="subject" required />
                <Field label="Comment or Message" name="message" required textarea />
                <button className="btn btn-gold btn-block btn-lg" type="submit">Submit <Send size={18} aria-hidden /></button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <PageHero eyebrow="404" title="Page not found">
      <Link to="/" className="btn btn-gold btn-lg" style={{ marginTop: 24 }}>Back to Home</Link>
    </PageHero>
  )
}
