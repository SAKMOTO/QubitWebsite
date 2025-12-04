import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, HeartHandshake, Users, ShieldCheck } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-background/60 border-t border-border/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10 lg:grid-cols-3"
        >
          {/* Support & Community */}
          <div className="space-y-4">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-xs uppercase tracking-wide text-primary">
              Support & Community
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Stay connected with the Qubit community
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Join the community spaces to ask questions, share ideas and see what others are building with Qubit.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary inline-flex items-center gap-1"
                >
                  Discord community
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary inline-flex items-center gap-1"
                >
                  Telegram group
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <a
                  href="https://www.reddit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary inline-flex items-center gap-1"
                >
                  Reddit community
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <a
                  href="https://github.com/SAKMOTO/Qubit.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary inline-flex items-center gap-1"
                >
                  GitHub discussions
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Donate */}
          <div className="space-y-4" id="donate">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs text-primary">
              <HeartHandshake className="w-3 h-3" />
              Support the project
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              If you like my work, consider donating
            </h3>
            <p className="text-sm text-muted-foreground">
              If you enjoy using Qubit, you can donate even just <strong>1 rupee</strong> or <strong>1 dollar</strong>.
              Your support helps me keep building and improving the app.
            </p>
            <p className="text-xs text-muted-foreground">
              Enjoy the Qubit app and stay healthy.
            </p>
            <div className="mt-4 space-y-3">
              <p className="text-xs text-muted-foreground">
                Scan the QR code below to donate:
              </p>
              <div className="rounded-2xl glass-card border border-border/40 p-4 flex flex-col items-center justify-center">
                {/* Replace /donate-qr.png with your actual QR image in the public/ folder */}
                <img
                  src="/donate-qr.png"
                  alt="Donate QR code"
                  className="w-40 h-40 object-contain mb-3"
                />
                <p className="text-[11px] text-muted-foreground text-center">
                  Thank you for supporting this project.
                </p>
              </div>
            </div>
          </div>

          {/* Partnerships & Security */}
          <div className="space-y-4" id="partnerships">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/40 text-xs text-muted-foreground">
              <ShieldCheck className="w-3 h-3 text-primary" />
              Partnerships & education
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Partnerships & background
            </h3>
            <p className="text-sm text-muted-foreground">
              Qubit is built with a strong academic and engineering foundation.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • Diploma at Andhra Polytechnic, Kakinada
              </li>
              <li>
                • Aditya College of Engineering and Technology – CSE (AI & ML)
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Interested in collaborations, research projects or partnerships? Reach out through the
              contact form and mention "Partnerships" in the subject.
            </p>
            <Button asChild variant="outline" size="sm">
              <a href="/#contact">Contact about partnerships</a>
            </Button>

            {/* Quick links row */}
            <div className="pt-4 border-t border-border/40 text-[11px] text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
              <span className="font-semibold text-foreground">Quick links:</span>
              <a href="/features" className="hover:text-primary transition-colors">Features</a>
              <a href="/enterprise" className="hover:text-primary transition-colors">Enterprise</a>
              <span>|</span>
              <span className="font-semibold text-foreground">Company</span>
              <a
                href="https://portfolio-harun.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a href="/#contact" className="hover:text-primary transition-colors">Contact</a>
              <a href="/#community" className="hover:text-primary transition-colors">Support</a>
              <a href="/#community" className="hover:text-primary transition-colors">Community</a>
              <span>|</span>
              <span className="font-semibold text-foreground">Resources</span>
              <a href="/dashboard" className="hover:text-primary transition-colors">Careers</a>
              <a href="/enterprise" className="hover:text-primary transition-colors">Security</a>
              <a href="/#partnerships" className="hover:text-primary transition-colors">Partnerships</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
