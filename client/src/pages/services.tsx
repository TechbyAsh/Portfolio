import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const packages: Package[] = [
  {
    name: "Starter App",
    price: "$5,000",
    description: "Perfect for MVPs and simple applications",
    features: [
      "Custom UI/UX Design",
      "Basic App Features",
      "2 Platform Support (iOS & Android)",
      "1 Month Support",
      "Source Code Delivery",
    ],
  },
  {
    name: "Professional",
    price: "$10,000",
    description: "Ideal for businesses needing a robust solution",
    features: [
      "Advanced UI/UX Design",
      "Complex Features Integration",
      "Cross-platform Support",
      "3 Months Support",
      "API Integration",
      "Performance Optimization",
      "Source Code & Documentation",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications with specific requirements",
    features: [
      "Enterprise-grade Architecture",
      "Custom Feature Development",
      "Full Platform Support",
      "6 Months Support",
      "Advanced Security Features",
      "Scalability Planning",
      "Complete Documentation",
      "Team Training",
    ],
  },
];

const developmentProcess = [
  {
    title: "Discovery",
    description: "We'll discuss your vision, requirements, and objectives to ensure we're aligned on the project goals.",
    icon: "🎯",
  },
  {
    title: "Planning",
    description: "Detailed project planning, including timeline, milestones, and deliverables.",
    icon: "📋",
  },
  {
    title: "Design",
    description: "Creating beautiful, user-friendly interfaces that align with your brand.",
    icon: "🎨",
  },
  {
    title: "Development",
    description: "Bringing your app to life with clean, efficient code and regular progress updates.",
    icon: "👩🏾‍💻",
  },
  {
    title: "Testing",
    description: "Rigorous testing to ensure your app works flawlessly across all platforms.",
    icon: "🧪",
  },
  {
    title: "Launch",
    description: "Helping you launch your app and ensuring a smooth deployment.",
    icon: "🚀",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">
              Amazing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your app idea into reality with expert mobile development services
            tailored to your needs.
          </p>
        </motion.div>

        {/* Packages Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Investment Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`p-6 h-full flex flex-col ${
                  pkg.highlight 
                    ? "border-primary shadow-lg scale-105" 
                    : "border-border"
                }`}>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-4">{pkg.price}</div>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="text-primary">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className="w-full"
                    variant={pkg.highlight ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary together.
          </p>
          <Button size="lg" className="text-lg px-8">
            Schedule a Consultation
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
