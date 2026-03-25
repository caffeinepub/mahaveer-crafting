import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const faqs = [
  {
    q: "What is DTF Printing?",
    a: "DTF (Direct-to-Film) printing is a modern technique where designs are printed on a special film and then heat-transferred onto fabric. It works on virtually any material and produces vivid, long-lasting prints.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum order is 10 pieces per design. This applies to all products including t-shirts, hoodies, and other apparel.",
  },
  {
    q: "What is the starting price?",
    a: "Printing starts from ₹149 per item. The final price depends on design complexity, quantity, and garment type. Bulk orders get attractive discounts.",
  },
  {
    q: "Can I provide my own design?",
    a: "Yes! You can send your design in PNG, PDF, or AI format. We recommend high-resolution files (300 DPI or higher) for the best print quality.",
  },
  {
    q: "What types of clothing can you print on?",
    a: "We print on t-shirts, polos, hoodies, caps, bags, aprons, and most other cotton or polyester garments. Contact us if you're unsure about a specific item.",
  },
  {
    q: "How long does it take to deliver?",
    a: "Typical turnaround is 3–7 working days after order confirmation and artwork approval. Delivery times vary by location across India.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes, we offer Pan India delivery through reliable courier partners. Shipping is included in our pricing.",
  },
  {
    q: "How do I place an order?",
    a: "Simply contact us via WhatsApp at +91 9311246415 with your design, garment type, quantity, and size details. We'll guide you through the rest.",
  },
];

export function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="font-fraunces text-4xl font-bold text-foreground mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about our printing services.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.q}
            value={faq.q}
            className="bg-white rounded-2xl shadow-card border-none px-6"
          >
            <AccordionTrigger className="font-semibold text-foreground hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
