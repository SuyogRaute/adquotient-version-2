import { SectionHeader } from "@/components/ui/section-header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Tv, Smartphone, ShoppingCart, Users, MapPin, Film, TrendingUp, Wallet, Globe } from "lucide-react";

const stats = [
  { value: "20M+", label: "Connected Homes", icon: <Home className="w-6 h-6" /> },
  { value: "21 mn", label: "DTH Homes", icon: <Tv className="w-6 h-6" /> },
  { value: "500 mn", label: "Mobile users", icon: <Smartphone className="w-6 h-6" /> },
  { value: "240 mn", label: "Online Shoppers", icon: <ShoppingCart className="w-6 h-6" /> },
  { value: "21 mn", label: "CTV HH", icon: <Tv className="w-6 h-6" /> },
  { value: "20 mn", label: "Cable TV HH", icon: <Tv className="w-6 h-6" /> },
];

const audienceTypes = [
  {
    category: "Finance Cohorts",
    icon: <Wallet className="w-6 h-6" />,
    segments: [
      { name: "Digital Wallet Users", reach: "15M+" },
      { name: "EMI Shoppers", reach: "10M+" },
      { name: "Stock/MF Investors", reach: "8M+" },
      { name: "Active Traders", reach: "3M+" },
    ],
    color: "secondary",
  },
  {
    category: "Online Behavior",
    icon: <TrendingUp className="w-6 h-6" />,
    segments: [
      { name: "E-commerce Shoppers", reach: "25M+" },
      { name: "Quick Commerce Users", reach: "12M+" },
      { name: "Ride-hailing Users", reach: "18M+" },
      { name: "Food Delivery Users", reach: "20M+" },
    ],
    color: "accent",
  },
  {
    category: "Geographic",
    icon: <MapPin className="w-6 h-6" />,
    segments: [
      { name: "Metro Markets", reach: "Top 8 cities" },
      { name: "Tier 2 Cities", reach: "40+ cities" },
      { name: "Regional Focus", reach: "State-wise" },
      { name: "NCCS Segmentation", reach: "Premium" },
    ],
    color: "secondary",
  },
  {
    category: "Content Affinity",
    icon: <Film className="w-6 h-6" />,
    segments: [
      { name: "Sports Enthusiasts", reach: "30M+" },
      { name: "GEC Viewers", reach: "40M+" },
      { name: "Regional Content", reach: "35M+" },
      { name: "News Followers", reach: "25M+" },
    ],
    color: "accent",
  },
];

export function AudienceSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          badge="Audience Reach"
          title="Precision Targeting at Scale"
          description="Access high-value audience segments across connected homes, digital platforms, and traditional TV."
        />

        {/* Stats Grid - Updated with new metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 bg-gradient-dark rounded-xl border border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Audience Segments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audienceTypes.map((type, index) => (
            <div
              key={type.category}
              className="glass rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${type.color === "secondary" ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-accent"}`}>
                  {type.icon}
                </div>
                <h3 className="font-display font-semibold text-lg">{type.category}</h3>
              </div>
              <div className="space-y-3">
                {type.segments.map((segment) => (
                  <div key={segment.name} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-sm font-medium">{segment.name}</div>
                    <div className={`text-sm font-bold ${type.color === "secondary" ? "text-secondary" : "text-accent"}`}>
                      {segment.reach}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/contact">
            <Button variant="gradient" size="lg">
              Schedule a Demo
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link to="/case-studies">
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}