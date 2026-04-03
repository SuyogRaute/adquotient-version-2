import { SectionHeader } from "@/components/ui/section-header";
import { Users, Building, PlayCircle, ShieldCheck } from "lucide-react";

const formats = [
  {
    title: "Family Drama",
    description: "Heartfelt, relatable stories focusing on the dynamics of modern Indian households.",
    image: "/format-family.webp", // Image placeholder
    tag: "High Emotional Engagement",
    features: ["Grandparents vs. Gen Z", "Wedding Humor", "Emotional Bonds"]
  },
  {
    title: "Urban Relatable",
    description: "Fast-paced stories highlighting the daily hustle, love, and struggles of city life.",
    image: "/format-urban.webp", // Image placeholder
    tag: "Young Audience Magnet",
    features: ["Office Life", "Modern Dating", "Flatmate Diaries"]
  },
  {
    title: "Moral Twists",
    description: "Thought-provoking narratives that challenge perceptions with unexpected endings.",
    image: "/format-moral.webp", // Image placeholder
    tag: "High Viral Potential",
    features: ["Social Justice", "Karmic Justice", "Hidden Truths"]
  },
  {
    title: "Crime / Suspense",
    description: "Grit-filled, edge-of-the-seat thrillers designed for high binge-ability.",
    image: "/format-crime.webp", // Image placeholder
    tag: "Binge-worthy Content",
    features: ["Mystery Unveiling", "Cyber Crime", "Secret Investigations"]
  }
];

export const ContentFormats = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          badge="Storytelling Catalog"
          title="Winning Content Formats"
          description="We've cracked the code on what drives retention across diverse audiences."
          centered={true}
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {formats.map((format, index) => (
            <div
              key={format.title}
              className="group relative overflow-hidden rounded-[32px] glass-strong border border-white/10 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail Placeholder */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-secondary/10 group-hover:scale-110 transition-transform duration-700">
                  <img
                    src={format.image}
                    alt={format.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Overlay icon to give it a "play" feel */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-500">
                    <PlayCircle className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground mb-3 uppercase tracking-widest">
                    {format.tag}
                  </span>
                  <h4 className="text-2xl font-display font-bold mb-2 text-white">{format.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {format.description}
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {format.features.map(f => (
                      <span key={f} className="text-[10px] px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
