import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const MicrodramaHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-7 overflow-hidden">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img
          src="/microdrama-hero.webp"
          alt="Cinematic Storytelling"
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-secondary text-xs font-semibold tracking-wider uppercase">
              Introducing ADQ Stories
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            We don’t create content.<br />
            <span className="text-gradient">We create stories people binge.</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-xl animate-slide-up animation-delay-200">
            AI-powered storytelling for brands & platforms. Transform your audience into a community of dedicated fans through high-impact, short-form fictional narratives.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
            <a href="#contact">
              <Button variant="gradient" size="lg" className="h-14 px-8 text-lg group">
                Start Your Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-secondary/50 hover:bg-secondary/10">
                Partner With Us
                <Play className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-secondary to-transparent" />
      </div>
    </section>
  );
};
