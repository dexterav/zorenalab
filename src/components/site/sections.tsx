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
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

import heroLaptop from "@/assets/hero-laptop.jpg";
import projPlumbing from "@/assets/proj-plumbing.jpg";
import projElectrician from "@/assets/proj-electrician.jpg";
import projHvac from "@/assets/proj-hvac.jpg";
import projDental from "@/assets/proj-dental.jpg";
import projSalon from "@/assets/proj-salon.jpg";
import projRoofing from "@/assets/proj-roofing.jpg";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-[12.5px] font-semibold tracking-[0.14em] text-primary uppercase">
      {children}
    </span>
  );
}

/* ---------------------------------- Hero --------------------------------- */

const badges = [
  { icon: BadgeCheck, label: "50+ Businesses Inspired" },
  { icon: Smartphone, label: "Mobile First" },
  { icon: Search, label: "SEO Ready" },
  { icon: Gauge, label: "Fast Loading" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[38rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-64 -left-40 size-[30rem] rounded-full bg-accent-amber/10 blur-3xl"
      />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div>
          <Reveal>
            <Eyebrow>
              <Sparkles className="size-3.5" /> Websites for local service brands
            </Eyebrow>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 text-[2.75rem] leading-[1.03] font-semibold text-ink sm:text-6xl lg:text-[4.1rem]">
              Websites That Turn Local Visitors Into{" "}
              <span className="bg-gradient-to-r from-primary to-accent-amber bg-clip-text text-transparent">
                Paying Customers.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              We build premium websites for local businesses that generate more calls, more
              bookings and more revenue.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-[15px] font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                View Portfolio
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-[15px] font-semibold text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-lift"
              >
                Get Free Consultation
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
              {badges.map((badge) => (
                <li key={badge.label} className="flex items-start gap-2.5">
                  <badge.icon className="mt-0.5 size-4.5 shrink-0 text-primary" strokeWidth={2.2} />
                  <span className="text-[13.5px] leading-snug font-medium text-ink-soft">
                    {badge.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="absolute inset-x-6 top-10 bottom-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-accent-amber/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-surface shadow-lift">
            <img
              src={heroLaptop}
              alt="Laptop showing a premium plumbing company website built by LocalLift Studio"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 hidden rounded-3xl border border-border/70 bg-background/90 px-5 py-4 shadow-lift backdrop-blur-xl sm:block">
            <p className="font-display text-2xl font-semibold text-ink">+38%</p>
            <p className="text-[13px] text-muted-foreground">Avg. lift in inbound calls</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Portfolio ------------------------------- */

const projects = [
  {
    name: "ClearFlow Plumbing",
    category: "Plumbing",
    image: projPlumbing,
    note: "Emergency-first layout with click-to-call above the fold",
  },
  {
    name: "Voltway Electric",
    category: "Electrician",
    image: projElectrician,
    note: "Service-area pages built for suburb-level search",
  },
  {
    name: "Northline Climate",
    category: "HVAC",
    image: projHvac,
    note: "Seasonal tune-up offers wired to a booking flow",
  },
  {
    name: "Brightsmile Dental",
    category: "Dental Clinic",
    image: projDental,
    note: "Insurance clarity and same-week appointment slots",
  },
  {
    name: "Maison Hair Studio",
    category: "Luxury Salon",
    image: projSalon,
    note: "Editorial gallery with stylist-level booking",
  },
  {
    name: "Ironcrest Roofing",
    category: "Roofing",
    image: projRoofing,
    note: "Storm-damage funnel with instant estimate request",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="border-y border-border/60 bg-surface py-24 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.08] font-semibold text-ink md:text-5xl">
            Featured Website Projects
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Six builds for trades, clinics and studios — each designed around the one action that
            actually pays the bills.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.name} delay={i * 70}>
              <div className="group h-full overflow-hidden rounded-3xl border border-border/70 bg-background shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative overflow-hidden bg-surface">
                  <img
                    src={project.image}
                    alt={`${project.name} website design by LocalLift Studio`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/85 px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-ink backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{project.note}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-primary">
                    View Project
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
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
    copy: "A brand-led build from scratch — structure, copy direction, and visuals shaped around your best-selling service.",
  },
  {
    icon: Layers,
    title: "Website Redesign",
    copy: "Keep what ranks, rebuild what leaks. We modernise dated sites without losing the traffic you already earned.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    copy: "Service-area pages, schema, and a tuned Google Business profile so you show up in the map pack that matters.",
  },
  {
    icon: Target,
    title: "Landing Pages",
    copy: "Single-offer pages for seasonal campaigns and paid ads, built to convert cold clicks into booked jobs.",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    copy: "Image pipelines, font strategy and clean code that keep Core Web Vitals green on a mid-range phone.",
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    copy: "Managed hosting, backups, uptime monitoring and monthly content edits handled by our team.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.08] font-semibold text-ink md:text-5xl">
            Everything your site needs, under one roof.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-background p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-lift">
                <div className="grid size-12 place-items-center rounded-2xl bg-primary/8 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-5.5" strokeWidth={2} />
                </div>
                <h3 className="mt-7 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{service.copy}</p>
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
  { icon: Sparkles, title: "Modern Design", copy: "Layouts that look current in 2026, not 2016." },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    copy: "Most local searches happen on a phone. That's where we design first.",
  },
  { icon: Search, title: "SEO Ready", copy: "Clean structure, fast indexing, local schema built in." },
  { icon: Timer, title: "Fast Delivery", copy: "Most builds go live in two to four weeks." },
  {
    icon: Target,
    title: "Conversion Focused",
    copy: "Every page points to a call, a form, or a booking.",
  },
  { icon: LifeBuoy, title: "Ongoing Support", copy: "Edits, updates and monitoring after launch." },
];

const stats = [
  { value: "6+", label: "Premium Templates" },
  { value: "100%", label: "Responsive" },
  { value: "90+", label: "Performance Score" },
];

export function WhyChoose() {
  return (
    <section className="border-y border-border/60 bg-surface py-24 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Eyebrow>Why LocalLift</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.08] font-semibold text-ink md:text-5xl">
            Built for owners who measure results in booked jobs.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 60}>
              <div className="flex h-full gap-4 rounded-3xl border border-border/70 bg-background p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <reason.icon className="mt-0.5 size-5.5 shrink-0 text-primary" strokeWidth={2} />
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{reason.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-10 rounded-3xl border border-border/70 bg-background p-10 shadow-soft sm:grid-cols-3 md:p-14">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-5xl font-semibold tracking-tight text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-[14.5px] font-medium text-ink-soft">{stat.label}</p>
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
    copy: "We map your services, service areas and the questions customers ask before they call.",
  },
  {
    icon: PenTool,
    title: "Design",
    copy: "Full-page designs with real copy, reviewed together before a single line of code.",
  },
  {
    icon: Code2,
    title: "Development",
    copy: "Hand-built, fast, responsive, and wired to your phone, forms and booking tools.",
  },
  {
    icon: Rocket,
    title: "Launch",
    copy: "DNS, analytics, tracking and search setup — then two weeks of tuning on us.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.08] font-semibold text-ink md:text-5xl">
            Our Process
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-primary/30 via-accent-amber/40 to-primary/10 lg:block"
          />
          <ol className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 100}>
                <div className="relative">
                  <div className="grid size-12 place-items-center rounded-2xl border border-border/70 bg-background text-primary shadow-soft">
                    <step.icon className="size-5" strokeWidth={2} />
                  </div>
                  <p className="mt-6 text-[12.5px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-soft">
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
      "Our old site never rang. Six weeks after launch we were turning down work and hired a second van. The emergency call button alone paid for the project.",
    name: "Dave Whitcomb",
    role: "Owner, ClearFlow Plumbing",
    initials: "DW",
  },
  {
    quote:
      "They asked better questions than any agency we spoke to. The new booking flow cut our front-desk phone time roughly in half, and new patients arrive already informed.",
    name: "Dr. Renee Alvarez",
    role: "Principal Dentist, Brightsmile Dental",
    initials: "RA",
  },
  {
    quote:
      "The salon finally looks online the way it feels in person. Clients book their stylist directly now, and our Saturday chairs fill by Wednesday.",
    name: "Marisol Kent",
    role: "Founder, Maison Hair Studio",
    initials: "MK",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border/60 bg-surface py-24 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Eyebrow>Client words</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.08] font-semibold text-ink md:text-5xl">
            What owners say after launch.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-background p-9 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div>
                  <div className="flex gap-1 text-accent-amber">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-6 text-[15.5px] leading-relaxed text-ink">
                    “{item.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3.5 border-t border-border/70 pt-6">
                  <span className="grid size-11 place-items-center rounded-full bg-primary/10 font-display text-[13px] font-semibold text-primary">
                    {item.initials}
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-ink">{item.name}</span>
                    <span className="block text-[13.5px] text-muted-foreground">{item.role}</span>
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
    tagline: "For a single-van trade or new clinic getting online properly.",
    features: [
      "Up to 4 crafted pages",
      "Mobile-first responsive build",
      "Click-to-call & enquiry form",
      "Google Business profile setup",
      "Launch in ~2 weeks",
    ],
    featured: false,
  },
  {
    name: "Professional",
    tagline: "For established local businesses competing on search.",
    features: [
      "Up to 10 pages incl. service areas",
      "Local SEO & schema markup",
      "Booking or quote funnel",
      "Speed & Core Web Vitals tuning",
      "Copywriting for every page",
      "60 days post-launch support",
    ],
    featured: true,
  },
  {
    name: "Custom",
    tagline: "For multi-location groups and franchise operators.",
    features: [
      "Unlimited pages & locations",
      "Custom integrations & CRM sync",
      "Multi-location SEO architecture",
      "Ongoing hosting & maintenance",
      "Dedicated account lead",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Eyebrow>Engagements</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.08] font-semibold text-ink md:text-5xl">
            Scoped to your business, quoted in 48 hours.
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Every project is priced on scope rather than a menu — tell us the goal and we'll send a
            fixed quote.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90}>
              <div
                className={
                  plan.featured
                    ? "relative flex h-full flex-col rounded-3xl border border-primary/25 bg-ink p-9 shadow-lift"
                    : "relative flex h-full flex-col rounded-3xl border border-border/70 bg-background p-9 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
                }
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-9 rounded-full bg-accent-amber px-3.5 py-1 text-[11.5px] font-semibold tracking-[0.12em] text-accent-amber-foreground uppercase">
                    Most chosen
                  </span>
                )}
                <h3
                  className={
                    plan.featured
                      ? "font-display text-2xl font-semibold text-background"
                      : "font-display text-2xl font-semibold text-ink"
                  }
                >
                  {plan.name}
                </h3>
                <p
                  className={
                    plan.featured
                      ? "mt-3 text-[14.5px] leading-relaxed text-background/70"
                      : "mt-3 text-[14.5px] leading-relaxed text-ink-soft"
                  }
                >
                  {plan.tagline}
                </p>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check
                        className={
                          plan.featured
                            ? "mt-0.5 size-4.5 shrink-0 text-accent-amber"
                            : "mt-0.5 size-4.5 shrink-0 text-primary"
                        }
                        strokeWidth={2.5}
                      />
                      <span
                        className={
                          plan.featured
                            ? "text-[14.5px] text-background/85"
                            : "text-[14.5px] text-ink-soft"
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
                      ? "mt-10 inline-flex items-center justify-center rounded-full bg-accent-amber px-6 py-3.5 text-[15px] font-semibold text-accent-amber-foreground transition-all duration-300 hover:-translate-y-0.5"
                      : "mt-10 inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-soft"
                  }
                >
                  Request Quote
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
    a: "Starter builds usually go live in about two weeks. A ten-page Professional build with local SEO typically runs three to four weeks, mostly depending on how quickly we get photos and service details from you.",
  },
  {
    q: "Do I need to write the content myself?",
    a: "No. We interview you for about an hour, then write every page ourselves. You review and adjust wording before anything goes to development.",
  },
  {
    q: "Will my site actually show up on Google?",
    a: "We build the technical foundation — service-area pages, local schema, fast load times and a tuned Google Business profile. Rankings compound over the following months, and we can keep working on them with an ongoing plan.",
  },
  {
    q: "Can you rebuild my existing site without losing traffic?",
    a: "Yes. We audit which pages currently earn traffic, keep those URLs, and redirect anything that changes so your search history carries over to the new site.",
  },
  {
    q: "What happens after launch?",
    a: "You get sixty days of support on Professional builds, and optional hosting and maintenance after that — backups, uptime monitoring, security updates and monthly content edits.",
  },
];

export function Faq() {
  return (
    <section className="border-y border-border/60 bg-surface py-24 md:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-6 text-4xl leading-[1.08] font-semibold text-ink md:text-5xl">
            Answers before you ask.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">
            Still unsure about something? Send a note and we'll reply the same working day.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="mb-3 rounded-3xl border border-border/70 bg-background px-7 shadow-soft last:mb-0"
              >
                <AccordionTrigger className="py-6 text-left font-display text-[17px] font-semibold text-ink hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-ink-soft">
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
    <section id="contact" className="px-6 py-20 md:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-8 py-20 text-center md:px-16 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-16 size-96 rounded-full bg-primary/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-24 size-96 rounded-full bg-accent-amber/20 blur-3xl"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-background/15 px-4 py-1.5 text-[12.5px] font-semibold tracking-[0.14em] text-background/70 uppercase">
              Now booking
            </span>
            <h2 className="mx-auto mt-8 max-w-3xl text-4xl leading-[1.05] font-semibold text-background md:text-6xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-background/70">
              Two build slots open this month. Tell us about your business and we'll come back with
              a plan and a fixed quote.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@localliftstudio.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-amber px-7 py-4 text-[15px] font-semibold text-accent-amber-foreground transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hello@localliftstudio.com?subject=Free%20consultation"
                className="inline-flex items-center justify-center rounded-full border border-background/25 px-7 py-4 text-[15px] font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/10"
              >
                Book Free Consultation
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
    <footer className="border-t border-border/60 bg-background py-16">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="size-4.5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-[17px] font-semibold text-ink">
                LocalLift Studio
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-ink-soft">
              Premium websites for plumbers, electricians, HVAC teams, clinics, salons and roofers
              who want the phone to ring.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#home"
                  aria-label="Social profile"
                  className="grid size-10 place-items-center rounded-full border border-border text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-[14px] font-semibold tracking-[0.12em] text-ink uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-[14.5px] text-ink-soft">
              {["Website Design", "Website Redesign", "Local SEO", "Landing Pages"].map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[14px] font-semibold tracking-[0.12em] text-ink uppercase">
              Portfolio
            </h3>
            <ul className="mt-5 space-y-3 text-[14.5px] text-ink-soft">
              {["Plumbing", "HVAC", "Dental Clinic", "Roofing"].map((s) => (
                <li key={s}>
                  <a href="#portfolio" className="transition-colors hover:text-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[14px] font-semibold tracking-[0.12em] text-ink uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-[14.5px] text-ink-soft">
              <li>
                <a
                  href="mailto:hello@localliftstudio.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="size-4" /> hello@localliftstudio.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4" /> Remote — serving North America
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-primary">
                  Request a quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/70 pt-8 text-[13.5px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LocalLift Studio. All rights reserved.</p>
          <p>Designed &amp; built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
