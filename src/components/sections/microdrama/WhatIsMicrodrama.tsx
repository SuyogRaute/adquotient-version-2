import { SectionHeader } from "@/components/ui/section-header";
import { Zap, Heart, Timer, Layers } from "lucide-react";

const highlights = [
  {
    icon: <Heart className="w-8 h-8 text-secondary" />,
    title: "Emotion-Driven",
    description: "Stories crafted to resonate deeply with human emotions and values.",
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Hook in 3 Sec",
    description: "Captivate attention instantly with powerful visual and narrative openers.",
  },
  {
    icon: <Timer className="w-8 h-8 text-secondary" />,
    title: "Bite-Sized",
    description: "Engaging 30-second to 3-minute clips perfect for modern attention spans.",
  },
  {
    icon: <Layers className="w-8 h-8 text-accent" />,
    title: "Episodic Hooks",
    description: "Strategic cliffhangers that keep your audience coming back for more.",
  },
];

export const WhatIsMicrodrama = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <SectionHeader
              badge="The Strategy"
              title="What Are AI Microdramas?"
              description="Microdramas are high-production, AI-enhanced short-form fictional stories designed to hook, engage, and convert."
              centered={false}
            />
            
            <div className="space-y-6 mt-12 bg-glass p-8 rounded-3xl border border-secondary/10">
              <h3 className="text-2xl font-display font-bold text-gradient">Category Creation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're not just making videos; we're creating a new storytelling category. By combining AI efficiency with human narrative depth, we deliver episodic content that feels like a Netflix series in the palm of your hand.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-secondary/30 transition-all duration-300 group hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 bg-background/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
