import { SectionHeader } from "@/components/ui/section-header";
import { DollarSign, Rocket, Users, Handshake, Video } from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="w-10 h-10 text-secondary" />,
    title: "Brand Integrations",
    description: "Seamlessly embed your brand or products into the narrative flow of popular stories.",
    points: ["Organic Sentiment", "Product Placements", "Brand-Centric Narratives"]
  },
  {
    icon: <Rocket className="w-10 h-10 text-accent" />,
    title: "OTT Licensing",
    description: "We license our high-production microdramas to streaming platforms looking for short-form content.",
    points: ["Original IP Creation", "Exclusive Licensing", "Regional Audiences"]
  },
  {
    icon: <Users className="w-10 h-10 text-secondary" />,
    title: "Creator Partnerships",
    description: "Empowering creators with AI tools to build their own storytelling empires.",
    points: ["Collaborative Content", "Shared Revenue", "Massive Audience Reach"]
  }
];

export const EnablesSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          badge="Value Proposition"
          title="What ADQ Stories Enables"
          description="Transforming storytelling into a scalable, high-yielding business asset."
          centered={true}
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass p-10 rounded-3xl border border-white/5 hover:border-secondary/20 transition-all duration-300 group shadow-lg hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8 p-6 bg-background rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-inner">
                {benefit.icon}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">{benefit.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {benefit.description}
              </p>
              
              <ul className="space-y-4">
                {benefit.points.map(p => (
                  <li key={p} className="flex items-center gap-3 text-sm font-semibold text-secondary-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Partnership Callout */}
        <div className="mt-20 glass p-10 rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/5 to-transparent flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <Handshake className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold">Ready to Partner With Us?</h3>
              <p className="text-muted-foreground">Unlock the power of AI-driven narratives for your brand today.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-2xl hover:bg-accent/80 transition-colors whitespace-nowrap shadow-xl shadow-accent/20">
            Explore Partnerships
          </button>
        </div>
      </div>
    </section>
  );
};
