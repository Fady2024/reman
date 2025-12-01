import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@reman.co",
    href: "mailto:hello@reman.co",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+201111111111",
    href: "tel:+201111111111",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Cairo, Egypt",
    href: "#",
  },
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping within Egypt takes 3-5 business days. Express shipping (1-2 days) is available for Cairo and major cities.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unworn items in original condition. Free returns on all orders over 3,000 EGP.",
  },
  {
    question: "How do I know my size?",
    answer: "Each product page includes detailed sizing information. If you're between sizes, we recommend sizing up for a relaxed fit.",
  },
  {
    question: "Are your products truly sustainable?",
    answer: "Yes! Every item is made from rescued end-of-season stock or recycled materials. We provide full transparency about each product's origins.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24-48 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our products, sustainability practices, or anything else?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us more..."
                    rows={6}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <info.icon className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {["Instagram", "Twitter", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label={social}
                    >
                      <span className="text-xs font-medium">
                        {social.charAt(0)}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container-custom">
          <motion.h2
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-card p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
