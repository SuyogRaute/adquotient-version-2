import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tv, Radio, Target, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden hero-bg py-16 sm:py-20 md:py-0">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/10 border border-secondary/20 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-secondary text-xs sm:text-sm font-medium">
                  AI-Powered Media Intelligence
                </span>
              </div>

              <h1
                className="font-display text-[1.75rem] leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Unified Media,{" "}
                <span className="text-gradient">Amplified Impact</span>
              </h1>

              <p
                className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Tech-driven AdSales & Media Planning Partner. Seamlessly connect
                Linear + Digital + CTV + Addressable with AI-powered precision.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in pt-2 pb-6 sm:pb-8"
                style={{ animationDelay: "0.3s" }}
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto text-sm sm:text-base">
                    Start Your Campaign
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Link to="/platform" className="w-full sm:w-auto">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto text-sm sm:text-base">
                    Explore Platform
                  </Button>
                </Link>
              </div>

              {/* Quick Stats - Hidden on mobile since commented out */}
              <div
                className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                {/* Stats content commented out in original */}
              </div>
            </div>

            {/* Right Visual */}
            <div
              className="relative lg:pl-12 animate-fade-in-right mt-0 sm:mt-8 lg:mt-0"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                {/* Main Card */}
                <div className="glass rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-glow-teal">
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                    <div className="bg-gradient-primary rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-navy-deep">
                      <Tv className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-2 sm:mb-3 md:mb-4" />
                      <div className="font-display font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                        CTV & Linear
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm opacity-80 mt-0.5 sm:mt-1">
                        Premium Reach
                      </div>
                    </div>
                    <div className="bg-muted rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6">
                      <Radio className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-2 sm:mb-3 md:mb-4 text-secondary" />
                      <div className="font-display font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                        Cross-Channel
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                        Optimization
                      </div>
                    </div>
                    <div className="bg-muted rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-2 sm:mb-3 md:mb-4 text-accent" />
                      <div className="font-display font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                        Addressable Linear
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                        Precision Targeting
                      </div>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/30 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6">
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mb-2 sm:mb-3 md:mb-4 text-secondary" />
                      <div className="font-display font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                        AI-Powered
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                        Media Planning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
            Powering{" "}
            <span className="text-gradient">High-Impact</span>{" "}
            Video & Display Creatives at Scale
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Delivering performance-driven creatives across CTV, Linear, Digital,
            and Addressable channels — optimized for reach, precision, and results.
          </p>
        </div>
      </section>
    </>
  );
}