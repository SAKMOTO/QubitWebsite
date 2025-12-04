import { motion, useMotionValue, useTransform } from "framer-motion";
import { Bot, Workflow, Sparkles, CircuitBoard } from "lucide-react";

const cards = [
  {
    icon: Bot,
    label: "Agents",
    title: "AI agents that act like teammates",
    description:
      "Spin up specialized agents for research, coding, QA and operations that collaborate on your work.",
  },
  {
    icon: Workflow,
    label: "Workflows",
    title: "Visual flows with real autonomy",
    description:
      "Design multi-step flows that combine tools, APIs and human approvals in a single canvas.",
  },
  {
    icon: Sparkles,
    label: "Automation",
    title: "Ship more with fewer clicks",
    description:
      "Automate the busywork across releases, triage and reporting so your team can focus on strategy.",
  },
  {
    icon: CircuitBoard,
    label: "Integrations",
    title: "Connect the tools you already use",
    description:
      "Plug into your existing stack – GitHub, Jira, Slack, Notion and custom APIs.",
  },
];

const TiltCard = ({ icon: Icon, label, title, description }: (typeof cards)[number]) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-40, 40], [8, -8]);
  const rotateY = useTransform(x, [-40, 40], [-8, 8]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 4);
    y.set(offsetY / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="h-full"
    >
      <div
        className="relative h-full p-6 rounded-3xl glass-card border border-border/50 hover:border-primary/60 transition-all duration-500 shadow-[0_0_40px_hsl(var(--primary)/0.2)] bg-gradient-to-br from-background/60 via-background/40 to-primary/5"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
          <span className="uppercase tracking-wide">{label}</span>
          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">Live</span>
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ScrollShowcaseSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.15),_transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full glass-card text-xs uppercase tracking-wide text-primary mb-4">
              AI Workflow Canvas
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              See your AI agents, workflows
              <br className="hidden md:block" />
              and automations in 3D motion
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
              Scroll to explore how Qubit agents, workflows and integrations come together to power
              an AI-native development stack.
            </p>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground max-w-xs">
            Cards respond to your cursor and scroll, giving a Dora-style sense of depth while keeping
            Qubit&apos;s orange glow.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <TiltCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollShowcaseSection;
