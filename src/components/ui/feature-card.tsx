import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass rounded-2xl p-8 group hover:border-secondary/50 hover:shadow-glow-teal transition-all duration-500">
      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 text-navy-deep group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
