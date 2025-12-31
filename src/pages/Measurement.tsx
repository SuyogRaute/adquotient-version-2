import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";
import { Eye, MousePointer, TrendingUp, MapPin, Shield, BarChart3, CheckCircle } from "lucide-react";

const metrics = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Viewability",
    description: "MRC-compliant viewability measurement across all channels.",
    value: "85%+",
    label: "Average Viewability",
  },
  {
    icon: <MousePointer className="w-6 h-6" />,
    title: "Engagement",
    description: "CTR, VTR, and interaction metrics for performance insights.",
    value: "2.5%",
    label: "Average CTR",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Reach & Frequency",
    description: "Deduplicated reach and optimized frequency across screens.",
    value: "Unified",
    label: "Cross-Screen View",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Geo & Device",
    description: "Geographic and device-level performance breakdowns.",
    value: "Granular",
    label: "Targeting Data",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Fraud Detection",
    description: "Invalid traffic filtration and brand safety monitoring.",
    value: "<2%",
    label: "IVT Rate",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Custom Dashboards",
    description: "Real-time dashboards tailored to your KPIs.",
    value: "Live",
    label: "Reporting",
  },
];

const accreditations = [
  { name: "IAB", description: "Interactive Advertising Bureau certified" },
  { name: "MRC", description: "Media Rating Council accredited" },
  { name: "BARC", description: "Broadcast Audience Research Council" },
];

const deliverables = [
  "Daily performance snapshots",
  "Weekly optimization reports",
  "Custom KPI dashboards",
  "Raw log access",
  "Playout proofs",
  "Post-campaign analysis",
  "Audience insights report",
  "Competitive benchmarking",
];

const Measurement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Measurement & Analytics
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Metrics That{" "}
              <span className="text-gradient">Matter</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Accredited, transparent measurement with real-time insights
              and comprehensive reporting you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 bg-gradient-dark border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {accreditations.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-navy-deep font-display font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-semibold">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Key Metrics"
            title="Complete Performance Visibility"
            description="Track what matters with industry-standard and custom metrics."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.title}
                className="glass rounded-2xl p-8 group hover:border-secondary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-navy-deep group-hover:scale-110 transition-transform">
                    {metric.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-display font-bold text-secondary">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {metric.title}
                </h3>
                <p className="text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="What You Get"
                title="Comprehensive Reporting"
                centered={false}
              />
              <p className="text-muted-foreground text-lg mb-8">
                Transparent, detailed reporting that gives you complete visibility
                into campaign performance. Access raw data, custom dashboards,
                and actionable insights.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8">
              <div className="bg-muted rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-sm text-muted-foreground ml-2">Live Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Impressions</span>
                    <span className="text-secondary font-mono">12.4M</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-primary rounded-full" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Reach</span>
                    <span className="text-accent font-mono">4.2M</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-accent rounded-full" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Viewability</span>
                    <span className="text-secondary font-mono">87%</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full w-[87%] bg-gradient-primary rounded-full" />
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

export default Measurement;
