import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="text-gradient">Transform</span>{" "}
            Your Media Strategy?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with AdQuotient for unified access to premium inventory,
            AI-powered planning, and measurable results across every screen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Schedule a Demo
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" size="xl">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
