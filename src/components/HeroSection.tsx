import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SplineViewer from "./SplineViewer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Spline Background - Full Width */}
      <div className="absolute inset-0 z-0">
        <SplineViewer />
      </div>
      
      {/* Overlays for text readability - pointer-events-none to allow Spline interaction */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-background via-transparent to-background/30" />

      {/* Content Overlay */}
      <div className="container mx-auto px-4 relative z-10 pointer-events-none">
        <div className="min-h-[calc(100vh-4rem)] flex items-center">
          {/* Left Content - Re-enable pointer events for interactive elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI-Powered Development Platform
            </motion.div>

            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.9]">
              <span className="text-gradient">Qubit</span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-2">
              Tell your computer what to do,
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-primary glow-text mb-8">
              and it gets it done.
            </p>

            <p className="text-lg text-muted-foreground max-w-xl mb-10">
              Experience the future of software development with AI-driven agents
              that understand your intent and deliver results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth">
                <Button variant="hero" className="group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://github.com/SAKMOTO/Qubit.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="heroOutline" className="group">
                  <Github className="w-5 h-5" />
                  Star on GitHub
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Follow on X
              </a>
              <span className="text-border">•</span>
              <a
                href="https://github.com/SAKMOTO/Qubit.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                View Documentation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
