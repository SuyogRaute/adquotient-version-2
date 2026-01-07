import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tv, Radio, Target, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
     <> 
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary text-sm font-medium">
                AI-Powered Media Intelligence
              </span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Unified Media,{" "}
              <span className="text-gradient">Amplified Impact</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Tech-driven AdSales & Media Planning Partner. Seamlessly connect
              Linear + Digital + CTV + Addressable with AI-powered precision.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Your Campaign
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/platform">
                <Button variant="outline" size="xl">
                  Explore Platform
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {/* <div>
                <div className="text-2xl font-display font-bold text-secondary">
                  20M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Connected Homes
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-accent">
                  21Mn
                </div>
                <div className="text-sm text-muted-foreground">DTH Homes</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-secondary">
                  500Mn
                </div>
                <div className="text-sm text-muted-foreground">
                  Mobile users
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-accent">
                  240Mn
                </div>
                <div className="text-sm text-muted-foreground">
                  Online Shoppers
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-accent">
                  21Mn
                </div>
                <div className="text-sm text-muted-foreground">
                  CTV HH
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-accent">
                  20Mn
                </div>
                <div className="text-sm text-muted-foreground">
                  Cable TV HH
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="relative lg:pl-12 animate-fade-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-3xl p-8 shadow-glow-teal">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-primary rounded-2xl p-6 text-navy-deep">
                    <Tv className="w-8 h-8 mb-4" />
                    <div className="font-display font-bold text-lg">
                      CTV & Linear
                    </div>
                    <div className="text-sm opacity-80">Premium Reach</div>
                  </div>
                  <div className="bg-muted rounded-2xl p-6">
                    <Radio className="w-8 h-8 mb-4 text-secondary" />
                    <div className="font-display font-bold text-lg">
                      Cross-Channel 
                    </div>
                    <div className="text-sm text-muted-foreground">
                     Optimization
                    </div>
                  </div>
                  <div className="bg-muted rounded-2xl p-6">
                    <Target className="w-8 h-8 mb-4 text-accent" />
                    <div className="font-display font-bold text-lg">
                      Addressable Linear
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Precision Targeting
                    </div>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-6">
                    <BarChart3 className="w-8 h-8 mb-4 text-secondary" />
                    <div className="font-display font-bold text-lg">
                      AI-Powered 
                    </div>
                    <div className="text-sm text-muted-foreground">
                     Media Planning
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements
              <div className="absolute -top-6 -right-6 glass rounded-xl p-4 animate-float">
                <div className="text-xs text-muted-foreground mb-1">
                  Live Campaigns
                </div>
                <div className="text-xl font-display font-bold text-secondary">
                  247
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 glass rounded-xl p-4 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-xs text-muted-foreground mb-1">
                  Avg. ROI
                </div>
                <div className="text-xl font-display font-bold text-accent">
                  3.8x
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    < section className = "relative py-20 overflow-hidden" >
      {/* Background Elements */ }
      < div className = "absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Powering{" "}
            <span className="text-gradient">High-Impact</span>{" "}
            Video & Display Creatives at Scale
          </h2>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering performance-driven creatives across CTV, Linear, Digital,
            and Addressable channels — optimized for reach, precision, and results.
          </p>
        </div>
      </section >
        </>
  );
}