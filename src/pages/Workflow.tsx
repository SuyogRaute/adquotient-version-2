import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";
import { FileText, Brain, CheckCircle, Rocket, Settings, BarChart3 } from "lucide-react";

const workflowSteps = [
  {
    step: 1,
    icon: <FileText className="w-8 h-8" />,
    title: "Campaign Brief Intake",
    description: "Share your objectives, target audience, budget, and KPIs. Our team works with you to understand your goals.",
    duration: "Day 1",
    color: "secondary",
  },
  {
    step: 2,
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Media Plan",
    description: "Our AI engine generates optimized media plans with channel mix, budget allocation, and reach projections.",
    duration: "Days 2-3",
    color: "accent",
  },
  {
    step: 3,
    icon: <CheckCircle className="w-8 h-8" />,
    title: "QA + Client Alignment",
    description: "Review the plan together, make adjustments, and finalize targeting, creatives, and scheduling.",
    duration: "Days 4-5",
    color: "secondary",
  },
  {
    step: 4,
    icon: <Rocket className="w-8 h-8" />,
    title: "Campaign Setup & Launch",
    description: "Technical setup, creative trafficking, and campaign launch across all selected channels.",
    duration: "Days 6-7",
    color: "accent",
  },
  {
    step: 5,
    icon: <Settings className="w-8 h-8" />,
    title: "Management & Optimization",
    description: "Continuous monitoring with real-time optimization to maximize performance against KPIs.",
    duration: "Ongoing",
    color: "secondary",
  },
  {
    step: 6,
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Reporting & Insights",
    description: "Comprehensive post-campaign analysis with actionable insights for future campaigns.",
    duration: "Post-Campaign",
    color: "accent",
  },
];

const Workflow = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Our Workflow
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              From Brief to{" "}
              <span className="text-gradient">Business Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A streamlined campaign lifecycle designed for efficiency,
              transparency, and maximum performance.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-dark relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Campaign Lifecycle"
            title="AdQuotient Roadmap"
            description="Our proven process ensures campaigns launch on time and perform above expectations."
          />

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-border">
              <div className="absolute inset-0 bg-gradient-primary opacity-50" />
            </div>

            <div className="grid grid-cols-6 gap-4">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step Number */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-display font-bold text-lg relative z-10 ${
                      step.color === "secondary"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {step.step}
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-6 text-center h-full">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                        step.color === "secondary"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="font-display font-semibold mb-2 text-sm">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mb-4">
                      {step.description}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs ${
                        step.color === "secondary"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {workflowSteps.map((step, index) => (
              <div
                key={step.step}
                className="flex gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number & Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0 ${
                      step.color === "secondary"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {step.step}
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 flex-1 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        step.color === "secondary"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">{step.title}</h3>
                      <span
                        className={`text-sm ${
                          step.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                        }`}
                      >
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Stats */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-4xl font-display font-bold text-secondary mb-2">
                7 Days
              </div>
              <div className="text-muted-foreground">Average Launch Time</div>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-4xl font-display font-bold text-accent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Campaign Monitoring</div>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="text-4xl font-display font-bold text-secondary mb-2">
                Real-Time
              </div>
              <div className="text-muted-foreground">Optimization</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Workflow;
