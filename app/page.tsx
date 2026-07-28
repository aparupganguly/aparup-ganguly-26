"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const featuredProjects = [
  {
    name: "Hyperbrowser",
    role: "Growth Engineer",
    description:
      "Growth engineering across user and social growth, marketing content, product launches, and the Hyperbrowser marketing site.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "LLMs",
      "AI Agents",
      "Computer Use",
      "Growth Engineering",
      "Tailwind CSS",
      "Marketing Site",
      "Content Systems",
    ],
    website: "https://www.hyperbrowser.ai",
    github: "https://github.com/hyperbrowserai/hyperbrowser-app-examples",
    icon: "/icons/hyperbrowser.png",
  },
  {
    name: "Firecrawl",
    role: "Developer Experience Engineer",
    description:
      "External integrations, production-ready examples, and developer tooling that brought new users into the Firecrawl ecosystem.",
    tech: [
      "Node.js",
      "TypeScript",
      "Python",
      "APIs",
      "SDKs",
      "Open Source",
      "Integrations",
      "Examples",
      "Developer Docs",
      "API Design",
    ],
    website: "https://www.firecrawl.dev",
    github: "https://github.com/firecrawl/firecrawl/tree/main/examples",
    icon: "/icons/firecrawl.png",
  },
  {
    name: "Origin",
    role: "Co-Founder",
    description:
      "Built the full product end-to-end: core tooling, systems, and the marketing website from the ground up as co-founder.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "LLMs",
      "RAG",
      "AI Agents",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    website: "https://www.tryorigin.ai",
    icon: "/icons/origin.png",
  },
];

