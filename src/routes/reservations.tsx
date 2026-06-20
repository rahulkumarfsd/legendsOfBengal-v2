import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { ExternalLink } from "lucide-react";
import { images, restaurant } from "@/data/images";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Legends of Bengal" },
      { name: "description", content: "Reserve a table at Legends of Bengal, Asansol. Submit your request — we confirm via WhatsApp." },
      { property: "og:title", content: "Reservations — Legends of Bengal" },
      { property: "og:description", content: "Reserve a table — we confirm on WhatsApp." },
      { property: "og:image", content: images.interior },
    ],
  }),
  component: Reservations,
});

function Reservations() {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({ name: "", phone: "", guests: "2", date: today, time: "20:00" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello Legends of Bengal,%0A%0AI'd like to reserve a table.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AGuests: ${form.guests}%0ADate: ${form.date}%0ATime: ${form.time}%0A%0AThank you!`;
    window.open(`https://wa.me/${restaurant.whatsapp}?text=${msg}`, "_blank");
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section className="pt-32 lg:pt-40">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <img src={images.interior} alt="Restaurant interior" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/40" />
          <div className="absolute bottom-0 left-0 p-12 text-ivory">
            <p className="eyebrow text-gold">Reservations</p>
            <h2 className="mt-4 font-display text-5xl leading-[1.05]">An evening,<br /><em className="text-gold">your way.</em></h2>
            <p className="mt-4 max-w-sm text-ivory/70">We hold your table for 15 minutes past your booking time.</p>
          </div>
        </div>

        <div className="flex items-center px-6 py-20 lg:px-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md"
          >
            <p className="eyebrow lg:hidden"><span className="gold-rule mr-3" />Reservations</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] lg:hidden">Reserve a table</h1>
            <h2 className="hidden font-display text-4xl lg:block">Request a table</h2>
            <p className="mt-3 text-sm text-charcoal/60">Submit your details — we confirm on WhatsApp within minutes.</p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <Field label="Full Name">
                <input required value={form.name} onChange={set("name")} placeholder="Your name" className="field" />
              </Field>
              <Field label="Phone">
                <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 ..." className="field" />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Guests">
                  <select value={form.guests} onChange={set("guests")} className="field">
                    {[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                  </select>
                </Field>
                <Field label="Time">
                  <input type="time" value={form.time} onChange={set("time")} className="field" />
                </Field>
              </div>
              <Field label="Date">
                <input type="date" required min={today} value={form.date} onChange={set("date")} className="field" />
              </Field>

              <button type="submit" className="btn-gold w-full">Submit Request →</button>
              <p className="text-center text-[11px] uppercase tracking-[0.22em] text-charcoal/40">
                Opens WhatsApp to confirm
              </p>
            </form>

            <div className="mt-12 border-t border-border pt-8">
              <p className="eyebrow mb-4">Or order in</p>
              <div className="flex flex-wrap gap-3">
                <a href={restaurant.zomato} target="_blank" rel="noreferrer" className="btn-primary">Order on Zomato <ExternalLink size={14} /></a>
                <a href={restaurant.swiggy} target="_blank" rel="noreferrer" className="btn-primary">Order on Swiggy <ExternalLink size={14} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .field {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border);
          padding: 0.65rem 0;
          font-size: 0.95rem;
          color: var(--charcoal);
          outline: none;
          transition: border-color 0.2s;
        }
        .field:focus { border-color: var(--gold); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[0.65rem] uppercase tracking-[0.28em] text-charcoal/50">{label}</span>
      {children}
    </label>
  );
}
