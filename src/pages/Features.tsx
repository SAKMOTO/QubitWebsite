import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { 
  Cpu, 
  Zap, 
  Shield, 
  Globe, 
  Terminal, 
  Layers,
  Bot,
  Code2
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Agents",
    description: "Intelligent agents that understand your intent and execute complex tasks autonomously.",
  },
  {
    icon: Terminal,
    title: "Natural Language Commands",
    description: "Simply describe what you want in plain English, and watch it happen.",
  },
  {
    icon: Code2,
    title: "Code Generation",
    description: "Generate production-ready code across multiple languages and frameworks.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with parallel processing and intelligent caching.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with SOC 2 Type II standards.",
  },
  {
    icon: Globe,
    title: "Browser Automation",
    description: "Automate web interactions with intelligent browser control powered by Browser-Use.",
  },
  {
    icon: Layers,
    title: "Multi-Agent System",
    description: "Orchestrate multiple AI agents working together on complex projects.",
  },
  {
    icon: Cpu,
    title: "Local & Cloud",
    description: "Run locally on your machine or scale to thousands of agents in the cloud.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful <span className="text-gradient">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build software with AI-powered automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Aditya College Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 glass-card rounded-2xl p-8 text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Developed at <span className="text-gradient">Aditya College of Engineering and Technology</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This project is proudly developed as part of the innovative research and development
              initiatives at Aditya College of Engineering and Technology.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
