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
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Case Studies
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Proven{" "}
              <span className="text-gradient">Results</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See how leading brands achieve exceptional outcomes with
              AdQuotient's unified media solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="glass rounded-3xl p-8 md:p-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left - Info */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.channels.map((channel) => (
                        <span
                          key={channel}
                          className={`px-3 py-1 rounded-full text-sm ${
                            study.color === "secondary"
                              ? "bg-secondary/10 text-secondary"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display text-3xl font-bold mb-2">
                      {study.client}
                    </h2>
                    <p className="text-muted-foreground mb-6">{study.industry}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">
                          Challenge
                        </h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-2">
                          Solution
                        </h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Results */}
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-6">
                      Results
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result) => (
                        <div
                          key={result.metric}
                          className="bg-muted rounded-2xl p-6"
                        >
                          <div className="text-sm text-muted-foreground mb-2">
                            {result.metric}
                          </div>
                          <div
                            className={`text-3xl font-display font-bold ${
                              study.color === "secondary"
                                ? "text-secondary"
                                : "text-accent"
                            }`}
                          >
                            {result.value}
                          </div>
                          {result.change && (
                            <div className="text-sm text-secondary mt-1 flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
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
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Aggregate Impact"
            title="Consistent Performance"
            description="Across all campaigns, we deliver measurable results."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-gradient mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Campaigns Delivered</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Target className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-gradient mb-2">
                3.8x
              </div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <BarChart3 className="w-8 h-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-gradient mb-2">
                87%
              </div>
              <div className="text-muted-foreground">Avg. Viewability</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-3xl font-display font-bold text-gradient mb-2">
                95%
              </div>
              <div className="text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default CaseStudies;
