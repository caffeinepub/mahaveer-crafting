import { MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

const WA_URL =
  "https://wa.me/919311246415?text=Hi%20Mahaveer%20Crafting%2C%20I%20am%20interested%20in%20your%20DTF%20printing%20services.%20Please%20share%20more%20details.";

export function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <img
          src="/assets/uploads/img_20250924_081057_396-019d253e-352e-7773-9acb-97c95c3b2cfa-1.webp"
          alt="Mahaveer Crafting"
          className="h-20 w-auto mx-auto mb-4 object-contain"
        />
        <h1 className="font-fraunces text-4xl font-bold text-foreground mb-3">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-lg">
          We'd love to hear from you. Reach out via any of the channels below.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Address */}
        <div
          className="bg-white rounded-2xl p-6 shadow-card flex gap-4"
          data-ocid="contact.card"
        >
          <div className="h-11 w-11 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">Address</h3>
            <p className="text-muted-foreground text-sm">
              Bakhtawarpur, Delhi 110036, India
            </p>
          </div>
        </div>

        {/* Phone */}
        <a
          href="tel:+919311246415"
          className="bg-white rounded-2xl p-6 shadow-card flex gap-4 hover:shadow-card-hover transition-shadow"
          data-ocid="contact.phone_button"
        >
          <div className="h-11 w-11 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">Call Us</h3>
            <p className="text-primary font-semibold text-sm">+91 9311246415</p>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-6 shadow-card flex gap-4 hover:shadow-card-hover transition-shadow"
          data-ocid="contact.whatsapp_button"
        >
          <div className="h-11 w-11 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
            <SiWhatsapp className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
            <p className="text-green-600 font-semibold text-sm">
              Click to chat — message pre-filled
            </p>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/mahaveercrafting?igsh=MXBkdHB1eWk5NWpjeQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-6 shadow-card flex gap-4 hover:shadow-card-hover transition-shadow"
          data-ocid="contact.instagram_button"
        >
          <div className="h-11 w-11 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
            <SiInstagram className="h-5 w-5 text-pink-600" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">Instagram</h3>
            <p className="text-pink-600 font-semibold text-sm">
              @mahaveercrafting
            </p>
          </div>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61583204133717"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-6 shadow-card flex gap-4 hover:shadow-card-hover transition-shadow sm:col-span-2"
          data-ocid="contact.facebook_button"
        >
          <div className="h-11 w-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <SiFacebook className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">Facebook</h3>
            <p className="text-blue-600 font-semibold text-sm">
              Mahaveer Crafting
            </p>
          </div>
        </a>
      </div>

      {/* Business Hours Note */}
      <div className="mt-8 bg-teal-light rounded-2xl p-6 text-center">
        <p className="text-foreground/80 text-sm">
          📞 We're available <strong>Mon–Sat, 9 AM – 7 PM</strong>. For urgent
          queries, WhatsApp is the fastest way to reach us.
        </p>
      </div>
    </main>
  );
}
