import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";
import {
  Tv,
  Radio,
  Smartphone,
  Monitor,
  Home,
  ShoppingCart,
} from "lucide-react";

const inventoryCategories = [
  {
    icon: <Tv className="w-8 h-8" />,
    title: "CTV & Digital",
    description:
      "Premium connected TV and digital video inventory across major platforms.",
    metrics: ["100+ Publishers", "HD & 4K Quality", "Interactive Formats"],
    color: "secondary",
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: "Addressable Linear",
    description: "Household-level targeting on traditional TV infrastructure.",
    metrics: ["20M+ Homes", "Dynamic Insertion", "Geographic Precision"],
    color: "accent",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Linear (Cable/DTH)",
    description: "PAN India cable and DTH network access for mass reach.",
    metrics: ["National Coverage", "Prime-time Slots", "Regional Options"],
    color: "secondary",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "OTT Publishers",
    description: "Top streaming platforms with engaged audiences.",
    metrics: ["Binge Viewers", "Exclusive Content", "High Completion"],
    color: "accent",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Jio Connected Homes",
    description: "Access to India's largest connected home ecosystem.",
    metrics: ["20M+ Homes", "Family Audiences", "Smart TV Ready"],
    color: "secondary",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Commerce Inventory",
    description: "Mobile and online commerce touchpoints for purchase intent.",
    metrics: ["High Intent", "Purchase Journey", "Retargeting Ready"],
    color: "accent",
  },
];

const highlights = [
  { value: "20M+", label: "Connected Homes" },
  { value: "21M", label: "DTH Homes" },
  { value: "500M", label: "Mobile Users" },
  { value: "240M", label: "Online Shoppers" },
  { value: "21M", label: "CTV Households" },
  { value: "20M", label: "Cable TV Households" },
];
const Inventory = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Premium Inventory
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Access <span className="text-gradient">Premium Inventory</span>{" "}
              Across India
            </h1>
            <p className="text-xl text-muted-foreground">
              Unified access to Linear, Digital, CTV, and Addressable inventory
              through exclusive publisher partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-dark border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Inventory Categories"
            title="Complete Media Coverage"
            description="Premium placements across every screen and platform."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inventoryCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass rounded-3xl p-8 group hover:border-secondary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    category.color === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.metrics.map((metric) => (
                    <div
                      key={metric}
                      className={`inline-block mr-2 mb-2 px-3 py-1 rounded-full text-sm ${
                        category.color === "secondary"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Premium Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              badge="Why Premium Matters"
              title="Quality Over Quantity"
              description="Our inventory is carefully curated to ensure brand safety, high viewability, and genuine engagement."
            />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="glass rounded-2xl p-6">
                <div className="text-4xl font-display font-bold text-secondary mb-2">
                  98%
                </div>
                <div className="text-muted-foreground">Brand Safe</div>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="text-4xl font-display font-bold text-accent mb-2">
                  85%+
                </div>
                <div className="text-muted-foreground">Viewability</div>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="text-4xl font-display font-bold text-secondary mb-2">
                  &lt;2%
                </div>
                <div className="text-muted-foreground">Invalid Traffic</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Inventory;
