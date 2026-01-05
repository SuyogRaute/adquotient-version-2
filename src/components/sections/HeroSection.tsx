import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tv, Radio, Target, BarChart3 } from "lucide-react";
import CTV from "@/assets/ctv-hero-bg.png"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg pb-10">
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
                  Schedule a Demo
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            {/* <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div>
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
              </div>
            </div> */}
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
                  {/* Card 1: CTV & Linear */}
                  <div className="relative rounded-2xl p-6 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg">
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-30 transition-opacity duration-300">
                      <img
                        src={CTV}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="relative z-10 text-white flex flex-col h-full">
                      <Tv className="w-10 h-10 mb-4 drop-shadow-lg" />
                      <div className="mt-auto">
                        <div className="font-display font-bold text-xl mb-1">
                          CTV & Linear
                        </div>
                        <div className="text-sm opacity-90">Premium Reach</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Cross-Channel */}
                  <div className="relative bg-muted rounded-2xl p-6 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg">
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-15 transition-opacity duration-300">
                      <img
                        src={CTV}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="relative z-10 text-white flex flex-col h-full">
                      <Radio className="w-10 h-10 mb-4 drop-shadow-lg" />
                      <div className="mt-auto">
                        <div className="font-display font-bold text-xl mb-1">
                          Cross-Channel
                        </div>
                        <div className="text-sm opacity-90">Optimization</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Addressable Linear */}
                  <div className="relative bg-muted rounded-2xl p-6 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg">
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-15 transition-opacity duration-300">
                      <img
                        src={CTV}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="relative z-10 text-white flex flex-col h-full">
                      <Target className="w-10 h-10 mb-4 drop-shadow-lg" />
                      <div className="mt-auto">
                        <div className="font-display font-bold text-xl mb-1">
                          Addressable Linear
                        </div>
                        <div className="text-sm opacity-90">Precision Targeting</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: AI-Powered */}
                  <div className="relative bg-secondary/10 border border-secondary/30 rounded-2xl p-6 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg">
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-15 transition-opacity duration-300">
                      <img
                        src={CTV}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="relative z-10 text-white flex flex-col h-full">
                      <BarChart3 className="w-10 h-10 mb-4 drop-shadow-lg" />
                      <div className="mt-auto">
                        <div className="font-display font-bold text-xl mb-1">
                          AI-Powered
                        </div>
                        <div className="text-sm opacity-90">Media Planning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements
              <div className="absolute -top-6 -right-6 glass rounded-xl p-4    animate-float">
                <div className="text-xs text-muted-foreground mb-1">
                  Live Campaigns
                </div>
                <div className="text-xl font-display font-bold text-secondary">
                  247
                </div>
              </div> */}
              {/* <div
                className="absolute -bottom-6 -left-6 glass rounded-xl p-4 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-xs text-muted-foreground mb-1">
                  Avg. ROI
                </div>
                <div className="text-xl font-display font-bold text-accent">
                  3.8x
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
