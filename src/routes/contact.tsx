import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { images, restaurant } from "@/data/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Legends of Bengal" },
      { name: "description", content: "Visit Legends of Bengal in Asansol, West Bengal. Address, hours, phone and reservations." },
      { property: "og:title", content: "Contact — Legends of Bengal" },
      { property: "og:description", content: "Address, hours and contact for Legends of Bengal, Asansol." },
      { property: "og:image", content: images.interior },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="eyebrow"><span className="gold-rule mr-3" />Contact</p>
          <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[1] sm:text-8xl">
            Come find us<br />in <em className="text-gold">Asansol.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <Row icon={<MapPin />} label="Address" lines={[restaurant.address]} />
            <Row icon={<Phone />} label="Phone" lines={[restaurant.phone]} />
            <Row icon={<Mail />} label="Email" lines={[restaurant.email]} />
            <Row icon={<Clock />} label="Hours" lines={[restaurant.hours, "Lunch · Dinner · Private Dining"]} />
            <Row icon={<Instagram />} label="Follow" lines={["@legendsofbengal"]} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="aspect-square overflow-hidden lg:aspect-auto"
          >
            <img src={images.interior} alt="Inside Legends of Bengal" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border bg-beige">
        <iframe
          title="Legends of Bengal — Map"
          src="https://www.google.com/maps?q=Asansol,West+Bengal&output=embed"
          className="h-[420px] w-full grayscale-[0.4]"
          loading="lazy"
        />
      </section>
    </>
  );
}

function Row({ icon, label, lines }: { icon: React.ReactNode; label: string; lines: string[] }) {
  return (
    <div className="flex gap-6 border-b border-border pb-8">
      <div className="mt-1 text-gold">{icon}</div>
      <div>
        <p className="eyebrow">{label}</p>
        <div className="mt-2 space-y-1 font-display text-2xl leading-snug text-charcoal">
          {lines.map((l) => <p key={l}>{l}</p>)}
        </div>
      </div>
    </div>
  );
}
