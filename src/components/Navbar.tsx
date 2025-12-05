import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Stepper, { Step } from "@/components/Stepper";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [showDownloadStepper, setShowDownloadStepper] = useState(false);
  const location = useLocation();

  const triggerDownload = () => {
    // Optional click sound (place a short audio file at public/download-click.mp3)
    const clickAudio = new Audio("/download-click.mp3");
    // expose globally so other components can pause/stop it if needed
    if (typeof window !== "undefined") {
      (window as any).__qubitDownloadAudio = clickAudio;
    }

    clickAudio.play().catch(() => {
      // ignore autoplay errors
    });

    const downloadUrl =
      "https://drive.google.com/file/d/1fuDwHOP-ZvQR3hmsJIw3YDtm8z937bji/view?usp=sharing";

    window.open(downloadUrl, "_blank");
  };

  const handleDownloadClick = () => {
    setShowDownloadStepper(true);
  };

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Enterprise", href: "/enterprise" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      {/* Download Stepper Modal */}
      <AnimatePresence>
        {showDownloadStepper && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative w-full max-w-xl px-4"
            >
              <div className="absolute -top-10 right-0 flex items-center gap-2 text-sm text-muted-foreground">
                <button
                  onClick={() => setShowDownloadStepper(false)}
                  className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs hover:bg-background"
                >
                  Close
                </button>
              </div>
              <Stepper
                initialStep={1}
                onFinalStepCompleted={() => {
                  setShowDownloadStepper(false);
                  triggerDownload();
                }}
                nextButtonText="Next"
                backButtonText="Previous"
              >
                <Step>
                  <h2 className="text-lg font-semibold mb-2 text-foreground">Welcome to Qubit</h2>
                  <p className="text-sm text-muted-foreground mb-1">
                    This wizard will guide you through downloading the Qubit desktop app.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Click <span className="font-semibold">Next</span> to continue.
                  </p>
                </Step>
                <Step>
                  <h2 className="text-lg font-semibold mb-2 text-foreground">What you&apos;ll get</h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    You&apos;ll download a <span className="font-semibold">ZIP file</span> that contains the
                    Qubit application.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Make sure you have enough space on your device before continuing.
                  </p>
                </Step>
                <Step>
                  <h2 className="text-lg font-semibold mb-2 text-foreground">Important</h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    Before using Qubit, please <span className="font-semibold">extract the downloaded ZIP
                    file</span>. The application is inside the extracted folder.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    When you click <span className="font-semibold">Complete</span>, your download will start
                    automatically.
                  </p>
                </Step>
              </Stepper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-extrabold text-xl tracking-tight">
                Q
              </span>
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tight uppercase text-foreground group-hover:text-primary transition-colors">
              Qubit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href}>
                <Button
                  variant="nav"
                  className={location.pathname === link.href ? "text-foreground" : ""}
                >
                  {link.name}
                </Button>
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <Button
                variant="nav"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
              </Button>
              
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 glass-card rounded-lg overflow-hidden shadow-xl"
                  >
                    <a
                      href="https://github.com/SAKMOTO/Qubit.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <Link
                      to="/docs"
                      className="flex items-center gap-2 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      Documentation
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/SAKMOTO/Qubit.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <Link to="/auth">
              <Button variant="outline">Sign in</Button>
            </Link>
            <Button variant="hero" onClick={handleDownloadClick}>
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/30"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://github.com/SAKMOTO/Qubit.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <div className="px-4 pt-4 space-y-2">
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">Sign in</Button>
                  </Link>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      handleDownloadClick();
                    }}
                  >
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
