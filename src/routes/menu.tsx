import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { images } from "@/data/images";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Legends of Bengal" },
      { name: "description", content: "Signature Bengali experiences: heritage classics, royal seafood, and the Chef's mutton selection." },
      { property: "og:title", content: "Menu — Legends of Bengal" },
      { property: "og:description", content: "Three journeys through Bengal's most loved flavours." },
      { property: "og:image", content: images.experiences.bengaliHeritage },
    ],
  }),
  component: MenuPage,
});

type Dish = { name: string; img: string; note: string };
type Exp = { k: string; title: string; tagline: string; hero: string; dishes: Dish[] };

const experiences: Exp[] = [
  {
    k: "I",
    title: "Bengali Heritage",
    tagline: "The recipes that built the region — kept honest, plated for today.",
    hero: images.experiences.bengaliHeritage,
    dishes: [
      { name: "Sorshe Elish", img: images.dishes.sorsheElish, note: "Hilsa, mustard, green chilli — the dish that defines a Bengali summer." },
      { name: "Pabda Jhaal", img: images.dishes.pabdaJhaal, note: "Pabda fish in a fiery onion-mustard gravy." },
      { name: "Aloo Posto", img: images.dishes.alooPosto, note: "Slow-cooked potatoes folded in poppy seed paste." },
    ],
  },
  {
    k: "II",
    title: "Royal Seafood",
    tagline: "From the rivers and coast — the catch of the day, cooked at its peak.",
    hero: images.experiences.royalSeafood,
    dishes: [
      { name: "Chingri Malai Curry", img: images.dishes.chingriMalai, note: "Tiger prawns simmered in coconut cream and warm spice." },
      { name: "Vetki Fish Fry", img: images.dishes.vetkiFry, note: "Bhetki cutlets crusted in panko, kasundi mustard." },
      { name: "Pomfret Masala", img: images.dishes.pomfretMasala, note: "Whole pomfret, char-roasted, Bengali masala glaze." },
    ],
  },
  {
    k: "III",
    title: "Chef's Selection",
    tagline: "Slow fires, deep aromas — Chef's table of Bengali mutton classics.",
    hero: images.experiences.chefsSelection,
    dishes: [
      { name: "Mutton Rogan Josh", img: images.dishes.muttonRogan, note: "Tender mutton in a Kashmiri-Bengali crossover gravy." },
      { name: "Mutton Handi", img: images.dishes.muttonHandi, note: "Six-hour handi, sealed with dough, opened at the table." },
      { name: "Mutton Biryani", img: images.dishes.muttonBiryani, note: "Long-grain basmati, slow-cooked mutton, the Calcutta egg & potato." },
    ],
  },
];

export function MenuPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="eyebrow"><span className="gold-rule mr-3" />Signature Experiences</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[1] sm:text-8xl">
            Three journeys.<br />Endless <em className="text-gold">flavours.</em>
          </h1>
        </div>
      </section>

      {experiences.map((exp, i) => (
        <ExperienceBlock key={exp.k} exp={exp} reverse={i % 2 === 1} />
      ))}

      <section className="py-24 text-center">
        <Link to="/reservations" className="btn-gold">Reserve a Table</Link>
      </section>
    </>
  );
}

function ExperienceBlock({ exp, reverse }: { exp: Exp; reverse: boolean }) {
  return (
    <section className={`${reverse ? "bg-beige" : ""} py-24 lg:py-32`}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="aspect-[5/4] overflow-hidden">
              <img src={exp.hero} alt={exp.title} className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="font-display text-5xl text-gold">{exp.k}</span>
            <h2 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">{exp.title}</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70">{exp.tagline}</p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {exp.dishes.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{d.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{d.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
