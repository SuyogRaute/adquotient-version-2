import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tv, Radio, Target, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <> 
      <section className="relative min-h-screen flex items-center overflow-hidden hero-bg py-16 sm:py-20 md:py-0">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/10 border border-secondary/20 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-secondary text-xs sm:text-sm font-medium">
                  AI-Powered Media Intelligence
                </span>
              </div>

              <h1
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                Unified Media,{" "}
                <span className="text-gradient">Amplified Impact</span>
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Tech-driven AdSales & Media Planning Partner. Seamlessly connect
                Linear + Digital + CTV + Addressable with AI-powered precision.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Start Your Campaign
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </Link>
                <Link to="/platform" className="w-full sm:w-auto">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
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
              className="relative lg:pl-12 animate-fade-in-right mt-8 lg:mt-0"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                {/* Main Card */}
                <div className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-glow-teal">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gradient-primary rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-navy-deep">
                      <Tv className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3 sm:mb-4" />
                      <div className="font-display font-bold text-sm sm:text-base md:text-lg">
                        CTV & Linear
                      </div>
                      <div className="text-xs sm:text-sm opacity-80">Premium Reach</div>
                    </div>
                    <div className="bg-muted rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                      <Radio className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3 sm:mb-4 text-secondary" />
                      <div className="font-display font-bold text-sm sm:text-base md:text-lg">
                        Cross-Channel 
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Optimization
                      </div>
                    </div>
                    <div className="bg-muted rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                      <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3 sm:mb-4 text-accent" />
                      <div className="font-display font-bold text-sm sm:text-base md:text-lg">
                        Addressable Linear
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        Precision Targeting
                      </div>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                      <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3 sm:mb-4 text-secondary" />
                      <div className="font-display font-bold text-sm sm:text-base md:text-lg">
                        AI-Powered 
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
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