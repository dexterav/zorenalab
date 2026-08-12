import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Brush,
  Check,
  Gauge,
  Layers,
  LifeBuoy,
  MapPin,
  Mail,
  Rocket,
  Search,
  Server,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Timer,
  PenTool,
  Code2,
  Compass,
  Linkedin,
} from "lucide-react";
const WHATSAPP_NUMBER = "919508143343";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

import heroLaptopp from "@/assets/hero-laptopp.png";
import projPlumbing1 from "@/assets/proj-plumbing1.png";
import projVoltedgee from "@/assets/proj-voltedgee.jpg";
import projHvacc from "@/assets/proj-hvacc.jpg";
import projDentall from "@/assets/proj-dentall.png";
import projSalonn from "@/assets/proj-salonn.png";
import projPlumbingg from "@/assets/proj-plumbingg.jpg.png";
import zorenaLogo from "@/assets/zorena-logo.png";

/* ------------------------------ shared atoms ------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-border/80 bg-background/60 px-4 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] text-primary uppercase backdrop-blur">
      {children}
    </span>
  );
}

function SectionHead({
  eyebrow,
  title,
  lede,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  className?: string;
}) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-7 text-[2.15rem] leading-[1.06] font-semibold text-balance text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
        {title}
      </h2>
      {lede && (
        <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-ink-soft sm:text-lg">
          {lede}
        </p>
      )}
    </Reveal>
  );
}

const primaryCta =
  "group inline-flex items-center justify-center gap-2 rounded-pill bg-primary px-8 py-4 text-[15px] font-semibold text-primary-foreground shadow-glow transition-[transform,box-shadow,filter] duration-500 ease-out hover:-translate-y-1 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none";

const ghostCta =
  "group inline-flex items-center justify-center gap-2 rounded-pill px-8 py-4 text-[15px] font-semibold text-ink transition-colors duration-400 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none";

/* ---------------------------------- Hero --------------------------------- */

