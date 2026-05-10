/* Components for Cre8 Your Success home
   Loaded via <script type="text/babel" src="components.jsx"></script> */

const { useState, useEffect, useRef } = React;

/* ── Logo mark: stylized "c8" infinity loop from the brand sheet ── */
function LogoMark({ size = 30 }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="lm-o" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF8833" />
          <stop offset="100%" stopColor="#FF6600" />
        </linearGradient>
        <linearGradient id="lm-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#0052CC" />
        </linearGradient>
      </defs>
      {/* blue loop (the "8") */}
      <circle cx="38" cy="36" r="14" stroke="url(#lm-b)" strokeWidth="5" fill="none" />
      {/* orange loop with arrow (the "c" with arrow) */}
      <path
        d="M 38 22 A 14 14 0 1 0 22 36"
        stroke="url(#lm-o)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round" />
      
      {/* arrow head */}
      <path d="M 38 22 L 46 22 L 46 14 M 46 22 L 38 14" stroke="url(#lm-o)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>);

}

/* ── Nav ── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className="site-nav" style={{ background: scrolled ? 'rgba(10,10,10,0.94)' : 'rgba(10,10,10,0.75)', height: "90px" }}>
      <div className="nav-left">
        <a href="#" className="nav-wordmark" aria-label="Cre8 Your Success">
          <img src={window.__resources.logo} alt="Cre8 Your Success" style={{ display: 'block', height: "80px" }} />
        </a>
        <ul className="nav-menu">
          <li className="nav-item has-dropdown">
            <a href="#services">Services</a>
            <div className="nav-dropdown">
              <div className="nav-dropdown-inner">
                <a href="voice-agents.html">Voice Agents <span className="badge-live">LIVE</span></a>
                <a href="#leadgen">Lead Generation <span className="badge-soon">SOON</span></a>
                <a href="#workflow">Workflow Automation <span className="badge-soon">SOON</span></a>
                <div className="divider"></div>
                <a href="#custom">Custom Builds</a>
              </div>
            </div>
          </li>
          <li className="nav-item has-dropdown">
            <a href="#industries">Industries</a>
            <div className="nav-dropdown">
              <div className="nav-dropdown-inner">
                <a href="#">Home Services</a>
                <a href="healthcare.html">Healthcare</a>
                <a href="#">Real Estate</a>
                <a href="#">Legal</a>
                <a href="#">E-commerce</a>
              </div>
            </div>
          </li>
          <li className="nav-item"><a href="#how">How it works</a></li>
          <li className="nav-item"><a href="#features">Platform</a></li>
        </ul>
      </div>
      <div className="nav-right">
        <a href="#cta" className="nav-cta">Book a Consult →</a>
      </div>
    </nav>);

}

/* ── Hero ── */
const HEADLINES = {
  outcome: {
    pre: <span>Automate your<br />business. <span className="accent-o">24/7.</span></span>,
    sub: "Cre8 Your Success is the automation agency for operators who refuse to lose another lead, call, or hour. We deploy AI voice agents, lead-gen systems, and custom workflows — tuned to your business."
  },
  product: {
    pre: <span>Meet the agent<br />that never<br /><span className="accent-o">misses</span> a <span className="accent-b">call.</span></span>,
    sub: "Our AI voice agents answer, qualify, and book — in your voice, on your script, around the clock. Then we layer in lead-gen and workflow automations so every inbound turns into revenue."
  },
  trust: {
    pre: <span>Stop missing<br />calls. Start <span className="accent-o">closing</span> deals.</span>,
    sub: "We build the automation stack your competitors wish they had. Voice agents that pick up in one ring. Lead systems that follow up in 30 seconds. Workflows that never sleep."
  }
};

function Hero({ variant = 'outcome' }) {
  const v = HEADLINES[variant] || HEADLINES.outcome;
  const videoRef = useRef(null);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source src={window.__resources.heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <div>
          <div className="hero-tag">
            <span className="dot"></span>
            <span>Now deploying AI voice agents for SMBs</span>
            <span className="pill">v2.6</span>
          </div>
          <h1 className="hero-title">{v.pre}</h1>
          <p className="hero-sub">{v.sub}</p>
          <div className="hero-cta">
            <a href="#cta" className="btn-primary">
              Book a Consult
              <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="#how" className="btn-ghost">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2l10 6-10 6V2z" /></svg>
              Watch 90s Overview
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">1<span className="unit">st</span></div>
              <div className="hero-stat-label">Ring · Pickup</div>
            </div>
            <div>
              <div className="hero-stat-num">24<span className="unit">/7</span></div>
              <div className="hero-stat-label">Always On</div>
            </div>
            <div>
              <div className="hero-stat-num">6<span className="unit">x</span></div>
              <div className="hero-stat-label">Reply Speed</div>
            </div>
          </div>
        </div>

      </div>
    </section>);

}

