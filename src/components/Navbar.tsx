import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-tight text-charcoal">
            Legends <span className="text-gold">of</span> Bengal
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.72rem] uppercase tracking-[0.24em] text-charcoal/70 transition-colors hover:text-charcoal"
              activeProps={{ className: "text-charcoal" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/reservations" className="btn-gold">
            Reserve Table
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-charcoal/15 p-2.5 text-charcoal lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden"
          >
            <div className="mx-4 mt-3 rounded-sm border border-border bg-ivory/95 px-6 py-8 backdrop-blur-xl">
              <div className="flex flex-col gap-5">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-charcoal"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/reservations"
                  onClick={() => setOpen(false)}
                  className="btn-gold mt-4 w-full"
                >
                  Reserve Table
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