const badges = [
  { icon: BadgeCheck, label: "Custom Designed" },
  { icon: Smartphone, label: "100% Mobile Optimized" },
  { icon: Search, label: "Built for Local SEO" },
  { icon: Gauge, label: "Lightning Fast" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 md:pt-52 md:pb-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 -right-40 size-[42rem] rounded-full bg-primary/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-72 -left-48 size-[34rem] rounded-full bg-accent-amber/8 blur-3xl"
      />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.12fr_1fr] lg:gap-16 xl:gap-20">
        <div>
          <Reveal>
            <Eyebrow>
               Premium Web Design Agency
            </Eyebrow>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-8 max-w-[13ch] text-[2.6rem] leading-[1.03] font-semibold tracking-[-0.04em] text-ink sm:max-w-[16ch] sm:text-[3.4rem] lg:text-[4rem] xl:text-[4.35rem]">
              Premium Websites That Turn Local Visitors Into Paying Customers.             
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-8 max-w-lg text-[1.0625rem] leading-[1.75] text-ink-soft sm:text-[1.1875rem]">
              We build premium websites for plumbers, electricians, HVAC companies, dental clinics and salons that rank higher on Google, build trust instantly and generate more qualified leads.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-11 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
              <a href="#contact" className={primaryCta}>
                Get Free Consultation
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a href="#portfolio" className={ghostCta}>
                View Portfolio
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <ul className="mt-14 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border/70 pt-8 sm:grid-cols-4 sm:gap-x-6">
              {badges.map((badge) => (
                <li key={badge.label} className="flex items-start gap-2.5">
                  <badge.icon className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.2} />
                  <span className="text-[13px] leading-snug font-medium tracking-tight text-ink-soft">
                    {badge.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={380}>
  <div className="mt-10 border-t border-border/60 pt-6">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
      Trusted by Local Business Industries
    </p>

    <div className="mt-4 flex flex-wrap gap-3">
      <span className="rounded-full border px-4 py-2 text-sm">Plumbing</span>
      <span className="rounded-full border px-4 py-2 text-sm">Electrical</span>
      <span className="rounded-full border px-4 py-2 text-sm">HVAC</span>
      <span className="rounded-full border px-4 py-2 text-sm">Dental</span>
      <span className="rounded-full border px-4 py-2 text-sm">Salon</span>
      <span className="rounded-full border px-4 py-2 text-sm">Roofing</span>
    </div>
  </div>
</Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div
            aria-hidden
            className="absolute inset-x-8 top-12 bottom-8 rounded-[3rem] bg-gradient-to-br from-primary/18 to-accent-amber/18 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-card border border-border/60 bg-surface shadow-lift">
            <img
              src={heroLaptopp}
              alt="Laptop displaying a premium plumbing company website built by Zorena Lab"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-7 left-2 hidden rounded-card sm:block border border-border/60 bg-background/85 px-6 py-4 shadow-lift backdrop-blur-xl sm:left-6">
            <p className="font-display text-[1.75rem] leading-none font-semibold text-ink">100%</p>
            <p className="mt-1.5 text-[12.5px] tracking-tight text-muted-foreground">
              Custom Design
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Portfolio ------------------------------- */

const projects = [
  {
    name: "Residential Plumbing",
    category: "Plumbing",
    image: projPlumbing1,
    note: "Modern homepage focused on emergency calls, trust signals and fast quote requests.",
    url: "https://luxe-plumb-hero.vercel.app",
  },
  {
    name: "Electrical Servicesl",
    category: "Electrician",
    image: projVoltedgee,
    note: "Residential, commercial and industrial split cleanly so every enquiry lands qualified.",
    url: "https://voltedge-brilliance-khaki.vercel.app",
  },
  {
    name: "HVAC Contractor",
    category: "HVAC",
    image: projHvacc,
    note: "A booking panel pinned to the hero turns seasonal demand into scheduled service calls.",
    url: "https://arcticflow-premier-design.vercel.app",
  },
  {
    name: "Dental Practice",
    category: "Dental Clinic",
    image: projDentall,
    note: "Calm editorial pacing with appointment capture that removes the phone call entirely.",
    url: "https://smilecraft-studio-project.vercel.app",
  },
  {
    name: "Beauty Salon",
    category: "Luxury Salon",
    image: projSalonn,
    note: "Fashion-house typography and stylist-level booking, built for a premium price point.",
    url: "https://luxeglow-studio-launch.vercel.app",
  },
  {
    name: "ClearFlow Plumbing & HVAC",
    category: "Plumbing & HVAC",
    image: projPlumbingg,
    note: "Premium plumbing & hvac website with modern design and fast conversion.",
    url: "https://clearflow-homepage-design.vercel.app",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="border-y border-border/60 bg-surface py-28 md:py-44">
      <div className="container-x">
        <SectionHead
          eyebrow="Featured Projects"
          title="Websites Built to Generate More Customers"
          lede="A collection of premium websites created for local businesses across the United States."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.name} delay={i * 70} className="h-full">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-base flex h-full flex-col overflow-hidden"
              >
                <div className="relative overflow-hidden bg-surface">
                  <img
                    src={project.image}
                    alt={`${project.name} website designed by Zorena Lab`}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="aspect-[16/11] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />
                  <span className="absolute top-4 left-4 rounded-pill bg-background/90 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[0.1em] text-ink uppercase backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-display text-[1.3rem] leading-snug font-semibold tracking-tight text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-[1.7] text-ink-soft">
                    {project.note}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                    View Project
                    <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Services -------------------------------- */

const services = [
  {
    icon: Brush,
    title: "Website Design",
    copy: "A brand-led build from a blank page: positioning, structure, copy and visuals shaped around your most profitable service.",
  },
  {
    icon: Layers,
    title: "Website Redesign",
    copy: "We keep the pages that already earn, rebuild the ones that leak, and carry your search history across intact.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    copy: "Service-area pages, local schema and a properly tuned Google Business profile so you surface in the map pack.",
  },
  {
    icon: Target,
    title: "Landing Pages",
    copy: "Single-offer pages for seasonal pushes and paid campaigns, written and built to convert cold traffic into booked work.",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    copy: "Image pipelines, font strategy and lean code that hold Core Web Vitals green on a mid-range phone over mobile data.",
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    copy: "Managed hosting, daily backups, uptime monitoring and monthly content edits — handled quietly by our team.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 md:py-44">
      <div className="container-x">
        <SectionHead
          eyebrow="Capabilities"
          title="Everything the site needs, handled under one roof."
          lede="One team from strategy through launch and maintenance — no handoffs, no subcontractors, no lost context."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60} className="h-full">
              <div className="card-base group flex h-full flex-col p-8 sm:p-9">
                <div className="grid size-12 place-items-center rounded-2xl bg-primary/8 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-5" strokeWidth={2} />
                </div>
                <h3 className="mt-8 font-display text-[1.3rem] leading-snug font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3.5 text-[14.5px] leading-[1.75] text-ink-soft">{service.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Why choose -------------------------------- */

const reasons = [
  {
    icon: Sparkles,
    title: "Modern Design",
    copy: "Work that reads current for years, not a template dated the week it launches.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    copy: "Local searches happen on a phone, mid-task. That is the screen we design first.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    copy: "Clean structure, fast indexing and local schema wired in from the first page.",
  },
  {
    icon: Timer,
    title: "Fast Delivery",
    copy: "Most builds are live inside four weeks, without rushing the thinking.",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    copy: "Every page carries one decisive action: call, quote, or booking.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    copy: "Edits, monitoring and quarterly reviews long after the launch week ends.",
  },
];

const stats = [
  { value: "6+", label: "Projects Built" },
  { value: "100%", label: "Mobile Friendly" },
  { value: "90+", label: "Google PageSpeed" },
];

export function WhyChoose() {
  return (
    <section className="border-y border-border/60 bg-surface py-28 md:py-44">
      <div className="container-x">
        <SectionHead
          eyebrow="Why Choose Us"
          title="Premium Websites That Help Local Businesses Grow"
          lede="Every website is designed to load fast, rank higher, and convert visitors into customers."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 60} className="h-full">
              <div className="card-base flex h-full gap-4 p-7 sm:p-8">
                <reason.icon className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={2} />
                <div>
                  <h3 className="font-display text-[1.0625rem] font-semibold tracking-tight text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.7] text-ink-soft">{reason.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 grid divide-y divide-border/70 rounded-card border border-border/60 bg-background px-8 py-12 shadow-soft sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-14 lg:px-16">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-6 text-center sm:py-0">
                <p className="font-display text-[3.25rem] leading-none font-semibold tracking-[-0.04em] text-primary">
                  {stat.value}
                </p>
                <p className="mt-3 text-[13px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Process --------------------------------- */

const steps = [
  {
    icon: Compass,
    title: "Discovery",
    copy: "We map your services, margins and service areas, then the questions customers ask before they ever call.",
  },
  {
    icon: PenTool,
    title: "Design",
    copy: "Full-page designs with real copy and real photography, reviewed together before a single line of code.",
  },
  {
    icon: Code2,
    title: "Development",
    copy: "Hand-built and fast on every screen, wired to your phone system, forms and booking tools.",
  },
  {
    icon: Rocket,
    title: "Launch",
    copy: "DNS, analytics, call tracking and search setup — followed by two weeks of tuning on us.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 md:py-44">
      <div className="container-x">
        <SectionHead
          eyebrow="How it works"
          title="Our Process"
          lede="Four stages, clear checkpoints, and a named lead who stays with your project from first call to launch day."
        />

        <div className="relative mt-16 lg:mt-24">
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-primary/35 via-accent-amber/40 to-transparent lg:block"
          />
          <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 100}>
                <div className="group relative">
                  <div className="grid size-12 place-items-center rounded-2xl border border-border/70 bg-background text-primary shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/25 group-hover:shadow-lift">
                    <step.icon className="size-5" strokeWidth={2} />
                  </div>
                  <p className="mt-7 text-[11.5px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2.5 font-display text-[1.3rem] font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3.5 max-w-xs text-[14.5px] leading-[1.75] text-ink-soft">
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------- */

const testimonials = [
  {
    quote:
      "Our new website looks incredibly professional and has already helped us get more quote requests from local customers.",
    name: "Michael Johnson",
    role: "Plumbing Business Owner",
    initials: "MJ",
  },
  {
    quote:
      "The design is clean, fast and mobile-friendly. Customers regularly compliment how easy it is to book appointments.",
    name: "Sarah Williams",
    role: "Dental Clinic Manager",
    initials: "SW",
  },
  {
    quote:
      "Exactly the premium look we wanted. The website finally represents our brand and converts visitors into enquiries.",
    name: "Daniel Carter",
    role: "Salon Founder",
    initials: "DC",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border/60 bg-surface py-28 md:py-44">
      <div className="container-x">
        <SectionHead
          eyebrow="Client words"
          title="What owners say once the phone starts ringing."
        />

        <div className="mt-16 grid gap-7 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 90} className="h-full">
              <figure className="card-base flex h-full flex-col justify-between p-8 sm:p-10">
                <div>
                  <div className="flex gap-1 text-accent-amber">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-7 text-[15.5px] leading-[1.75] text-ink">
                    “{item.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-9 flex items-center gap-3.5 border-t border-border/70 pt-7">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-[13px] font-semibold text-primary">
                    {item.initials}
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-semibold tracking-tight text-ink">
                      {item.name}
                    </span>
                    <span className="block text-[13px] text-muted-foreground">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Pricing --------------------------------- */

const plans = [
  {
    name: "Starter",
    tagline: "For small local businesses getting online with a professional website.",
    features: [
      "1–3 crafted pages",
      "Mobile-first responsive design",
      "Click-to-call & enquiry buttons",
      "Basic local SEO",
      "Contact form",
      "Delivered in about 3 days",
    ],
    featured: false,
  },
  {
    name: "Professional",
    tagline: "For local businesses ready to look more professional and get more enquiries.",
    features: [
      "Up to 5–7 custom pages",
      "Premium custom design",
      "Mobile-first responsive build",
      "Local SEO basics",
      "Quote / enquiry form",
      "Call & booking integration",
      "Performance optimization",
      "30 days post-launch support",
    ],
    featured: true,
  },
  {
    name: "Business",
    tagline: "For businesses that need a complete online presence with advanced features.",
    features: [
      "Up to 10 pages",
      "Advanced custom design",
      "Booking / quote system",
      "Local SEO setup",
      "Google Business optimization",
      "Analytics integration",
      "Performance optimization",
      "60 days post-launch support",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-44">
      <div className="container-x">
        <SectionHead
          eyebrow="Website Packages"
          title="Professional websites. Simple, transparent pricing."
          lede="Choose a package that fits your business. Every website is designed to look professional, work on every device, and help you turn visitors into customers."
        />

        <div className="mt-16 grid gap-7 lg:mt-20 lg:grid-cols-3 lg:items-stretch lg:gap-8">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90} className="h-full">
              <div
                className={
                  plan.featured
                    ? "relative flex h-full flex-col rounded-card border border-ink/10 bg-ink p-9 shadow-lift transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:p-10 lg:-mt-4 lg:pb-14"
                    : "card-base relative flex h-full flex-col p-9 sm:p-10"
                }
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-9 rounded-pill bg-accent-amber px-3.5 py-1 text-[10.5px] font-semibold tracking-[0.18em] text-accent-amber-foreground uppercase sm:left-10">
                    Most chosen
                  </span>
                )}
                <h3
                  className={
                    plan.featured
                      ? "font-display text-[1.6rem] font-semibold tracking-tight text-background"
                      : "font-display text-[1.6rem] font-semibold tracking-tight text-ink"
                  }
                >
                  {plan.name}
                </h3>
                <div
  className={
    plan.featured
      ? "mt-5 font-display text-[2.4rem] font-semibold tracking-tight text-background"
      : "mt-5 font-display text-[2.4rem] font-semibold tracking-tight text-ink"
  }
>
  {plan.name === "Starter"
    ? "$299"
    : plan.name === "Professional"
      ? "$499"
      : "$799"}
  <span
    className={
      plan.featured
        ? "ml-1 text-[13px] font-medium text-background/55"
        : "ml-1 text-[13px] font-medium text-ink-soft"
    }
  >
    starting
  </span>
</div>
                <p
                  className={
                    plan.featured
                      ? "mt-3.5 text-[14.5px] leading-[1.7] text-background/65"
                      : "mt-3.5 text-[14.5px] leading-[1.7] text-ink-soft"
                  }
                >
                  {plan.tagline}
                </p>
                <ul
                  className={
                    plan.featured
                      ? "mt-9 flex-1 space-y-4 border-t border-background/15 pt-8"
                      : "mt-9 flex-1 space-y-4 border-t border-border/70 pt-8"
                  }
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check
                        className={
                          plan.featured
                            ? "mt-0.5 size-4 shrink-0 text-accent-amber"
                            : "mt-0.5 size-4 shrink-0 text-primary"
                        }
                        strokeWidth={2.6}
                      />
                      <span
                        className={
                          plan.featured
                            ? "text-[14.5px] leading-snug text-background/85"
                            : "text-[14.5px] leading-snug text-ink-soft"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={
                    plan.featured
                      ? "group mt-10 inline-flex items-center justify-center gap-2 rounded-pill bg-accent-amber px-6 py-4 text-[15px] font-semibold text-accent-amber-foreground transition-[transform,filter] duration-500 hover:-translate-y-0.5 hover:brightness-105"
                      : "group mt-10 inline-flex items-center justify-center gap-2 rounded-pill border border-border bg-background px-6 py-4 text-[15px] font-semibold text-ink transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                  }
                >
                  {plan.name === "Starter" ? "Get Started" : "Get Started"}
                  <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ----------------------------------- */

const faqs = [
  {
    q: "How long does a full website take?",
    a: "Starter builds are usually live in about two weeks. A ten-page Professional build with local SEO runs three to four weeks, and the timeline depends far more on how fast we receive photos and service details than on the build itself.",
  },
  {
    q: "Do I need to write the content myself?",
    a: "No. We interview you for about an hour, then write every page in your voice. You review and adjust the wording before anything moves into development.",
  },
  {
    q: "Will my site actually show up on Google?",
    a: "We build the foundation that ranking depends on: service-area pages, local schema, fast load times and a properly configured Google Business profile. Positions compound over the following months, and we can keep pushing them with an ongoing plan.",
  },
  {
    q: "Can you rebuild my existing site without losing traffic?",
    a: "Yes. We audit which pages currently earn traffic, preserve those URLs, and redirect everything that changes so your search equity carries across on launch day.",
  },
  {
    q: "What happens after launch?",
    a: "Professional builds include sixty days of support. After that, optional hosting and maintenance covers backups, uptime monitoring, security updates and monthly content edits.",
  },
];

export function Faq() {
  return (
    <section className="border-y border-border/60 bg-surface py-28 md:py-44">
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <SectionHead
          eyebrow="Questions"
          title="Answers before you ask."
          lede="Still unsure about something? Send a note and you will have a reply the same working day."
          className="lg:sticky lg:top-32 lg:self-start"
        />

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="mb-3.5 rounded-card border border-border/70 bg-background px-6 shadow-soft transition-colors duration-500 last:mb-0 hover:border-primary/25 sm:px-8"
              >
                <AccordionTrigger className="py-6 text-left font-display text-[1.0625rem] leading-snug font-semibold tracking-tight text-ink hover:no-underline sm:text-[1.15rem]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-[14.5px] leading-[1.75] text-ink-soft">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Final CTA -------------------------------- */

export function FinalCta() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-24 text-center sm:px-12 md:px-20 md:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-28 -left-20 size-[28rem] rounded-full bg-primary/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -bottom-28 size-[28rem] rounded-full bg-accent-amber/18 blur-3xl"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-pill border border-background/15 px-4 py-1.5 text-[11.5px] font-semibold tracking-[0.2em] text-background/65 uppercase">
              LOCAL BUSINESS WEBSITES
            </span>
            <h2 className="mx-auto mt-9 max-w-3xl text-[2.35rem] leading-[1.03] font-semibold tracking-[-0.04em] text-balance text-background sm:text-[3.25rem] md:text-[3.9rem]">
              Ready to Build a Better Website?
            </h2>
            <p className="mx-auto mt-7 max-w-lg text-[1.0625rem] leading-[1.75] text-background/65 sm:text-lg">
              Tell us about your business and what you need. We'll recommend the right package and
              get your project moving — simple, transparent and no pressure.
            </p>
            <div className="mt-12 flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:items-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Zorena%20Lab%20,%20I%27m%20interested%20in%20getting%20a%20website%20for%20my%20business.`}
                className="group inline-flex items-center justify-center gap-2 rounded-pill bg-accent-amber px-8 py-4 text-[15px] font-semibold text-accent-amber-foreground transition-[transform,filter] duration-500 hover:-translate-y-1 hover:brightness-105"
              >
                Get Started
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-pill px-8 py-4 text-[15px] font-semibold text-background/80 transition-colors duration-500 hover:text-background"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------------------------- Footer ---------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-20">
      <div className="container-x">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr_1fr_1.1fr] md:gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <img
                  src={zorenaLogo}
                  alt="Zorena Lab"
                  className="size-9 rounded-full object-cover"
                />
              </span>
              <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
                Zorena Lab
              </span>
            </div>
            <p className="mt-6 max-w-xs text-[14.5px] leading-[1.75] text-ink-soft">
              A small studio building premium websites for plumbers, electricians, HVAC teams,
              clinics, salons and roofers who want the phone to ring.
            </p>
            <div className="mt-7 flex gap-2">
              <a
                href="https://www.linkedin.com/company/zorenalab/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full border border-border text-ink-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[11.5px] font-semibold tracking-[0.2em] text-ink uppercase">
              Services
            </h3>
            <ul className="mt-6 space-y-3.5 text-[14.5px] text-ink-soft">
              {["Website Design", "Website Redesign", "Local SEO", "Landing Pages"].map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors duration-400 hover:text-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11.5px] font-semibold tracking-[0.2em] text-ink uppercase">
              Portfolio
            </h3>
            <ul className="mt-6 space-y-3.5 text-[14.5px] text-ink-soft">
              {["Plumbing", "HVAC", "Dental Clinic", "Salon"].map((s) => (
                <li key={s}>
                  <a
                    href="#portfolio"
                    className="transition-colors duration-400 hover:text-primary"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11.5px] font-semibold tracking-[0.2em] text-ink uppercase">
              Contact
            </h3>
            <ul className="mt-6 space-y-3.5 text-[14.5px] text-ink-soft">
              <li>
                <a
                  href="mailto:hellozorenalab@gmail.com"
                  className="inline-flex items-center gap-2 transition-colors duration-400 hover:text-primary"
                >
                  <Mail className="size-4 shrink-0" /> hellozorenalab@gmail.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 shrink-0" /> Remote — serving North America
              </li>
<li>
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Zorena%20Lab%20,%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20business.`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 transition-colors duration-400 hover:text-primary"
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-4 shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    WhatsApp Us
  </a>
</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border/70 pt-8 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Zorena Lab. All rights reserved.</p>
          <p>Designed &amp; built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
