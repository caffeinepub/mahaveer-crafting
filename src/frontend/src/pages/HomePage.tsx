import logoUrl from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Globe, Phone, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

const WA_URL =
  "https://wa.me/919311246415?text=Hi%20Mahaveer%20Crafting%2C%20I%20am%20interested%20in%20your%20DTF%20printing%20services.%20Please%20share%20more%20details.";

const whyCards = [
  {
    icon: Shield,
    title: "Premium Quality",
    desc: "Durable, vibrant prints using top DTF technology",
  },
  {
    icon: CheckCircle,
    title: "500+ Happy Clients",
    desc: "Trusted by businesses & individuals across India",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Quick processing & reliable delivery nationwide",
  },
  {
    icon: Globe,
    title: "Pan India Delivery",
    desc: "We ship to every corner of India",
  },
];

const stats = [
  { label: "Orders Completed", value: 500, suffix: "+" },
  { label: "Clothes Printed", value: 1000, suffix: "+" },
  { label: "Cities Served", value: 120, suffix: "+" },
];

function AnimatedCounter({
  target,
  suffix,
}: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 20);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl font-bold font-fraunces text-primary">
      {count}
      {suffix}
    </div>
  );
}

export function HomePage() {
  return (
    <main>
      {/* Hero with Video Background */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* YouTube video background - DTF heat press t-shirt printing */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ pointerEvents: "none" }}
        >
          <iframe
            src="https://www.youtube.com/embed/Uy5kqBjz30M?autoplay=1&mute=1&loop=1&playlist=Uy5kqBjz30M&controls=0&disablekb=1&playsinline=1&rel=0&modestbranding=1&showinfo=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="DTF Heat Press Printing"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200%",
              height: "200%",
              border: "none",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Decorative ink blobs */}
        <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
          <div className="ink-blob ink-blob-1" />
          <div className="ink-blob ink-blob-2" />
          <div className="ink-blob ink-blob-3" />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Hero content */}
        <div className="relative z-20 w-full px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={logoUrl}
                alt="Mahaveer Crafting"
                className="h-32 w-auto mx-auto mb-6 object-contain drop-shadow-2xl"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />

              <motion.h1
                className="font-fraunces text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Premium{" "}
                <span className="rainbow-text">DTF &amp; Sublimation</span>{" "}
                Printing
              </motion.h1>

              <motion.p
                className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Customized apparel printing for events, uniforms, cafes &amp;
                businesses. Starting from{" "}
                <strong className="text-teal-300">₹149 per item</strong> | Min
                10 pieces.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-teal-dark text-white font-bold px-8"
                  data-ocid="hero.primary_button"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white font-bold px-8"
                  data-ocid="hero.secondary_button"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-1"
                data-ocid={`stats.item.${i + 1}`}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Icons */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center font-fraunces text-2xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                href: "tel:+919311246415",
                ocid: "contact.phone_button",
                bg: "bg-teal-light hover:bg-primary/20",
                iconBg: "bg-primary",
                Icon: Phone,
                label: "Call Us",
                sub: "+91 9311246415",
              },
              {
                href: WA_URL,
                ocid: "contact.whatsapp_button",
                bg: "bg-green-50 hover:bg-green-100",
                iconBg: "bg-green-500",
                Icon: SiWhatsapp,
                label: "WhatsApp",
                sub: "Chat Now",
                external: true,
              },
              {
                href: "https://www.instagram.com/mahaveercrafting?igsh=MXBkdHB1eWk5NWpjeQ==",
                ocid: "contact.instagram_button",
                bg: "bg-pink-50 hover:bg-pink-100",
                iconBg:
                  "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
                Icon: SiInstagram,
                label: "Instagram",
                sub: "@mahaveercrafting",
                external: true,
              },
              {
                href: "https://www.facebook.com/profile.php?id=61583204133717",
                ocid: "contact.facebook_button",
                bg: "bg-blue-50 hover:bg-blue-100",
                iconBg: "bg-blue-600",
                Icon: SiFacebook,
                label: "Facebook",
                sub: "Follow Us",
                external: true,
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                data-ocid={item.ocid}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl ${item.bg} transition-colors`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.06 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`h-12 w-12 rounded-full ${item.iconBg} flex items-center justify-center`}
                >
                  <item.Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {item.label}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.sub}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-fraunces text-3xl font-bold text-foreground mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center cursor-default"
                data-ocid={`why.item.${i + 1}`}
              >
                <div className="h-12 w-12 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-3">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-12 px-4 bg-primary text-white text-center">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="inline-block mb-4"
        >
          <span className="bg-white text-primary font-bold text-sm px-4 py-1 rounded-full shadow-lg">
            🎨 Best Price Guaranteed
          </span>
        </motion.div>
        <h2 className="font-fraunces text-3xl font-bold mb-2">
          Affordable Pricing
        </h2>
        <p className="text-white/80 text-lg mb-6">
          Starting from <strong>₹149 per item</strong> &nbsp;|&nbsp; Minimum
          Order: <strong>10 pieces</strong>
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-primary font-bold hover:bg-white/90"
          data-ocid="pricing_teaser.button"
        >
          <Link to="/pricing">View Pricing Details</Link>
        </Button>
      </section>
    </main>
  );
}
