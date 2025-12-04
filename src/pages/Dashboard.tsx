import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Bot, 
  Clock, 
  Zap, 
  Settings,
  LogOut,
  User
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserEmail(data.user?.email ?? null);
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "See you next time!",
    });
    navigate("/");
  };

  const recentProjects = [
    { name: "Website Redesign", status: "completed", agents: 3 },
    { name: "API Integration", status: "in-progress", agents: 2 },
    { name: "Data Migration", status: "pending", agents: 1 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Top navigation inside dashboard */}
          <div className="mb-6 overflow-x-auto">
            <div className="flex items-center gap-4 text-sm text-muted-foreground whitespace-nowrap">
              {/* Product group */}
              <span className="font-semibold text-foreground">Product</span>
              <Link to="/features" className="hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/enterprise" className="hover:text-primary transition-colors">
                Enterprise
              </Link>

              {/* Company group */}
              <span className="ml-6 font-semibold text-foreground">Company</span>
              <a
                href="https://portfolio-harun.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="/#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
              <a
                href="/#community"
                className="hover:text-primary transition-colors"
              >
                Support
              </a>
              <a
                href="/#community"
                className="hover:text-primary transition-colors"
              >
                Community
              </a>

              {/* Resources group */}
              <span className="ml-6 font-semibold text-foreground">Resources</span>
              <Link to="/dashboard" className="hover:text-primary transition-colors">
                Careers
              </Link>
              <Link to="/enterprise" className="hover:text-primary transition-colors">
                Security
              </Link>
              <a
                href="/#partnerships"
                className="hover:text-primary transition-colors"
              >
                Partnerships
              </a>
            </div>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
          >
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
                Welcome back! 👋
              </h1>
              <p className="text-muted-foreground">
                Manage your AI agents and projects
              </p>
            </div>
            <div className="flex items-center gap-3">
              {userEmail && (
                <span className="text-xs text-muted-foreground hidden sm:inline-flex items-center gap-1">
                  Signed in as
                  <span className="font-medium text-foreground">{userEmail}</span>
                </span>
              )}
              <Button variant="outline" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Bot, label: "Active Agents", value: "6" },
              { icon: Zap, label: "Tasks Completed", value: "128" },
              { icon: Clock, label: "Hours Saved", value: "42" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* New Project Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <Button variant="hero" className="group">
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              New Project
            </Button>
          </motion.div>

          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
              Recent Projects
            </h2>
            <div className="space-y-4">
              {recentProjects.map((project, index) => (
                <div
                  key={project.name}
                  className="glass-card rounded-xl p-4 flex items-center justify-between hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{project.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {project.agents} agent{project.agents > 1 ? "s" : ""} assigned
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "in-progress"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
