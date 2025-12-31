import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";
import { Brain, Layers, LineChart, Zap, Eye, Settings, CheckCircle } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Predictive Planning",
    description: "AI models forecast campaign performance before launch, optimizing for your KPIs.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Cross-Screen Unification",
    description: "Single view of inventory across Linear, CTV, Digital, and Addressable channels.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Budget Optimization",
    description: "Intelligent allocation engine maximizes ROI across channels in real-time.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-Time Monitoring",
    description: "Live dashboards showing campaign performance with instant alerts.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Audience Insights",
    description: "Deep behavioral and demographic insights for precision targeting.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Automated Workflows",
    description: "From brief intake to reporting, streamlined processes save time.",
  },
];

const capabilities = [
  "Multi-touch attribution modeling",
  "Incremental reach optimization",
  "Frequency capping across screens",
  "Competitor benchmarking",
  "Seasonal trend analysis",
  "Custom KPI tracking",
  "Automated bid management",
  "Creative performance insights",
];

const Platform = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                Our Platform
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                AI-Powered{" "}
                <span className="text-gradient">Intelligence Layer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our proprietary planning engine uses machine learning to predict,
                optimize, and measure campaign performance across every channel.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Machine Learning", "Predictive Analytics", "Real-Time Data", "Unified View"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-3xl p-8 shadow-glow-teal">
                <div className="bg-muted rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-border rounded w-3/4" />
                    <div className="h-4 bg-border rounded w-1/2" />
                    <div className="h-8 bg-gradient-primary rounded-lg w-full" />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-16 bg-secondary/20 rounded" />
                      <div className="h-16 bg-accent/20 rounded" />
                      <div className="h-16 bg-secondary/20 rounded" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  AI Planning Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Platform Features"
            title="Built for Performance"
            description="Every feature designed to maximize your advertising impact."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass rounded-2xl p-8 group hover:border-secondary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 text-navy-deep group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Advanced Capabilities"
                title="Enterprise-Grade Intelligence"
                centered={false}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Prediction Accuracy</span>
                    <span className="text-secondary font-medium">94%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-gradient-primary rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Optimization Speed</span>
                    <span className="text-accent font-medium">Real-time</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-full bg-accent rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Cross-Channel Coverage</span>
                    <span className="text-secondary font-medium">100%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Platform;
