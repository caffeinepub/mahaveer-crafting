import { Building2, CheckCircle, Target } from "lucide-react";
import { motion } from "motion/react";

const whyList = [
  "Premium Quality DTF Printing",
  "500+ Satisfied Clients Across India",
  "Fully Customized Designs as per Your Needs",
  "Long-lasting and Vibrant Prints",
  "Fast & Reliable Service",
  "Pan India Delivery",
];

const services = [
  "Custom Logo Printing on T-shirts & Apparel",
  "Bulk Printing for Brands & Businesses",
  "Personalized Clothing Designs",
  "High-Resolution DTF Transfers",
];

export function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <img
          src="/assets/uploads/img_20250924_081057_396-019d253e-352e-7773-9acb-97c95c3b2cfa-1.webp"
          alt="Mahaveer Crafting"
          className="h-24 w-auto mx-auto mb-4 object-contain"
        />
        <h1 className="font-fraunces text-4xl font-bold text-foreground mb-3">
          About Us
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Mahaveer Crafting is a fast-growing printing company established in
          2025, delivering high-quality DTF (Direct to Film) printing services
          across India.
        </p>
      </motion.div>

      {/* Company Story */}
      <section
        className="bg-white rounded-2xl p-8 shadow-card mb-8"
        data-ocid="about.section"
      >
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="h-6 w-6 text-primary" />
          <h2 className="font-fraunces text-2xl font-bold text-foreground">
            Our Story
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          We specialize in customizing designs and logos on clothing, turning
          our clients' ideas into reality with precision and excellence. With a
          strong commitment to quality and customer satisfaction, we have
          successfully served
          <strong className="text-primary"> 500+ happy clients</strong>{" "}
          nationwide. Our expertise lies in providing durable, vibrant, and
          premium prints that meet modern branding and personal customization
          needs.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          At Mahaveer Crafting, we believe every design has a story — and we
          ensure it is printed perfectly.
        </p>
        <div className="flex gap-6 mt-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary font-fraunces">
              500+
            </div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary font-fraunces">
              2025
            </div>
            <div className="text-sm text-muted-foreground">Established</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary font-fraunces">
              Pan
            </div>
            <div className="text-sm text-muted-foreground">India Delivery</div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-teal-light rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Target className="h-6 w-6 text-primary" />
          <h2 className="font-fraunces text-2xl font-bold text-foreground">
            Our Mission
          </h2>
        </div>
        <p className="text-foreground/80 leading-relaxed">
          Our mission is to deliver top-quality customized printing solutions by
          understanding our customers' requirements and exceeding their
          expectations with creativity, precision, and reliability.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white rounded-2xl p-8 shadow-card mb-8">
        <h2 className="font-fraunces text-2xl font-bold text-foreground mb-5">
          Why Choose Us
        </h2>
        <ul className="space-y-3">
          {whyList.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white rounded-2xl p-8 shadow-card">
        <h2 className="font-fraunces text-2xl font-bold text-foreground mb-5">
          Our Services
        </h2>
        <ul className="space-y-3">
          {services.map((s) => (
            <li key={s} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-foreground/80">{s}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
