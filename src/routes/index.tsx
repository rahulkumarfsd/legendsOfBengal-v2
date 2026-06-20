import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, ArrowRight, Utensils } from "lucide-react";
import { images, restaurant } from "@/data/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Legends of Bengal — Modern Bengali Fine Dining in Asansol" },
      { name: "description", content: "Authentic Bengali heritage, elevated. Reserve a table at Asansol's most loved modern Bengali restaurant." },
      { property: "og:title", content: "Legends of Bengal — Modern Bengali Fine Dining" },
      { property: "og:description", content: "Authentic Bengali heritage. Elevated dining experiences." },
      { property: "og:image", content: images.hero },
      { name: "twitter:image", content: images.hero },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Story />
      <ExperiencePreview />
      <GalleryStrip />
      <Reserve />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={images.hero} alt="Signature dish at Legends of Bengal" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/80" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-16 pt-32 lg:px-10 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 text-ivory/80"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="text-[0.7rem] uppercase tracking-[0.32em]">Asansol · Since 2018</span>
        </motion.div>

        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-tight text-ivory"
          >
            Legends <span className="italic text-gold">of</span><br />Bengal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg"
          >
            {restaurant.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/reservations" className="btn-gold">Reserve Table</Link>
            <a href={restaurant.zomato} target="_blank" rel="noreferrer" className="btn-outline">Order Online</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-ivory"
          >
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-gold text-gold" />
              <span className="font-display text-2xl">{restaurant.rating}</span>
              <span className="text-xs uppercase tracking-[0.22em] text-ivory/60">Rating</span>
            </div>
            <div className="h-8 w-px bg-ivory/20" />
            <div className="flex items-center gap-2">
              <Utensils size={16} className="text-gold" />
              <span className="font-display text-2xl">{restaurant.orders}</span>
              <span className="text-xs uppercase tracking-[0.22em] text-ivory/60">Orders Served</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.4em] text-ivory/60"
      >
        Scroll
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["Bengali Heritage", "Royal Seafood", "Chef's Selection", "Private Dining", "Since 2018", "Asansol"];
  return (
    <div className="overflow-hidden border-y border-border bg-beige py-6">
      <div className="flex animate-[scroll_35s_linear_infinite] gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl text-charcoal/80">
            {t} <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function Story() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow"><span className="gold-rule mr-3" />Our Story</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl">
            A modern tribute<br />to the cuisine of<br /><em className="text-gold">undivided Bengal.</em>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-charcoal/70">
            From the slow-simmered mustard of Sorshe Elish to the smoke of a Handi-cooked mutton,
            every plate at Legends of Bengal is a quiet retelling of the recipes that built our region.
            Sourced honestly. Cooked patiently. Plated for today.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-charcoal">
            Discover the Story <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img src={images.about} alt="The kitchen at Legends of Bengal" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden h-48 w-36 overflow-hidden border-8 border-ivory shadow-2xl lg:block">
            <img src={images.interior} alt="Restaurant interior" className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperiencePreview() {
  const previews = [
    { title: "Bengali Heritage", img: images.experiences.bengaliHeritage, k: "01" },
    { title: "Royal Seafood", img: images.experiences.royalSeafood, k: "02" },
    { title: "Chef's Selection", img: images.experiences.chefsSelection, k: "03" },
  ];
  return (
    <section className="bg-beige py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow"><span className="gold-rule mr-3" />Signature Experiences</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl">
              Three journeys.<br />One <em className="text-gold">unforgettable</em> table.
            </h2>
          </div>
          <Link to="/menu" className="btn-primary">Full Menu</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {previews.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-ivory">
                <span className="text-xs uppercase tracking-[0.32em] text-gold">{p.k}</span>
                <h3 className="mt-3 font-display text-3xl">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const strip = images.gallery.slice(0, 6);
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-2">
          <div>
            <p className="eyebrow"><span className="gold-rule mr-3" />Glimpses</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl">
              Quiet moments.<br /><em className="text-gold">Loud</em> flavours.
            </h2>
          </div>
          <Link to="/gallery" className="justify-self-start md:justify-self-end btn-primary">Open Gallery</Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
        {strip.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={`aspect-square overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""}`}
          >
            <img src={src} alt="Gallery" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Reserve() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-32 text-ivory">
      <div className="absolute inset-0 opacity-30">
        <img src={images.experiences.royalSeafood} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow text-gold">Reserve · Asansol</p>
        <h2 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl">
          The table is set.<br /><em className="text-gold">Yours is waiting.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-ivory/70">
          Reserve a seat for an evening of mustard, ghee, and the warmth of Bengali hospitality.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/reservations" className="btn-gold">Reserve Table</Link>
          <Link to="/contact" className="btn-outline">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
}
