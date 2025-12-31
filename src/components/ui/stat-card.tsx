interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="glass rounded-2xl p-6 text-center group hover:border-secondary/50 transition-all duration-300">
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
        {value}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}