const capabilities = [
  {
    index: "01",
    title: "Growth Systems",
    body: "Repeatable, engineering-led acquisition systems for developer products, from experiments to durable growth loops.",
    icon: "growth",
  },
  {
    index: "02",
    title: "AI Products",
    body: "AI-native tools, LLM workflows, and agent pipelines designed for real production use, not demos.",
    icon: "ai",
  },
  {
    index: "03",
    title: "Product Engineering",
    body: "Full-stack product work across modern web stacks, APIs, and data systems with a bias toward shipping.",
    icon: "code",
  },
  {
    index: "04",
    title: "Developer Experience",
    body: "APIs, docs, SDKs, and examples that make tools easy to evaluate, integrate, and recommend.",
    icon: "dx",
  },
  {
    index: "05",
    title: "Automation",
    body: "Scrapers, queues, and internal tooling that remove busywork and scale operations quietly.",
    icon: "auto",
  },
  {
    index: "06",
    title: "Go-To-Market",
    body: "Marketing sites, launch content, and founder-facing materials that reach the right technical audience.",
    icon: "gtm",
  },
];

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Get in Touch", cta: true },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("aparupganguly86@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-inner">
          <div className="brand">
            <span>Aparup Ganguly</span>
          </div>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.cta ? (
                <a key={item.href} href={item.href} className="btn-primary nav-cta">
                  {item.label}
                </a>
              ) : (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              )
            )}
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <nav
            id="mobile-nav"
            className={`mobile-nav${menuOpen ? " is-open" : ""}`}
            aria-label="Mobile navigation"
            hidden={!menuOpen}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 min-w-0">
        {/* Hero */}
        <section className="section bg-[var(--surface)] overflow-hidden">
          <div className="section-inner section-inner--hero hero-grid">
            <div className="hero-copy">
              <div className="eyebrow hero-reveal hero-reveal--1">
                <span className="status-dot" />
                <span>01 / End-to-End Product Builder</span>
              </div>
              <h1 className="display-title hero-reveal hero-reveal--2">
                Designing, building and growing AI products from{" "}
                <span className="nowrap">0 → 1.</span>
              </h1>
              <p className="body-text hero-reveal hero-reveal--3">
                End-to-end product builder spanning engineering, design, AI,
                and growth to ship products people actually use.
              </p>
              <div className="hero-actions hero-reveal hero-reveal--4">
                <a href="#work" className="btn-primary">
                  View Work
                </a>
                <a href="#contact" className="btn-secondary">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <ProductLoopGraphic />
            </div>
          </div>
        </section>

        {/* Thesis */}
        <section className="section bg-[var(--canvas)]">
          <div className="section-inner section-inner--sm">
            <div className="thesis-block">
              <span className="label-mono">The Core Thesis</span>
              <blockquote className="quote-text">
                &ldquo;I take ideas from 0 → 1 and own every part of that
                journey: designing interfaces, writing full-stack systems,
                deploying AI pipelines, and building growth loops.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section bg-[var(--surface)]">
          <div className="section-inner about-grid">
            <div className="min-w-0">
              <span className="eyebrow">02 / Approach</span>
              <h2 className="section-title">How I Work</h2>
            </div>
            <div className="about-columns min-w-0">
              <div className="about-item">
                <h3 className="card-title">Cross-Disciplinary</h3>
                <p className="body-text">
                  I operate at the intersection of roles instead of isolating
                  in one. I write code, structure database systems, layout
                  Figma templates, and implement acquisition funnels.
                </p>
              </div>
              <div className="about-item">
                <h3 className="card-title">Tightly Connected</h3>
                <p className="body-text">
                  I believe the best product details are born when engineering,
                  design, and growth are treated as a single unified craft,
                  ensuring high-fidelity implementation and immediate market
                  feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section bg-[var(--canvas)]">
          <div className="section-inner">
            <div className="section-head">
              <div className="min-w-0">
                <span className="eyebrow">03 / History</span>
                <h2 className="section-title">Professional Experience</h2>
              </div>
              <span className="section-head-meta">Building Dev Products</span>
            </div>

            <div className="exp-grid">
              <article className="exp-card">
                <div className="exp-card-header">
                  <div className="exp-card-meta">
                    <Image
                      src="/icons/hyperbrowser.png"
                      alt="Hyperbrowser"
                      width={40}
                      height={40}
                      className="company-icon company-icon--lg"
                    />
                    <div className="exp-card-meta-text">
                      <div className="exp-card-title-row">
                        <h3 className="card-title">Hyperbrowser</h3>
                        <YcBadge />
                      </div>
                      <p className="meta-text">Growth Engineer</p>
                    </div>
                  </div>
                  <span className="exp-badge exp-badge--current">
                    Current (~1.5 yrs)
                  </span>
                </div>
                <ul className="exp-list">
                  <li>
                    <span className="exp-dot exp-dot--accent" aria-hidden="true" />
                    <span>
                      Drove user and social growth through product launches,
                      campaigns, and distribution experiments with founders.
                    </span>
                  </li>
                  <li>
                    <span className="exp-dot exp-dot--accent" aria-hidden="true" />
                    <span>
                      Owned marketing content and the Hyperbrowser marketing site,
                      from copy and design systems to high-converting pages.
                    </span>
                  </li>
                  <li>
                    <span className="exp-dot exp-dot--accent" aria-hidden="true" />
                    <span>
                      Built AI workflows, data pipelines, and internal growth tools
                      that powered acquisition and product launches.
                    </span>
                  </li>
                </ul>
              </article>

              <article className="exp-card">
                <div className="exp-card-header">
                  <div className="exp-card-meta">
                    <Image
                      src="/icons/firecrawl.png"
                      alt="Firecrawl"
                      width={40}
                      height={40}
                      className="company-icon company-icon--lg"
                    />
                    <div className="exp-card-meta-text">
                      <div className="exp-card-title-row">
                        <h3 className="card-title">Firecrawl</h3>
                        <YcBadge />
                      </div>
                      <p className="meta-text">Developer Experience Engineer</p>
                    </div>
                  </div>
                  <span className="exp-badge exp-badge--past">Past Role</span>
                </div>
                <ul className="exp-list">
                  <li>
                    <span className="exp-dot" aria-hidden="true" />
                    <span>
                      Built external integrations and production-ready examples
                      that developers shipped with and that drove new user
                      adoption.
                    </span>
                  </li>
                  <li>
                    <span className="exp-dot" aria-hidden="true" />
                    <span>
                      Strengthened APIs, technical documentation, and SDK tooling
                      to reduce onboarding friction.
                    </span>
                  </li>
                  <li>
                    <span className="exp-dot" aria-hidden="true" />
                    <span>
                      Shipped developer-facing examples and client libraries that
                      made Firecrawl easier to evaluate and integrate.
                    </span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section bg-[var(--surface)]">
          <div className="section-inner">
            <div className="section-head">
              <div className="min-w-0">
                <span className="eyebrow">04 / Featured Work</span>
                <h2 className="section-title">Featured Work</h2>
              </div>
              <span className="section-head-meta">
                Production Products & Open Source
              </span>
            </div>

            <div className="project-list">
              {featuredProjects.map((project, index) => (
                <div key={project.name} className="project-row group">
                  <div className="project-row-main">
                    <div className="project-identity">
                      <span className="label-mono">
                        0{index + 1} / {project.role}
                      </span>
                      <div className="project-name-row">
                        <Image
                          src={project.icon}
                          alt=""
                          width={28}
                          height={28}
                          className={`company-icon${project.name === "Origin" ? " company-icon--origin" : ""}`}
                          unoptimized={project.name === "Origin"}
                        />
                        <h3 className="project-title">{project.name}</h3>
                      </div>
                    </div>

                    <div className="project-body">
                      <p className="body-text">{project.description}</p>
                      {project.tech && (
                        <div className="tech-row">
                          {project.tech.map((t) => (
                            <span key={t} className="tech-chip">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="project-links">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        Live Website <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="section bg-[var(--canvas)]">
          <div className="section-inner">
            <div className="section-head">
              <div className="min-w-0">
                <span className="eyebrow">05 / Capabilities</span>
                <h2 className="section-title">Core Capabilities & Focus</h2>
              </div>
              <span className="section-head-meta">What I bring</span>
            </div>

            <div className="cap-grid">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.index}
                  className={`cap-shell cap-shell--${(i % 3) + 1}`}
                >
                  <span className="cap-corner cap-corner--tl" aria-hidden="true" />
                  <span className="cap-corner cap-corner--tr" aria-hidden="true" />
                  <span className="cap-corner cap-corner--bl" aria-hidden="true" />
                  <span className="cap-corner cap-corner--br" aria-hidden="true" />
                  <article className="cap-card">
                    <div className="cap-card-header">
                      <span className="cap-icon" aria-hidden="true">
                        <CapIcon name={cap.icon} />
                      </span>
                      <span className="cap-index">{cap.index}</span>
                    </div>
                    <div className="cap-card-body">
                      <h3 className="card-title">{cap.title}</h3>
                      <p className="body-text">{cap.body}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-[var(--surface)]">
          <div className="section-inner">
            <span className="eyebrow">06 / Contact</span>
            <p className="contact-intro">
              Need to take an idea from 0 to 1? Let&apos;s build.
            </p>

            <div className="contact-row">
              <a
                href="mailto:aparupganguly86@gmail.com"
                className="contact-email"
              >
                aparupganguly86@gmail.com
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`copy-email-btn${copied ? " is-copied" : ""}`}
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                {copied ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path
                        d="M2 6.5L4.5 9L10 3"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <rect
                        x="4"
                        y="4"
                        width="6.5"
                        height="6.5"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M8 4V2.8C8 2.36 7.64 2 7.2 2H2.8C2.36 2 2 2.36 2 2.8v4.4C2 7.64 2.36 8 2.8 8H4"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Copy Email
                  </>
                )}
              </button>
            </div>

            <div className="social-row">
              <div className="social-links">
                <a
                  href="https://github.com/aparupganguly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/aparupganguly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://x.com/aparup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  TWITTER / X
                </a>
              </div>
              <span>© {new Date().getFullYear()} Aparup Ganguly</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>Aparup Ganguly</span>
        </div>
      </footer>
    </div>
  );
}

function CapIcon({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "growth":
      return (
        <svg {...common}>
          <path d="M4 19V9" />
          <path d="M10 19V5" />
          <path d="M16 19v-7" />
          <path d="M22 19V3" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 9h.01M15 9h.01M9 15h6" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M8 8l-4 4 4 4" />
          <path d="M16 8l4 4-4 4" />
          <path d="M13 6l-2 12" />
        </svg>
      );
    case "dx":
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M4 12h10" />
          <path d="M4 17h7" />
          <path d="M16 14l4 3-4 3" />
        </svg>
      );
    case "auto":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        </svg>
      );
    case "gtm":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 010 18" />
          <path d="M12 3a14 14 0 000 18" />
        </svg>
      );
    default:
      return null;
  }
}

