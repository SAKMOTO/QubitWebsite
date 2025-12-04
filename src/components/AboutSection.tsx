import { motion } from "framer-motion";
import { Cpu, Zap, Shield, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Native Architecture",
      description: "Built from the ground up with artificial intelligence at its core, enabling seamless human-computer collaboration."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute complex development tasks in seconds. Our AI agents work at machine speed while maintaining human-level quality."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols protect your code and intellectual property at every step."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy and manage applications worldwide with our distributed infrastructure and intelligent load balancing."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-4">
            About Qubit
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Future of <span className="text-gradient">Development</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Qubit represents a paradigm shift in software development. We're building the bridge between human creativity and machine capability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10K+", label: "Developers" },
            { value: "1M+", label: "Lines Generated" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Fusion-style 3-step workflow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-xs uppercase tracking-wide text-primary mb-4">
              Workflow
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Automate workflows in three simple steps
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Design powerful AI workflows by combining triggers, apps and Qubit agents.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[ 
              {
                step: "01",
                title: "Select a trigger",
                description: "Choose when your workflow should start – from webhooks to app events or a simple schedule.",
              },
              {
                step: "02",
                title: "Connect your tools",
                description: "Plug in the apps your team already uses and let Qubit handle the API complexity.",
              },
              {
                step: "03",
                title: "Let AI do the work",
                description: "Qubit agents reason over context, call tools and close the loop while you stay in control.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                <div className="relative h-full p-6 rounded-3xl glass-card border border-border/60 group-hover:border-primary/60 transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-muted-foreground">Step</span>
                    <span className="text-sm font-semibold text-primary">{item.step}</span>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
