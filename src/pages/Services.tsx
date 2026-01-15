import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTV_SERVICE_IMG from "@/assets/ctv-service.png";
import ADRESSABLE_SERVICE_IMG from "@/assets/adressable-service.png";
import CCO from "@/assets/cross-ch-op-service.png";
import APMP from "@/assets/ai-powerd-media-planing -service.png";
import SFV from "@/assets/short -video-service.png";
import {
  Tv,
  Radio,
  Brain,
  Layers,
  ArrowRight,
  CheckCircle,
  Film,
  LayoutGrid,
  Smartphone,
  Sparkles,
  Video,
  Zap,
  ChevronDown,
} from "lucide-react";


const services = [
  {
    icon: <Tv className="w-8 h-8" />,
    image: CTV_SERVICE_IMG,
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
    image: ADRESSABLE_SERVICE_IMG,
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
  {
    icon: <Brain className="w-8 h-8" />,
    image: APMP,
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
  {
    icon: <Layers className="w-8 h-8" />,
    image: CCO,
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
  {
    icon: <Video className="w-8 h-8" />,
    image: SFV,
    title: "Short-Form Social Videos",
    description:
      "Scroll-stopping short-form content designed to capture attention instantly and drive retention.",
    benefits: [
      "Reels, Shorts & micro-stories",
      "Hook-first storytelling",
      "Optimized for vertical viewing",
      "High-retention formats",
    ],
    color: "secondary",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    image: "",
    title: "Performance-Driven Ad Creatives",
    description:
      "High-conversion ad creatives engineered with strong hooks, clear messaging, and compelling CTAs.",
    benefits: [
      "Conversion-focused messaging",
      "A/B-ready creative variants",
      "Strong hooks & CTAs",
      "Designed for paid performance",
    ],
    color: "accent",
  },
  {
    icon: <Film className="w-8 h-8" />,
    image: "",
    title: "Brand Films & Product Stories",
    description:
      "Cinematic brand films, explainers, and product demos that build trust and drive brand recall.",
    benefits: [
      "Brand films & launch videos",
      "Explainers & product demos",
      "Narrative-led storytelling",
      "High production value",
    ],
    color: "secondary",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    image: "",
    title: "Motion Graphics & Animation",
    description:
      "Dynamic motion graphics and animated typography that elevate storytelling and engagement.",
    benefits: [
      "Animated typography",
      "Motion-led storytelling",
      "Visual emphasis on key messages",
      "Lightweight & scalable assets",
    ],
    color: "accent",
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    image: "",
    title: "Platform-Optimized Edits",
    description:
      "Creatives tailored for every platform to ensure maximum performance and native viewing experience.",
    benefits: [
      "Meta, YouTube & LinkedIn optimized",
      "OTT & CTV-ready formats",
      "Aspect-ratio specific edits",
      "Platform-native storytelling",
    ],
    color: "secondary",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    image: "",
    title: "Device-Specific Creative Design",
    description:
      "Designs optimized for mobile, desktop, TV, and connected screens to ensure visual clarity and impact.",
    benefits: [
      "Mobile-first design approach",
      "CTV & large-screen optimization",
      "Responsive creative layouts",
      "Consistent brand experience",
    ],
    color: "accent",
  },

];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative service-bg overflow-hidden min-h-screen flex items-center">
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

        {/* ✅ Scroll Hint */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
          <ChevronDown className="h-8 w-8 text-secondary animate-bounce opacity-80" />
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${service.color === "secondary"
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
                          className={`w-5 h-5 flex-shrink-0 ${service.color === "secondary"
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
                  <div className="glass rounded-3xl p-2 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-2xl aspect-square"
                    />
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