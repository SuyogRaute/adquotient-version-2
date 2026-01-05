import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tv,
  Radio,
  Target,
  Brain,
  Users,
  LineChart,
  Layers,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
  icon: <Tv className="w-8 h-8" />,
  title: "CTV & Linear",
  description: "Unified video campaigns combining the scale of broadcast with the precision of digital streaming.",
  benefits: [
    "Direct access to 100+ top-tier networks",
    "Household-level precision targeting",
    "Real-time cross-device attribution",
    "High-engagement interactive overlays",
  ],
  color: "secondary",
},
  {
    icon: <Radio className="w-8 h-8" />,
    title: "Addressable Linear",
    description: "Household-level targeting on traditional TV with digital precision.",
    benefits: [
      "Precision at household level",
      "Dynamic ad insertion",
      "Geographic targeting",
      "Real-time optimization",
    ],
    color: "accent",
  },
  // {
  //   icon: <Target className="w-8 h-8" />,
  //   title: "Linear TV (Cable/DTH)",
  //   description: "PAN India cable and DTH network access for mass reach.",
  //   benefits: [
  //     "National & regional coverage",
  //     "GEC, Sports, News channels",
  //     "Prime-time placements",
  //     "Optimized spot selection",
  //   ],
  //   color: "secondary",
  // },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Media Planning",
    description: "Predictive planning engine for intelligent media decisions.",
    benefits: [
      "Automated budget optimization",
      "Predictive performance modeling",
      "Cross-channel allocation",
      "Real-time adjustments",
    ],
    color: "accent",
  },
  // {
  //   icon: <Users className="w-8 h-8" />,
  //   title: "Audience Intelligence",
  //   description: "Deep segmentation for precision targeting across screens.",
  //   benefits: [
  //     "Finance & behavior cohorts",
  //     "Geographic segmentation",
  //     "Content affinity mapping",
  //     "Custom audience creation",
  //   ],
  //   color: "secondary",
  // },
  // {
  //   icon: <LineChart className="w-8 h-8" />,
  //   title: "Campaign Management",
  //   description: "End-to-end campaign orchestration and optimization.",
  //   benefits: [
  //     "Dedicated account management",
  //     "24/7 campaign monitoring",
  //     "Creative optimization",
  //     "A/B testing capabilities",
  //   ],
  //   color: "accent",
  // },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Cross-Channel Optimization",
    description: "Unified strategy across all screens for consistent impact.",
    benefits: [
      "Single dashboard view",
      "Unified frequency capping",
      "Cross-screen attribution",
      "Holistic reporting",
    ],
    color: "secondary",
  },
  // {
  //   icon: <Shield className="w-8 h-8" />,
  //   title: "Measurement & Analytics",
  //   description: "IAB/MRC/BARC accredited measurement with fraud detection.",
  //   benefits: [
  //     "Viewability metrics",
  //     "Fraud detection",
  //     "Custom dashboards",
  //     "Raw log access",
  //   ],
  //   color: "accent",
  // },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Full-Stack{" "}
              <span className="text-gradient">Media Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From planning to measurement, we power every stage of your
              advertising journey with intelligence and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                      service.color === "secondary"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle
                          className={`w-5 h-5 flex-shrink-0 ${
                            service.color === "secondary"
                              ? "text-secondary"
                              : "text-accent"
                          }`}
                        />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="gradient">
                      Get Started
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="glass rounded-3xl p-8 aspect-square flex items-center justify-center">
                    <div
                      className={`w-32 h-32 rounded-3xl flex items-center justify-center ${
                        service.color === "secondary"
                          ? "bg-gradient-primary"
                          : "bg-accent"
                      } text-navy-deep`}
                    >
                      <div className="scale-150">{service.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;
