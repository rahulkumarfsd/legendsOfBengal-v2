import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/data/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Legends of Bengal" },
      { name: "description", content: "An immersive look at the room, the kitchen, and the plates of Legends of Bengal." },
      { property: "og:title", content: "Gallery — Legends of Bengal" },
      { property: "og:description", content: "Glimpses of the room, kitchen, and plates." },
      { property: "og:image", content: images.gallery[0] },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const g = images.gallery;

  const close = () => setActive(null);
  const prev = () => setActive((i) => (i === null ? null : (i - 1 + g.length) % g.length));
  const next = () => setActive((i) => (i === null ? null : (i + 1) % g.length));

  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="eyebrow"><span className="gold-rule mr-3" />Gallery</p>
          <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[1] sm:text-8xl">
            A <em className="text-gold">slower</em><br />evening in frames.
          </h1>
        </div>
      </section>

      <section className="px-2 pb-24 sm:px-4">
        <div className="mx-auto max-w-[1600px] columns-2 gap-2 sm:gap-3 md:columns-3 lg:columns-4">
          {g.map((src, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="group mb-2 block w-full overflow-hidden sm:mb-3"
            >
              <img
                src={src}
                alt={`Legends of Bengal — ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
            onClick={close}
          >
            <button onClick={close} aria-label="Close" className="absolute right-4 top-4 rounded-full border border-ivory/30 p-2 text-ivory hover:bg-ivory/10">
              <X size={20} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-ivory/30 p-2 text-ivory hover:bg-ivory/10">
              <ChevronLeft size={22} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-ivory/30 p-2 text-ivory hover:bg-ivory/10">
              <ChevronRight size={22} />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={g[active]}
              alt=""
              className="max-h-[88vh] max-w-[92vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
