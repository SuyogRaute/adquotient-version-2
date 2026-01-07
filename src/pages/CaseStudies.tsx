import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, BarChart3 } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "Leading FMCG Brand",
    industry: "Consumer Goods",
    challenge: "Drive awareness for new product launch across multiple demographics while maintaining efficient CPM.",
    solution: "Cross-screen campaign combining CTV, Linear TV, and Digital video with AI-optimized budget allocation.",
    results: [
      { metric: "Reach", value: "45M", change: "+120%" },
      { metric: "Brand Recall", value: "78%", change: "+35%" },
      { metric: "CPM Efficiency", value: "₹45", change: "-28%" },
      { metric: "Campaign ROI", value: "4.2x", change: "" },
    ],
    channels: ["CTV", "Linear TV", "Digital Video"],
    color: "secondary",
  },
  {
    id: 2,
    client: "Premium Auto Manufacturer",
    industry: "Automotive",
    challenge: "Target high-net-worth individuals interested in luxury vehicles across connected and linear platforms.",
    solution: "Addressable TV campaign with finance cohort targeting and premium CTV inventory on lifestyle content.",
    results: [
      { metric: "Test Drives", value: "2,800", change: "+85%" },
      { metric: "Qualified Leads", value: "12K", change: "+156%" },
      { metric: "Cost Per Lead", value: "₹890", change: "-42%" },
      { metric: "Conversion Rate", value: "8.5%", change: "+3.2%" },
    ],
    channels: ["Addressable TV", "CTV", "OTT"],
    color: "accent",
  },
  {
    id: 3,
    client: "National Bank",
    industry: "Financial Services",
    challenge: "Promote new savings product to first-time investors while ensuring brand safety and compliance.",
    solution: "Targeted campaign using finance cohorts (stock traders, MF investors) with strict brand safety controls.",
    results: [
      { metric: "Account Opens", value: "18K", change: "+92%" },
      { metric: "AUM Generated", value: "₹450Cr", change: "" },
      { metric: "Viewability", value: "91%", change: "+18%" },
      { metric: "Brand Safety", value: "99.8%", change: "" },
    ],
    channels: ["CTV", "Digital", "Mobile"],
    color: "secondary",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Case Studies
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Proven{" "}
              <span className="text-gradient">Results</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
              See how leading brands achieve exceptional outcomes with
              AdQuotient's unified media solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                  {/* Left - Info */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {study.channels.map((channel) => (
                        <span
                          key={channel}
                          className={`px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                            study.color === "secondary"
                              ? "bg-secondary/10 text-secondary"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                      {study.client}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6">
                      {study.industry}
                    </p>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="font-semibold text-secondary mb-2 text-sm sm:text-base">
                          Challenge
                        </h4>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-2 text-sm sm:text-base">
                          Solution
                        </h4>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Results */}
                  <div className="mt-6 lg:mt-0">
                    <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">
                      Results
                    </h4>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {study.results.map((result) => (
                        <div
                          key={result.metric}
                          className="bg-muted rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6"
                        >
                          <div className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
                            {result.metric}
                          </div>
                          <div
                            className={`text-2xl sm:text-3xl font-display font-bold ${
                              study.color === "secondary"
                                ? "text-secondary"
                                : "text-accent"
                            }`}
                          >
                            {result.value}
                          </div>
                          {result.change && (
                            <div className="text-xs sm:text-sm text-secondary mt-1 flex items-center gap-1">
                              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                              {result.change}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Aggregate Impact"
            title="Consistent Performance"
            description="Across all campaigns, we deliver measurable results."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Campaigns Delivered
              </div>
            </div>
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1 sm:mb-2">
                3.8x
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Average ROI
              </div>
            </div>
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1 sm:mb-2">
                87%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Avg. Viewability
              </div>
            </div>
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-3 sm:mb-4" />
              <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1 sm:mb-2">
                95%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Client Retention
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CaseStudies;