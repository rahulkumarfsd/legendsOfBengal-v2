import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { images } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Legends of Bengal" },
      { name: "description", content: "The story behind Legends of Bengal: a modern Bengali restaurant in Asansol honouring heritage recipes with contemporary technique." },
      { property: "og:title", content: "About — Legends of Bengal" },
      { property: "og:description", content: "A modern tribute to undivided Bengal's cuisine." },
      { property: "og:image", content: images.about },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="pt-40 pb-24 lg:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow"><span className="gold-rule mr-3" />About the House</p>
            <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[1] sm:text-8xl">
              A love letter to <em className="text-gold">Bengal</em>, written in mustard, ghee and fire.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={images.about} alt="The kitchen" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="space-y-8 lg:col-span-5 lg:pt-10">
            <p className="text-lg leading-relaxed text-charcoal/80">
              Born in Asansol in 2018, Legends of Bengal began with one quiet conviction —
              that the kitchens of our grandmothers deserve a modern stage.
            </p>
            <p className="leading-relaxed text-charcoal/70">
              Our menu travels from the riverside ghats of the Padma to the smoky kitchens of
              old Calcutta. Mustard from Birbhum, river fish at first light, ghee folded slow
              into khichuri. Each dish is anchored in tradition but plated with a contemporary
              hand — light on excess, generous in feeling.
            </p>
            <p className="leading-relaxed text-charcoal/70">
              The room itself is hushed and warm — terracotta hues, soft brass, a low hum of
              conversation. A place to slow down for an evening.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-beige py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { k: "01", t: "Sourced Honestly", d: "Mustard from Birbhum, river fish at dawn, ghee from small dairies we know by name." },
              { k: "02", t: "Cooked Patiently", d: "Slow handi, charcoal grills, and recipes that refuse to be rushed." },
              { k: "03", t: "Plated for Today", d: "Heritage flavours, lighter portions, modern presentation — designed for the way we eat now." },
            ].map((v) => (
              <div key={v.k}>
                <span className="font-display text-3xl text-gold">{v.k}</span>
                <h3 className="mt-4 font-display text-2xl">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <Link to="/reservations" className="btn-gold">Reserve a Table</Link>
      </section>
    </>
  );
}
