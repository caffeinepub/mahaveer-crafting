import logoUrl from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Globe, Phone, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
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

export function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logoUrl}
              alt="Mahaveer Crafting"
              className="h-32 w-auto mx-auto mb-6 object-contain drop-shadow-lg"
            />
            <h1 className="font-fraunces text-4xl md:text-5xl font-bold text-foreground mb-4">
              Premium <span className="rainbow-text">DTF & Sublimation</span>{" "}
              Printing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Customized apparel printing for events, uniforms, cafes &
              businesses. Starting from{" "}
              <strong className="text-primary">₹149 per item</strong> | Min 10
              pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                className="border-primary text-primary hover:bg-primary/10 font-bold px-8"
                data-ocid="hero.secondary_button"
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Icons */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center font-fraunces text-2xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="tel:+919311246415"
              data-ocid="contact.phone_button"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-teal-light hover:bg-primary/20 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                Call Us
              </span>
              <span className="text-xs text-muted-foreground">
                +91 9311246415
              </span>
            </a>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_button"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                <SiWhatsapp className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                WhatsApp
              </span>
              <span className="text-xs text-muted-foreground">Chat Now</span>
            </a>

            <a
              href="https://www.instagram.com/mahaveercrafting?igsh=MXBkdHB1eWk5NWpjeQ=="
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.instagram_button"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
                <SiInstagram className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                Instagram
              </span>
              <span className="text-xs text-muted-foreground">
                @mahaveercrafting
              </span>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61583204133717"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.facebook_button"
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                <SiFacebook className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                Facebook
              </span>
              <span className="text-xs text-muted-foreground">Follow Us</span>
            </a>
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
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center"
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
