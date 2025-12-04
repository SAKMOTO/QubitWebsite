import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString() ?? "";
    const subject = formData.get("subject")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const mailto = `mailto:mohammedharun3916@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`From: ${email || "(no email provided)"}\n\n${message}`)}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 border-t border-border/30 bg-background/60">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-xs uppercase tracking-wide text-primary mb-4">
              Contact
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Contact me
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Have feedback, ideas or need support with Qubit? Send me a message and I&apos;ll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 glass-card rounded-2xl p-6 border border-border/40">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Your email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Tell me what this is about"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message here..."
                required
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit" variant="hero">
                Send message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
