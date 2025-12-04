import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";

const CreditsSection = () => {
  return (
    <section className="py-20 border-t border-border/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Built With <span className="text-gradient">Amazing Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Qubit is powered by incredible open-source projects
          </p>
        </motion.div>

        {/* Fusion-style testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-xs uppercase tracking-wide text-primary mb-4">
              Customer Stories
            </span>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Hear from teams using Qubit every day
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              From solo builders to global enterprises, Qubit helps teams ship faster with AI-native workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[ 
              {
                quote: "Qubit turned our backlog into a roadmap we can actually keep up with.",
                name: "Aarav Patel",
                role: "Head of Engineering, NovaStack",
              },
              {
                quote: "We automate entire release workflows without adding more ops burden.",
                name: "Sophia Lee",
                role: "VP of Product, Flux Systems",
              },
              {
                quote: "Our agents feel like extra teammates who never sleep or get tired.",
                name: "Daniel Rodríguez",
                role: "CTO, Horizon Labs",
              },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 h-full flex flex-col justify-between border border-border/40 hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]"
              >
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  “{item.quote}”
                </p>
                <div className="mt-2">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* OpenHands Credit */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <span className="text-2xl">🙌</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  OpenHands
                </h3>
                <p className="text-sm text-muted-foreground">
                  AI-Driven Development Community
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A community focused on AI-driven development. OpenHands provides the Software Agent SDK,
              CLI, Local GUI, and Cloud infrastructure that powers intelligent software development.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              <li>• OpenHands Software Agent SDK</li>
              <li>• CLI for easy agent usage</li>
              <li>• Local GUI for laptop development</li>
              <li>• Cloud deployment with integrations</li>
            </ul>
            <a
              href="https://github.com/All-Hands-AI/OpenHands"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
            >
              Learn more <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Browser-Use Credit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <span className="text-2xl">🌐</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  Browser-Use
                </h3>
                <p className="text-sm text-muted-foreground">
                  Browser Automation Framework
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A powerful browser automation tool that enables AI agents to interact with web interfaces,
              automating complex browser-based tasks with intelligence.
            </p>
            <a
              href="https://github.com/browser-use/browser-use"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
            >
              Learn more <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Gregor Zunic License */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 glass-card rounded-2xl p-6 max-w-2xl mx-auto"
        >
          <h4 className="font-heading font-semibold text-foreground mb-3">
            3D Animation Credit
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            MIT License • Copyright (c) 2024 Gregor Zunic
            <br /><br />
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software.
          </p>
        </motion.div>

        {/* Fusion-style FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-xs uppercase tracking-wide text-primary mb-4">
              FAQ
            </span>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-3">
              Frequently asked questions
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Everything you need to know about getting started with Qubit.
            </p>
          </div>

          <div className="space-y-4">
            {[ 
              {
                q: "Which tools can I connect to Qubit?",
                a: "Qubit is designed to work with your existing stack – from GitHub and Jira to Slack, Notion, and custom APIs via webhooks.",
              },
              {
                q: "Do I need to be an AI expert to use it?",
                a: "No. You describe workflows in natural language while Qubit agents handle the complex orchestration under the hood.",
              },
              {
                q: "Is Qubit ready for enterprise teams?",
                a: "Yes. We provide SSO, audit logs, private deployments, and security reviews for larger organizations.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="glass-card rounded-xl p-4 border border-border/50 hover:border-primary/60 transition-all duration-300"
              >
                <p className="text-sm font-semibold text-foreground mb-1">{item.q}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 glass-card rounded-3xl p-8 md:p-10 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start your Qubit automation journey today
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Spin up your first AI agent, connect your favorite tools, and watch Qubit handle the busywork while you focus on strategy.
          </p>
          <p className="text-xs text-muted-foreground">
            No long setup. No complex configs. Just describe what you want, and let Qubit do the rest.
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
            <span className="text-foreground font-semibold">Mohammed Harun</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CreditsSection;
