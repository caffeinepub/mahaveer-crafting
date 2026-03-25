import { Layers, Package, Palette, Repeat } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Layers,
    title: "DTF Printing",
    desc: "Direct-to-Film printing delivers incredibly vivid, long-lasting designs on any fabric. Perfect for custom logos, graphics, and text.",
    color: "bg-teal-light",
  },
  {
    icon: Repeat,
    title: "Sublimation Printing",
    desc: "Full-color sublimation printing penetrates the fabric for a smooth, wash-resistant finish ideal for sportswear and activewear.",
    color: "bg-pink-50",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    desc: "Competitive pricing for bulk orders starting at 10 pieces. Ideal for corporate uniforms, school dress codes, and events.",
    color: "bg-amber-50",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    desc: "Send us your artwork or let us create it. We handle full-color, multi-color, and single-color designs with precision.",
    color: "bg-purple-50",
  },
];

const whoWeServe = [
  { emoji: "🎉", label: "Events & Parties" },
  { emoji: "🎓", label: "School Uniforms" },
  { emoji: "☕", label: "Cafes & Restaurants" },
  { emoji: "🏢", label: "Corporate & Staff" },
  { emoji: "⚽", label: "Sports Teams" },
  { emoji: "🛍️", label: "Retail Brands" },
];

export function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="font-fraunces text-4xl font-bold text-foreground mb-3">
          Our Services
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Premium printing solutions tailored to your needs — from custom logos
          to bulk orders.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
            data-ocid={`services.item.${i + 1}`}
          >
            <div
              className={`h-12 w-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}
            >
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg text-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Who We Serve */}
      <section className="bg-primary rounded-2xl p-8 text-white">
        <h2 className="font-fraunces text-2xl font-bold mb-6 text-center">
          Who We Serve
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {whoWeServe.map((w) => (
            <div
              key={w.label}
              className="bg-white/10 rounded-xl p-4 text-center"
            >
              <div className="text-3xl mb-1">{w.emoji}</div>
              <div className="text-sm font-semibold">{w.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
