export const Positioning = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Cinematic grid background effect */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4 animate-fade-in">
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">
              Brand Philosophy
            </span>
          </div>
          
          <h2 className="font-display text-4xl md:text-7xl font-black leading-tight tracking-tight animate-slide-up">
            WE ARE AN <br />
            <span className="text-accent">AI-FIRST</span> <br />
            STORYTELLING STUDIO
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
          
          <p className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed max-w-4xl mx-auto italic animate-slide-up animation-delay-200">
            "Content informs, but stories transform. We leverage pre-cognitive AI to understand what hooks the human heart, before we even write the first word."
          </p>

          <blockquote className="border-l-4 border-secondary pl-8 py-4 text-left max-w-2xl mx-auto bg-glass p-8 rounded-r-3xl animate-fade-in animation-delay-300">
            <p className="text-lg text-muted-foreground mb-4">
              "In a world of infinite scrolls, the only signal that cuts through the noise is emotion. Our positioning as an AI-first studio is not about replacing humans, but amplifying the human spirit through technology."
            </p>
            <footer className="text-secondary font-bold">— The ADQ Stories Manifesto</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
