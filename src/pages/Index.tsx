import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/ui/section-header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import WHY from "@/assets/whyadquitent.png";

const whyChoose = [
  "Unified Linear + Digital + CTV + Addressable access",
  "AI-powered predictive planning engine",
  "PAN India premium inventory footprint",
  "Real-time performance optimization",
  "IAB/MRC/BARC accredited measurement",
  "No channel fragmentation—cross-screen consistency",
  "Professional Video & Display Creative Solutions.",
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Why Choose Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Why AdQuotient"
                title="The Smarter Way to Buy Media"
                description="We eliminate complexity, unify fragmented channels, and deliver AI-driven precision for maximum advertising impact."
                centered={false}
              />
              <ul className="space-y-1 mb-8">
                {whyChoose.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="gradient">
                  Learn More About Us
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass rounded-3xl p-8">
                <div className="aspect-video bg-gradient-primary rounded-2xl overflow-hidden">
                  <img
                    src={WHY}
                    alt="Campaign ROI Visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-secondary">500+</div>
                    <div className="text-xs text-muted-foreground">Campaigns Executed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-accent">100+</div>
                    <div className="text-xs text-muted-foreground">Brands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-secondary">50+</div>
                    <div className="text-xs text-muted-foreground">Publishers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <AudienceSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
