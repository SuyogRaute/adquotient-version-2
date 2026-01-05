import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { Tv, Radio, Target, Brain, Users, LineChart, Layers, Shield } from "lucide-react";

const services = [
  {
  icon: <Tv className="w-6 h-6" />,
  title: "CTV & Digital Advertising",
  description: "High-impact video inventory on premium streaming platforms like Hulu and Roku with precise audience segmentation.",
},
  {
    icon: <Radio className="w-6 h-6" />,
    title: "Addressable Linear",
    description: "Household-level targeting on linear TV, combining the reach of broadcast with digital precision.",
  },
  // {
  //   icon: <Target className="w-6 h-6" />,
  //   title: "Linear (Cable/DTH)",
  //   description: "PAN India cable and DTH network access with optimized placement across GEC, Sports, and Regional channels.",
  // },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Planning",
    description: "Predictive planning engine that optimizes budget allocation and audience targeting in real-time.",
  },
  // {
  //   icon: <Users className="w-6 h-6" />,
  //   title: "Audience Intelligence",
  //   description: "Deep segmentation by finance cohorts, behavior, geography, and content affinity for precision targeting.",
  // },
  // {
  //   icon: <LineChart className="w-6 h-6" />,
  //   title: "Campaign Management",
  //   description: "End-to-end campaign orchestration from brief to insights with real-time optimization.",
  // },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Cross-Channel Optimization",
    description: "Unified cross-screen consistency eliminating channel fragmentation for maximum impact.",
  },
  // {
  //   icon: <Shield className="w-6 h-6" />,
  //   title: "Measurement & Analytics",
  //   description: "IAB/MRC/BARC accredited metrics with fraud detection and custom dashboards.",
  // },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-dark relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Services"
          title="Full-Stack Media Solutions"
          description="From planning to measurement, we power every stage of your advertising journey with intelligence and precision."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
