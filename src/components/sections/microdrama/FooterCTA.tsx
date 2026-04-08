import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const FooterCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative background with gradient glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-secondary/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[100px] bg-accent/5 blur-[80px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto glass p-10 md:p-20 rounded-[40px] border border-secondary/20 bg-gradient-glow text-center shadow-2xl shadow-secondary/5 group">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-secondary/10 text-secondary mb-8 group-hover:scale-110 transition-transform duration-500">
            <Sparkles className="w-8 h-8" />
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
             LET’S BUILD <br />
             <span className="text-secondary uppercase">Binge-Worthy</span> STORIES <br />
             FOR YOUR <span className="text-accent uppercase">BRAND</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            The next generation of brand storytelling is here. Don't let your narrative get lost in the noise. Join ADQ Stories and transform your presence today.
          </p>

          <a href="#contact">
            <Button variant="gradient" size="lg" className="h-16 px-12 text-xl font-bold rounded-2xl shadow-xl shadow-secondary/30 transition-all hover:scale-105 active:scale-95 group/btn">
              Get Started Now
              <ArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
            </Button>
          </a>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-xs font-bold tracking-widest uppercase">Premium Aesthetics</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-bold tracking-widest uppercase">AI-Driven Insights</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-xs font-bold tracking-widest uppercase">Viral Storytelling</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
