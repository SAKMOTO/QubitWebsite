import { motion } from "framer-motion";

const integrations = [
  "WhatsApp",
  "Amazon",
  "OpenHands",
  "Browser-Use",
  "Google",
  "GitHub",
  "Discord",
  "OpenAI",
  "DeepSeek AI",
];

const IntegrationWallSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_hsl(var(--primary)/0.14),_transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-xs uppercase tracking-wide text-primary mb-4">
            Integrations
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            A 3D Wall of Tools Your Qubit Agents Can Control
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Qubit seamlessly connects with the platforms you use every day — allowing your AI agents to
            message, browse, automate, and execute tasks end-to-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {integrations.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative rounded-2xl glass-card border border-border/50 group-hover:border-primary/70 transition-all duration-500 p-4 flex items-center justify-center text-sm md:text-base font-medium text-foreground shadow-[0_0_30px_hsl(var(--primary)/0.1)]">
                <span>{name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationWallSection;
