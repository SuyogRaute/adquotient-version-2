import { SectionHeader } from "@/components/ui/section-header";
import { Globe2, TrendingUp, Cpu, Lightbulb } from "lucide-react";

const marketInsights = [
  {
    icon: <Globe2 className="w-8 h-8 text-secondary" />,
    title: "Vernacular First",
    description: "Reaching the next 500 million internet users with local language storytelling.",
    stat: "70% Reach"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "Consumption Boom",
    description: "India averages 3.5+ hours on social media daily, with a thirst for new video formats.",
    stat: "120% YoY"
  },
  {
    icon: <Cpu className="w-8 h-8 text-secondary" />,
    title: "AI Cost Efficiency",
    description: "Removing the high barrier of entry for cinematic content with 10x faster production.",
    stat: "90% Cheaper"
  }
];

export const IndiaMarket = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          badge="Global Opportunity"
          title="Why India is the Perfect Market"
          description="The convergence of short-form addiction and AI capabilities creates a $10B opportunity in micro-content."
          centered={true}
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {marketInsights.map((item, index) => (
            <div
              key={item.title}
              className="glass p-10 rounded-3xl group border-2 border-transparent hover:border-secondary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/5 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-background rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  {item.icon}
                </div>
                <span className="text-secondary font-display font-bold text-lg opacity-60">
                  {item.stat}
                </span>
              </div>
              <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-secondary-foreground transition-colors">
                {item.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-base">
                {item.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-secondary font-semibold text-sm cursor-pointer whitespace-nowrap">
                Explore Market Data <TrendingUp className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Infographic visualization placeholder */}
        <div className="mt-20 max-w-4xl mx-auto glass p-8 rounded-3xl border border-secondary/10 text-center animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-gradient mb-2">500M+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Smartphone Users</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-gradient mb-2">45Min</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Avg Daily Short-Video Session</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-gradient mb-2">9/10</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Ads are now Video-first</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