function YcBadge() {
  return (
    <span className="yc-badge" title="Y Combinator backed">
      <svg
        className="yc-badge-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="24" height="24" rx="4" fill="#FF6600" />
        <path
          fill="#fff"
          d="M6.951 5.896l4.112 7.708v5.064h1.583v-4.972l4.148-7.799h-1.749l-2.457 4.875c-.372.745-.688 1.434-.688 1.434s-.297-.708-.651-1.434L8.831 5.896h-1.88z"
        />
      </svg>
      <span>Y Combinator</span>
    </span>
  );
}

function ProductLoopGraphic() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Defer one frame so CSS transitions/animations reliably start after mount
    const id = requestAnimationFrame(() => setActive(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`loop-graphic${active ? " is-active" : ""}`}
      aria-hidden="true"
    >
      <div className="loop-graphic-rule-h" />
      <div className="loop-graphic-rule-v" />
      <div className="loop-center">0 → 1</div>

      <div className="loop-cell" style={{ "--i": 0 } as React.CSSProperties}>
        <span className="loop-cell-label">01 / Design</span>
        <div className="loop-cell-media">
          <div className="loop-ui-mock">
            <div className="loop-ui-bar">
              <span className="loop-ui-dot" />
              <span className="loop-ui-line" />
            </div>
            <div className="loop-ui-grid">
              <span className="loop-ui-block" />
              <span className="loop-ui-block" />
            </div>
          </div>
        </div>
        <span className="loop-cell-title">UI & Product Specs</span>
      </div>

      <div className="loop-cell" style={{ "--i": 1 } as React.CSSProperties}>
        <span className="loop-cell-label">02 / Build</span>
        <div className="loop-cell-media">
          <div className="loop-code">
            <div className="loop-code-accent">
              import {"{ LLM }"} from &quot;ai&quot;;
            </div>
            <div>const agent = new LLM();</div>
            <div>await agent.ship();</div>
          </div>
        </div>
        <span className="loop-cell-title">Full-Stack & AI</span>
      </div>

      <div className="loop-cell" style={{ "--i": 2 } as React.CSSProperties}>
        <span className="loop-cell-label">03 / Launch</span>
        <div className="loop-cell-media">
          <div className="loop-radar">
            <div className="loop-radar-inner">
              <span className="loop-radar-core" />
            </div>
          </div>
        </div>
        <span className="loop-cell-title">Product Releases</span>
      </div>

      <div className="loop-cell" style={{ "--i": 3 } as React.CSSProperties}>
        <span className="loop-cell-label">04 / Grow</span>
        <div className="loop-cell-media">
          <div className="loop-bars">
            <span className="loop-bar" />
            <span className="loop-bar" />
            <span className="loop-bar" />
            <span className="loop-bar" />
            <span className="loop-bar" />
          </div>
        </div>
        <span className="loop-cell-title">Acquisition Loops</span>
      </div>
    </div>
  );
}
