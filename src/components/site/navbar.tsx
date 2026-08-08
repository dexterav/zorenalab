import { useEffect, useState } from "react";
import { Menu, X, } from "lucide-react";
import { cn } from "@/lib/utils";
import zorenaLogo from "@/assets/zorena-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-border/70 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="container-x flex h-[4.5rem] items-center md:h-20 justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <img
              src={zorenaLogo}
              alt="Zorena Lab"
              className="size-9 rounded-full object-cover"
            />
            <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
              Zorena <span className="text-muted-foreground">Lab</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative rounded-pill px-4 py-2 text-[14px] font-medium tracking-tight text-ink-soft transition-colors duration-400 hover:bg-muted hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-pill bg-accent-amber px-5 py-2.5 text-[14px] font-semibold tracking-tight text-accent-amber-foreground shadow-soft transition-[transform,box-shadow,filter] duration-500 ease-out hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lift sm:inline-flex"
            >
              Book Free Strategy Call
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-border text-ink transition-colors hover:bg-muted lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="container-x flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-muted hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-accent-amber px-4 py-3 text-center text-base font-semibold text-accent-amber-foreground"
              >
                Start Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
