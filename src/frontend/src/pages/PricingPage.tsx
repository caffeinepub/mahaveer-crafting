import { Button } from "@/components/ui/button";
import { CheckCircle, Info } from "lucide-react";
import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

const WA_URL =
  "https://wa.me/919311246415?text=Hi%20Mahaveer%20Crafting%2C%20I%20would%20like%20a%20custom%20quote%20for%20bulk%20printing.%20Please%20share%20details.";

const includes = [
  "Full-color custom design printing",
  "DTF or Sublimation as per fabric",
  "Free design consultation",
  "Bulk discounts available",
  "Pan India shipping included",
];

export function PricingPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="font-fraunces text-4xl font-bold text-foreground mb-3">
          Pricing
        </h1>
        <p className="text-muted-foreground text-lg">
          Simple, affordable pricing with no hidden charges.
        </p>
      </motion.div>

      <div
        className="bg-primary rounded-2xl p-8 text-white text-center mb-8 shadow-card-hover"
        data-ocid="pricing.card"
      >
        <div className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-2">
          Starting From
        </div>
        <div className="font-fraunces text-6xl font-bold mb-1">₹149</div>
        <div className="text-white/80 text-lg">per item</div>
        <div className="mt-4 inline-block bg-white/20 rounded-full px-4 py-1.5 text-sm font-semibold">
          Minimum Order: 10 pieces
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-card mb-8">
        <h2 className="font-bold text-lg text-foreground mb-4">
          What's Included
        </h2>
        <ul className="space-y-3">
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-teal-light rounded-2xl p-5 flex gap-3 mb-8">
        <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm text-foreground/80">
          For large bulk orders (100+ pieces), special discounts are available.
          Contact us on WhatsApp for a custom quote tailored to your
          requirements.
        </p>
      </div>

      <div className="text-center">
        <Button
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white font-bold gap-2 px-8"
          data-ocid="pricing.whatsapp_button"
        >
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">
            <SiWhatsapp className="h-5 w-5" />
            Get a Custom Quote on WhatsApp
          </a>
        </Button>
      </div>
    </main>
  );
}
