import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, Sliders, Headphones, RefreshCw } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Deploy your server in under 60 seconds with our automated provisioning system.",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Enterprise-grade protection against attacks, keeping your services online 24/7.",
      color: "text-green-500",
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "Guaranteed uptime SLA with redundant infrastructure and automatic failover.",
      color: "text-blue-500",
    },
    {
      icon: Sliders,
      title: "Flexible Resources",
      description: "Scale CPU, RAM, and storage on-demand without any downtime.",
      color: "text-purple-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team available round the clock via ticket and live chat.",
      color: "text-pink-500",
    },
    {
      icon: RefreshCw,
      title: "Auto Backups",
      description: "Daily automated backups with one-click restore functionality.",
      color: "text-indigo-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">RyzeHosting</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Enterprise features at gamer-friendly prices
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;