import { SectionHeader } from "@/components/ui/section-header";
import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const samples = [
  {
    id: 1,
    title: "The Urban Hustle",
    duration: "1:45",
    category: "Metabolic Branding",
    thumbnail: "/sample-1.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Standard placeholder
  },
  {
    id: 2,
    title: "Grandma's Secret Recipe",
    duration: "2:30",
    category: "FMCG Storytelling",
    thumbnail: "/sample-2.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "AI Dreams of Mumbai",
    duration: "3:00",
    category: "Tech Narrative",
    thumbnail: "/sample-3.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const CaseStudy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % samples.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + samples.length) % samples.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          badge="In Production"
          title="See Our Stories in Action"
          description="High-octane, AI-enhanced narratives that capture millions of views."
          centered={true}
        />

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Video Player */}
            <div className="lg:col-span-8">
              <div className="aspect-video glass rounded-[40px] overflow-hidden border-4 border-white/5 shadow-2xl relative group">
                <iframe
                  src={samples[activeIndex].videoUrl}
                  title={samples[activeIndex].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Content List / Carousel Controls */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-2xl font-display font-bold">Latest Reels</h4>
                <div className="flex gap-2">
                  <button onClick={prev} className="p-3 bg-glass border border-white/10 rounded-full hover:bg-secondary/20 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={next} className="p-3 bg-glass border border-white/10 rounded-full hover:bg-secondary/20 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {samples.map((sample, index) => (
                <div
                  key={sample.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 border flex gap-4 items-center group ${
                    activeIndex === index 
                      ? "bg-glass border-secondary shadow-lg shadow-secondary/5 translate-x-2" 
                      : "bg-transparent border-white/5 hover:bg-white/5"
                  }`}
                >
                  <div className="w-20 h-20 bg-background rounded-2xl flex-shrink-0 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 z-0" />
                    <PlayCircle className={`w-8 h-8 z-10 transition-colors ${activeIndex === index ? "text-secondary" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-secondary block mb-1">
                      {sample.category}
                    </span>
                    <h5 className="font-display font-bold text-lg group-hover:text-secondary-foreground transition-colors">
                      {sample.title}
                    </h5>
                    <p className="text-xs text-muted-foreground">{sample.duration} Binge Duration</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
