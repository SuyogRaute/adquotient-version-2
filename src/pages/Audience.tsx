import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";
import { Wallet, TrendingUp, MapPin, Film, Users } from "lucide-react";

const audienceTypes = [
  {
    icon: <Wallet className="w-6 h-6" />,
    category: "Finance Cohorts",
    description: "High-value financial audiences with demonstrated purchase intent.",
    segments: [
      { name: "Digital Wallet Users", reach: "15M+" },
      { name: "EMI Shoppers", reach: "10M+" },
      { name: "Stock/MF Investors", reach: "8M+" },
      { name: "Active Traders", reach: "3M+" },
    ],
    color: "secondary",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    category: "Online Behavior",
    description: "Audiences defined by their digital shopping and lifestyle patterns.",
    segments: [
      { name: "E-commerce Shoppers", reach: "25M+" },
      { name: "Quick Commerce Users", reach: "12M+" },
      { name: "Ride-hailing Users", reach: "18M+" },
      { name: "Food Delivery Users", reach: "20M+" },
    ],
    color: "accent",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    category: "Geographic / NCCS",
    description: "Location and socio-economic targeting for regional precision.",
    segments: [
      { name: "Metro Markets", reach: "Top 8 cities" },
      { name: "Tier 2 Cities", reach: "40+ cities" },
      { name: "NCCS A/B", reach: "Premium" },
      { name: "Regional Focus", reach: "State-wise" },
    ],
    color: "secondary",
  },
  {
    icon: <Film className="w-6 h-6" />,
    category: "Content Affinity",
    description: "Audiences grouped by their content consumption preferences.",
    segments: [
      { name: "Sports Enthusiasts", reach: "30M+" },
      { name: "GEC Viewers", reach: "40M+" },
      { name: "Regional Content", reach: "35M+" },
      { name: "News Followers", reach: "25M+" },
    ],
    color: "accent",
  },
];

const Audience = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Precision{" "}
              <span className="text-gradient">Targeting at Scale</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Access high-value audience segments across connected homes, digital platforms, and traditional TV with unmatched precision.
            </p>
          </div>
        </div>
      </section>

      {/* Audience Segments */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Audience Segments"
            title="Deep Segmentation Capabilities"
            description="Reach the right people with data-driven audience targeting."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {audienceTypes.map((type, index) => (
              <div
                key={type.category}
                className="glass rounded-3xl p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      type.color === "secondary"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-2">
                      {type.category}
                    </h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {type.segments.map((segment) => (
                    <div
                      key={segment.name}
                      className="bg-muted rounded-xl p-4"
                    >
                      <div className="text-sm text-muted-foreground mb-1">
                        {segment.name}
                      </div>
                      <div
                        className={`font-display font-bold ${
                          type.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                        }`}
                      >
                        {segment.reach}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Audiences */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Custom Audiences"
                title="Build Your Perfect Audience"
                centered={false}
              />
              <p className="text-muted-foreground text-lg mb-6">
                Combine multiple data signals to create custom audience segments
                tailored to your campaign objectives. Layer demographics,
                behaviors, geography, and content affinity for precision
                targeting.
              </p>
              <div className="flex items-center gap-4">
                <Users className="w-12 h-12 text-secondary" />
                <div>
                  <div className="text-3xl font-display font-bold text-gradient">
                    Unlimited
                  </div>
                  <div className="text-muted-foreground">Custom Segments</div>
                </div>
              </div>
            </div>
            <div className="glass rounded-3xl p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <span className="text-muted-foreground">Age + Income</span>
                  <span className="text-secondary">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <span className="text-muted-foreground">+ Purchase Behavior</span>
                  <span className="text-secondary">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <span className="text-muted-foreground">+ Content Interest</span>
                  <span className="text-secondary">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                  <span className="text-muted-foreground">+ Geographic Filter</span>
                  <span className="text-secondary">✓</span>
                </div>
                <div className="p-4 bg-gradient-primary rounded-xl text-center text-navy-deep font-semibold">
                  Custom Segment Created: 2.4M Users
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

export default Audience;