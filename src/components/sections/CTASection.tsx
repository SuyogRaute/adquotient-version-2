import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to{" "}
            <span className="text-gradient">Transform</span>{" "}
            Your Media Strategy?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Partner with AdQuotient for unified access to premium inventory,
            AI-powered planning, and measurable results across every screen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Schedule a Demo
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Link to="/case-studies" className="w-full sm:w-auto">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}