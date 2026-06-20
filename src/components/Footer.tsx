import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { restaurant } from "@/data/images";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-3xl">
              Legends <span className="text-gold">of</span> Bengal
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
              An evolving tribute to the cuisine of undivided Bengal — served in a setting
              that feels at once intimate, modern, and unmistakably ours.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="gold-rule" />
              <span className="eyebrow text-gold">Asansol · Est. 2018</span>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5">Visit</p>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" /><span>{restaurant.address}</span></li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-gold" /><span>{restaurant.phone}</span></li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-gold" /><span>{restaurant.email}</span></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Hours</p>
            <p className="text-sm text-ivory/70">{restaurant.hours}</p>
            <p className="mt-4 text-sm text-ivory/70">Lunch · Dinner · Private Dining</p>
          </div>

          <div>
            <p className="eyebrow mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/menu" className="text-ivory/70 hover:text-gold">Menu</Link></li>
              <li><Link to="/gallery" className="text-ivory/70 hover:text-gold">Gallery</Link></li>
              <li><Link to="/reservations" className="text-ivory/70 hover:text-gold">Reservations</Link></li>
              <li><Link to="/contact" className="text-ivory/70 hover:text-gold">Contact</Link></li>
            </ul>
            <a href={restaurant.instagram} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-ivory/70 hover:text-gold">
              <Instagram size={16} /> <span className="text-xs uppercase tracking-[0.22em]">Instagram</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-6 text-xs text-ivory/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Legends of Bengal. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em]">Crafted in Asansol</p>
        </div>
      </div>
    </footer>
  );
}