/* ── Marquee brand bar ── */
function BrandBar() {
  const items = ['Automate', 'Scale', 'Succeed', 'Voice Agents', 'Lead Gen', 'Workflows', 'Integrations', 'Analytics'];
  const row = [...items, ...items, ...items];
  return (
    <div className="brand-bar" style={{ backgroundColor: "rgb(13, 17, 23)" }}>
      <div className="marquee">
        {row.map((t, i) =>
        <React.Fragment key={i}>
            <span>{t}</span>
            <span className="dot">◆</span>
          </React.Fragment>
        )}
      </div>
    </div>);

}

/* ── How it works ── */
function HowItWorks() {
  const steps = [
  {
    step: '01',
    title: 'Map your ops',
    desc: 'We audit your calls, inbound channels, and existing tools — then identify where time is leaking and which workflows are ready for an agent.',
    icon:
    <svg viewBox="0 0 28 28" fill="none" stroke="#FF6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="10" /><path d="M14 4v20M4 14h20M7 7l14 14M21 7L7 21" /></svg>

  },
  {
    step: '02',
    title: 'Design your system',
    desc: 'We map your workflows, define how your business should run, and build the automation blueprint — pricing, scripts, integrations, and handoffs all spec\'d before a line of code.',
    icon:
    <svg viewBox="0 0 28 28" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="18" height="22" rx="4" /><path d="M10 10h8M10 14h8M10 18h5" /><circle cx="20" cy="18" r="2" fill="#0066FF" /></svg>

  },
  {
    step: '03',
    title: 'Ship & scale',
    desc: 'We launch, monitor, and tune week-over-week. As you grow we layer in lead-gen, SMS follow-ups, and custom workflows on the same stack.',
    icon:
    <svg viewBox="0 0 28 28" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22l8-8 4 4 8-10" /><path d="M16 8h8v8" /></svg>

  }];

  return (
    <section className="section section-dark" id="how" style={{ backgroundColor: "rgb(25, 32, 44)" }}>
      <div className="container">
        <div className="eyebrow">How it works</div>
        <h2 className="section-title">Three steps. One stack.<br />Zero missed revenue.</h2>
        <p className="section-sub">We're an automation agency, not a SaaS. You get a dedicated build team, a custom-trained stack, and a partner that stays in the loop after launch.</p>
        <div className="how-grid">
          {steps.map((s, i) =>
          <div className="how-card" key={i}>
              <div className="how-step">{s.step}</div>
              <div className="how-glyph">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ── Features bento grid ── */
function Features() {
  return (
    <section className="section section-darker" id="features" style={{ backgroundColor: "rgb(13, 17, 23)" }}>
      <div className="container">
        <div className="eyebrow">The Platform</div>
        <h2 className="section-title">Everything you need to<br />automate the top of funnel.</h2>
        <p className="section-sub">Voice, lead-gen, and workflows — built together, deployed together, measured together. Start with one. Grow into all three.</p>

        <div className="feat-grid">
          {/* Big: Voice Agent */}
          <div className="feat lg voice-card" style={{ backgroundColor: "rgb(6, 8, 11)" }}>
            <span className="tag live">● LIVE</span>
            <div className="voice-card-grid">
              <div className="voice-card-left">
                <h3>AI Voice Agents</h3>
                <p>Pick up every call in the first ring. Qualify leads, book appointments, handle FAQs, and hand off to a human when it matters — in a voice trained on your brand.</p>
                <div className="viz-voice">
                  <div className="voice-row">
                    <div className="av user">MC</div>
                    <div className="txt">"Hey, do you guys do emergency service after hours?"</div>
                  </div>
                  <div className="voice-row active">
                    <div className="av agent">C8</div>
                    <div className="txt">"We sure do — 24/7. What's the issue, and what zip are you in?"</div>
                    <div className="wave">
                      {Array.from({ length: 5 }).map((_, i) => <span key={i}></span>)}
                    </div>
                  </div>
                  <div className="voice-row">
                    <div className="av user">MC</div>
                    <div className="txt">"92101 — water heater's leaking pretty bad."<span className="typing"><span></span><span></span><span></span></span></div>
                  </div>
                </div>
              </div>
              <div className="voice-card-video">
                <video autoPlay loop muted playsInline>
                  <source src={window.__resources.voiceVideo} type="video/mp4" />
                </video>
                <div className="voice-card-video-hud">
                  <span className="hud-chip"><span className="live-dot"></span>LIVE · CRE8 AGENT</span>
                  <span className="hud-chip">◉ REC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Gen — REMOVED */}

          {/* Integrations */}
          <div className="feat sm" style={{ backgroundColor: "rgb(6, 8, 11)" }}>
            <span className="tag">STACK</span>
            <h3>Connects to your tools</h3>
            <p>We plug into your CRM, calendar, phone system, and spreadsheets.</p>
            <div className="integrations">
              <span className="integ"><span className="d on"></span>HubSpot</span>
              <span className="integ"><span className="d on" style={{ backgroundColor: "rgb(0, 102, 255)" }}></span>GoHighLevel</span>
              <span className="integ"><span className="d on"></span>Twilio</span>
              <span className="integ"><span className="d" style={{ backgroundColor: "rgb(0, 102, 255)" }}></span>Salesforce</span>
              <span className="integ"><span className="d on"></span>Google Cal</span>
              <span className="integ"><span className="d on" style={{ backgroundColor: "rgb(0, 102, 255)" }}></span>Slack</span>
              <span className="integ"><span className="d on"></span>Stripe</span>
              <span className="integ"><span className="d" style={{ backgroundColor: "rgb(0, 102, 255)" }}></span>Zapier</span>
            </div>
          </div>

          {/* Analytics metric */}
          <div className="feat sm2" style={{ backgroundColor: "rgb(6, 8, 11)" }}>
            <span className="tag new">NEW</span>
            <h3>Real-time analytics</h3>
            <p>Pickup rate, qualification rate, booked revenue — live.</p>
            <div className="viz-metric">
              <div className="big">98<span className="unit">%</span></div>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 4 }}>First-ring pickup</div>
                <span className="trend">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M5 2l4 5H1z" /></svg>
                  +12 pts vs. human team
                </span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="feat sm3" style={{ backgroundColor: "rgb(6, 8, 11)" }}>
            <span className="tag">30-DAY</span>
            <h3>Booked meetings</h3>
            <p>Weekly trend from your agents and lead-gen combined.</p>
            <div className="viz-chart">
              <svg viewBox="0 0 200 110" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FF6600" stopOpacity=".5" />
                    <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,85 L20,78 L40,82 L60,65 L80,70 L100,50 L120,55 L140,35 L160,40 L180,20 L200,25 L200,110 L0,110 Z" fill="url(#cg)" />
                <path d="M0,85 L20,78 L40,82 L60,65 L80,70 L100,50 L120,55 L140,35 L160,40 L180,20 L200,25" fill="none" stroke="#FF6600" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
                {[[0, 85], [40, 82], [80, 70], [120, 55], [160, 40], [200, 25]].map(([x, y], i) =>
                <circle key={i} cx={x} cy={y} r="2.4" fill="#0A0A0A" stroke="#FF6600" strokeWidth="1.6" />
                )}
              </svg>
            </div>
          </div>

          {/* Wide: Custom workflows */}
          <div className="feat wide" style={{ backgroundColor: "rgb(6, 8, 11)" }}>
            <span className="tag">MODULAR</span>
            <h3>Custom workflow automations</h3>
            <p style={{ maxWidth: 640 }}>Beyond voice and leads — we build whatever repeatable, revenue-adjacent work is eating your team's hours. Quoting, follow-ups, review requests, onboarding, reporting. If a human is copy-pasting between tabs, we can replace that loop.</p>
            <div className="viz-stack">
              {['INTAKE', 'QUOTE', 'SEND', 'FOLLOW', 'SIGN', 'BILL', 'NOTIFY', 'ARCHIVE'].map((t, i) =>
              <div className="stack-cell" key={i}>{t}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ── CTA band ── */
function CtaBand() {
  return (
    <section className="cta-band" id="cta">
      <div className="cta-inner">
        <h2>Let's build your <span className="accent">unfair advantage.</span></h2>
        <p>Book a 30-minute discovery call. We'll map your biggest automation wins and show you exactly what your agent will sound like.</p>
        <div className="cta-btns">
          <a href="#" className="btn-primary">
            Book a Consult
            <svg className="arrow" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </section>);

}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="site-footer" style={{ backgroundColor: "rgb(13, 17, 23)" }}>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={window.__resources.logo} alt="Cre8 Your Success" style={{ height: 44, display: 'block' }} />
          </div>
          <div className="footer-tagline">
            Automate <span className="dot">●</span> Scale <span className="dot">●</span> Succeed
          </div>
          <p>An automation agency for operators. We build the stack — voice, leads, and workflows — that keeps revenue moving while you sleep.</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Voice Agents</a></li>
            <li><a href="#">Lead Generation</a></li>
            <li><a href="#">Workflow Automation</a></li>
            <li><a href="#">Custom Builds</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Cre8 Your Success. All systems operational.</span>
        <div className="socials">
          <a href="https://www.linkedin.com/company/cre8-your-success-llc/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M3.6 5.4h2.5v7.8H3.6V5.4zM4.9 2.2a1.4 1.4 0 100 2.9 1.4 1.4 0 000-2.9zM7.7 5.4h2.4v1.1h.04c.3-.6 1.2-1.3 2.4-1.3 2.5 0 3 1.7 3 3.9v4h-2.5V9.5c0-1 0-2.2-1.3-2.2s-1.6 1-1.6 2.2v3.8H7.7V5.4z" /></svg></a>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { LogoMark, Nav, Hero, BrandBar, HowItWorks, Features, CtaBand, Footer });