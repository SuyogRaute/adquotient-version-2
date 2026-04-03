import { SectionHeader } from "@/components/ui/section-header";
import { Sparkles, Image as ImageIcon, Mic2, Film, ArrowRight } from "lucide-react";
import { useState } from "react";

const stackItems = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "1. The AI Narrative Engine",
    description: "Deep-learning models trained on cinematic tropes and emotional hooks to generate high-retention script structures.",
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "2. Generative Visuals",
    description: "Diffusion-based aesthetic styles that provide a consistent, cinematic look and feel for every frame.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: "3. Synthetic Voice",
    description: "Multilingual AI voice cloning that captures nuanced human inflection, dialect, and emotional resonance.",
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "4. Automated Assembly",
    description: "AI-driven editing and pacing that optimizes for viewer engagement metrics across social and OTT platforms.",
    color: "text-accent",
    bg: "bg-accent/10"
  }
];

export const AIStack = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          badge="Technological Superiority"
          title="Our Proprietary AI Stack"
          description="How we turn a prompt into a cinematic experience in record time."
          centered={true}
        />

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Steps */}
          <div className="space-y-4">
            {stackItems.map((item, index) => (
              <div
                key={item.title}
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 border ${
                  activeStep === index 
                    ? "bg-glass border-secondary shadow-xl shadow-secondary/10 translate-x-4" 
                    : "bg-transparent border-white/5 hover:bg-white/5"
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex gap-6 items-start">
                  <div className={`p-4 rounded-xl flex-shrink-0 ${item.bg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">{item.title}</h4>
                    <p className={`text-muted-foreground leading-relaxed transition-all duration-300 ${
                      activeStep === index ? "opacity-100 max-h-40" : "opacity-60 max-h-0 md:max-h-20"
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Representation */}
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute inset-0 bg-gradient-glow rounded-[40px] opacity-20 animate-pulse" />
            <div className="glass h-full rounded-[40px] p-12 relative flex flex-col justify-center items-center overflow-hidden border border-white/10">
              <div className="absolute top-0 left-0 p-8">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-ping mb-2" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">ADQ Processing...</span>
              </div>
              
              <div className="relative group perspective-1000">
                {/* Visual changing based on activeStep */}
                <div className="w-80 h-80 bg-background rounded-3xl flex items-center justify-center p-12 transition-transform duration-700 group-hover:rotate-y-12">
                   {stackItems[activeStep].icon}
                   <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl animate-spin-slow" />
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-3xl font-display font-bold mb-2">{stackItems[activeStep].title.split('.')[1]}</h3>
                <p className="text-secondary font-bold text-sm tracking-widest uppercase">Currently Optimizing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex border border-white/10 rounded-full p-1 bg-glass">
            {stackItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-4 h-4 rounded-full mx-2 transition-all ${
                  activeStep === index ? "bg-secondary scale-125" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
