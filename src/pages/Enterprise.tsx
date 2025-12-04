import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Shield, 
  Users, 
  Lock, 
  Server, 
  Headphones,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "SOC 2 Type II Compliance",
    description: "Enterprise-grade security with full compliance certifications.",
  },
  {
    icon: Lock,
    title: "Single Sign-On (SSO)",
    description: "Integrate with your existing identity providers like Okta, Azure AD.",
  },
  {
    icon: Users,
    title: "RBAC & Permissions",
    description: "Granular role-based access control for your entire organization.",
  },
  {
    icon: Server,
    title: "Self-Hosted Option",
    description: "Deploy Qubit in your own VPC via Kubernetes for maximum control.",
  },
  {
    icon: Building2,
    title: "Dedicated Infrastructure",
    description: "Isolated compute resources with guaranteed SLAs.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "24/7 access to our research team and dedicated success manager.",
  },
];

const included = [
  "Unlimited AI agents",
  "Custom model fine-tuning",
  "Private cloud deployment",
  "Audit logs & compliance",
  "Slack, Jira, Linear integrations",
  "Multi-user collaboration",
  "Custom SLA agreements",
  "Dedicated account manager",
];

const Enterprise = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
              <Building2 className="w-4 h-4" />
              Enterprise Solutions
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Scale with <span className="text-gradient">Confidence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deploy Qubit across your organization with enterprise-grade security,
              compliance, and dedicated support.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Everything you need for enterprise
                </h2>
                <p className="text-muted-foreground mb-8">
                  Get started with a comprehensive enterprise package that includes
                  all the tools and support your team needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="glass-card rounded-2xl p-8 inline-block">
                  <p className="text-muted-foreground mb-2">Enterprise</p>
                  <p className="font-heading text-4xl font-bold text-foreground mb-2">
                    Custom Pricing
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Tailored to your organization's needs
                  </p>
                  <Link to="/auth">
                    <Button variant="hero" className="w-full group">
                      Contact Sales
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Aditya College Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground">
              Proudly developed at{" "}
              <span className="text-foreground font-semibold">
                Aditya College of Engineering and Technology
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
