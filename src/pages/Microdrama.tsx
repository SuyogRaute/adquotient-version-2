import { Layout } from "@/components/layout/Layout";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight, Play, Zap, Heart, Globe2, TrendingUp, Cpu,
  Sparkles, ImageIcon, Mic2, Film, MessageCircle, Send, CheckCircle2,
  PlayCircle, DollarSign, Rocket, Users
} from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

// --- Custom Auto-Scroll Hook (Applied only to Sample Work Carousel) ---
const useAutoScroll = (intervalMs = 4000) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollNext = useCallback(() => {
    if (!scrollRef.current || isPaused) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollWidth <= clientWidth) return;

    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || clientWidth;
    let nextScroll = scrollLeft + cardWidth + 16;
    if (nextScroll >= scrollWidth - clientWidth) nextScroll = 0;

    scrollRef.current.scrollTo({ left: nextScroll, behavior: "smooth" });
  }, [isPaused]);

  useEffect(() => {
    const timer = setInterval(scrollNext, intervalMs);
    return () => clearInterval(timer);
  }, [scrollNext, intervalMs]);

  return { scrollRef, pause: () => setIsPaused(true), resume: () => setIsPaused(false) };
};

const Hero = () => (
  <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center pt-7 pb-12 overflow-hidden bg-black">
    <div className="absolute inset-0 z-0 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
      <img src="/microdrama-hero.webp" alt="AI Microdrama Hero" className="w-full h-full object-cover opacity-60 scale-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
    </div>
    <div className="container mx-auto px-4 lg:px-8 relative z-20">
      <div className="max-w-3xl space-y-4 md:space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-yellow-500 text-[10px] font-bold tracking-widest uppercase">ADQ Stories — AI First Studio</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-black leading-tight animate-slide-up text-white">
          We don't create content.<br />
          <span className="text-yellow-500 text-gradient">We create stories people binge.</span>
        </h1>
        <p className="text-sm sm:text-lg text-white/50 max-w-xl animate-slide-up animation-delay-200">
          AI-powered storytelling for brands and platforms. High-impact narratives crafted to convert passive viewers into active loyalists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <a href="#contact" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black h-12 md:h-14 px-8 text-base font-bold rounded-xl group transition-all">
              Start Your Story <ArrowRight className="ml-2 group-hover:translate-x-1" />
            </Button>
          </a>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-8 text-base font-bold bg-white/5 hover:bg-white/10 text-white border-white/10 rounded-xl transition-all">
              Partner With Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const Section2_Definition = () => (
  <section className="py-12 md:py-20 bg-black">
    <div className="container mx-auto px-4 lg:px-8 text-center md:text-left mb-10">
      <p className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">THE FORMAT</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">What Are <span className="text-yellow-500">AI Microdramas</span>?</h2>
      <p className="text-white/40 text-sm md:text-base max-w-2xl">Cinematic stories powered by AI — crafted to hook, hold, and convert.</p>
    </div>
    <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl">
      {[
        { icon: <Timer className="w-6 h-6" />, t: "30 Sec to 3 Min", d: "Highly efficient storytelling for short-form mobile audiences." },
        { icon: <Heart className="w-6 h-6" />, t: "Emotion Driven", d: "Resonating instantly through human narratives." },
        { icon: <Zap className="w-6 h-6" />, t: "Instant Hook", d: "The first 3 seconds define the viewer's journey." },
        { icon: <Layers className="w-6 h-6" />, t: "Scalable IP", d: "Episodic cliffhangers that keep them coming back." }
      ].map((it, i) => (
        <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-yellow-500/20 transition-all shadow-xl">
          <div className="mb-4 text-yellow-500 bg-yellow-500/10 w-12 h-12 flex items-center justify-center rounded-xl">{it.icon}</div>
          <h4 className="font-display text-lg font-bold text-white mb-2">{it.t}</h4>
          <p className="text-white/40 text-[13px] leading-relaxed">{it.d}</p>
        </div>
      ))}
    </div>
  </section>
);

const Section5_AIStack = () => (
  <section className="py-12 md:py-20 bg-black overflow-hidden px-4">
    <div className="container mx-auto text-center mb-12">
      <p className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">OUR PROCESS</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">The <span className="text-yellow-500">AI Stack</span></h2>
      <p className="text-white/60 text-sm max-w-2xl mx-auto">Sequential production engine showing next step progression.</p>
    </div>
    <div className="container mx-auto flex flex-col items-center justify-center max-w-6xl">
      {/* 2x2 Grid with Arrows on Mobile, Horizontal with Arrows on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 relative w-full items-start">
        {[
          { icon: <Film />, step: "STEP 1", title: "Script", desc: "AI-optimized narratives." },
          { icon: <ImageIcon />, step: "STEP 2", title: "Visuals", desc: "Consistent scene synthesis." },
          { icon: <Mic2 />, step: "STEP 3", title: "Voice", desc: "Soulful neural cloning." },
          { icon: <Zap />, step: "STEP 4", title: "Post", desc: "Automated final polish." }
        ].map((it, i) => (
          <div key={i} className="relative group w-full">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-yellow-500/40 transition-all text-center md:text-left relative z-10 bg-black">
              <div className="mb-4 mx-auto md:mx-0 text-yellow-500 w-12 h-12 flex items-center justify-center bg-yellow-500/10 rounded-2xl group-hover:scale-110 transition-transform">{it.icon}</div>
              <p className="text-yellow-500 text-[10px] font-black tracking-widest mb-1">{it.step}</p>
              <h4 className="font-display text-xl font-bold text-white mb-2">{it.title}</h4>
              <p className="text-white/30 text-xs leading-relaxed">{it.desc}</p>
            </div>
            {/* Arrows between steps */}
            {i < 3 && (
              <div className="absolute top-1/2 -right-10 translate-y-[-50%] text-white/10 text-4xl hidden lg:block z-0 group-hover:text-yellow-500/20 transition-colors">→</div>
            )}
            {i < 3 && (
              <div className="flex justify-center my-4 lg:hidden text-white/10 text-3xl rotate-90 lg:rotate-0">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Section6_WinningFormats = () => (
  <section className="py-12 md:py-20 bg-black px-4">
    <div className="container mx-auto text-center mb-10">
      <SectionHeader badge="CONTENT LIBRARY" title="Winning Formats" description="Stories crafted across every major category to drive high engagement." centered={true} />
    </div>
    <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mt-10">
      {[
        { title: "Family", img: "/format-family.webp", desc: "Striking resonance." },
        { title: "Urban", img: "/format-urban.webp", desc: "City ambitions." },
        { title: "Moral", img: "/format-moral.webp", desc: "Ethics challenge." },
        { title: "Crime", img: "/format-crime.webp", desc: "Bingeable suspense." }
      ].map((it, i) => (
        <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 bg-[#121212] transition-all hover:scale-[1.02] shadow-2xl">
          <img src={it.img} alt={it.title} className="w-full h-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100" />
          <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 z-20 bg-gradient-to-t from-black via-black/40 to-transparent">
            <h4 className="font-display text-xl md:text-2xl font-bold text-white leading-none">{it.title}</h4>
            <p className="text-white/40 text-[10px] md:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Section8_SampleWork = () => {
  const { scrollRef, pause, resume } = useAutoScroll();
  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8 text-center md:text-left mb-10">
        <p className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">SHOWCASE</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Our <span className="text-yellow-500">Stories</span></h2>
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={scrollRef} onMouseEnter={pause} onMouseLeave={resume} onTouchStart={pause} onTouchEnd={resume} className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8 md:grid md:grid-cols-3 md:overflow-visible">
          {[
            { title: "The Last Promise", category: "FAMILY DRAMA", duration: "2:15", img: "/format-family.webp" },
            { title: "Midnight Caller", category: "CRIME THRILLER", duration: "1:45", img: "/format-crime.webp" },
            { title: "Second Chance", category: "MORAL TWIST", duration: "2:30", img: "/format-moral.webp" }
          ].map((it, i) => (
            <div key={i} className="min-w-[90%] md:min-w-full snap-start group relative rounded-3xl overflow-hidden border border-white/5 bg-[#121212] transition-all hover:border-yellow-500/20 shadow-2xl">
              <div className="aspect-video relative overflow-hidden bg-black/40">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-yellow-500/80 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-black/90 rounded-md text-[10px] font-bold text-white font-mono">{it.duration}</div>
              </div>
              <div className="p-6 text-left">
                <p className="text-yellow-500 text-[10px] font-bold tracking-widest mb-1.5 uppercase">{it.category}</p>
                <h4 className="font-display text-xl font-bold text-white leading-none">{it.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Section9_LeadForm = () => {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => { setSent(true); toast({ title: "Inquiry Sent!", description: "We'll build your story journey." }); }, 800);
  };
  return (
    <section id="contact" className="py-12 md:py-24 bg-black relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center md:text-left mb-10">
          <SectionHeader badge="GET STARTED" title="Start Your Journey" description="Ready to build your brand vertical? Let's chat." centered={false} />
        </div>
        <div className="p-8 md:p-14 rounded-3xl bg-white/[0.01] border border-white/5 shadow-3xl backdrop-blur-sm transition-all hover:border-yellow-500/10 bg-black">
          {sent ? (
            <div className="text-center py-16 animate-fade-in"><CheckCircle2 className="w-14 h-14 text-yellow-500 mx-auto mb-6" /><h3 className="font-display text-2xl font-bold text-white mb-6">Brief Sent!</h3><Button variant="outline" className="text-white border-white/10" onClick={() => setSent(false)}>Send Another</Button></div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><Input placeholder="Name" required className="bg-white/5 h-14 rounded-xl border-white/5 focus:border-yellow-500" /><Input placeholder="Brand" required className="bg-white/5 h-14 rounded-xl border-white/5 focus:border-yellow-500" /></div>
              <Textarea placeholder="Story type, budget, vision..." required rows={3} className="bg-white/5 rounded-xl border-white/5 focus:border-yellow-500" />
              <Button type="submit" className="w-full h-14 md:h-16 bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold rounded-xl text-lg transition-transform active:scale-95">Submit Your Brief</Button>
              <div className="flex justify-center pt-2"><a href="https://wa.me/919999999999" className="flex items-center gap-3 text-white/30 hover:text-white transition-all group"><MessageCircle className="w-5 h-5 group-hover:text-yellow-500" /><span className="text-sm font-bold">Connect on WhatsApp</span></a></div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// --- Helpers ---
const SectionHeader = ({ badge, title, description, centered }: any) => (
  <div className={centered ? "text-center" : "text-left"}>
    <p className="text-yellow-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">{badge}</p>
    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4" dangerouslySetInnerHTML={{ __html: title.replace(/(AI Microdramas|AI Stack|Stories|Journey)/g, '<span class="text-yellow-500">$1</span>') }} />
    <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto md:mx-0">{description}</p>
  </div>
);

const Timer = (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
const Layers = (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;

const Microdrama = () => {
  useEffect(() => { document.title = "AI Microdramas | ADQ Stories"; window.scrollTo(0, 0); }, []);
  return (
    <Layout>
      <div className="bg-black text-white selection:bg-yellow-500 selection:text-black font-sans antialiased overflow-x-hidden">
        <Hero />
        <Section2_Definition />

        {/* Ad Sales Business Model - NORMAL VIEW NOT SCROLL VIEW */}
        <section className="py-12 bg-black border-y border-white/5 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <DollarSign />, t: "Monetization Ready", d: "Ads tailored for high engagement & ROI." },
                { icon: <Users />, t: "Creator Ecosystem", d: "Next-gen storytelling infrastructure." },
                { icon: <Rocket />, t: "OTT Licensing", d: "Exclusive IP for global distribution." }
              ].map((it, i) => (
                <div key={i} className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center shrink-0 text-yellow-500 group-hover:scale-110 transition-all duration-500">{it.icon}</div>
                  <div><h5 className="font-bold text-lg md:text-xl md:mb-1 leading-none text-white">{it.t}</h5><p className="text-[10px] md:text-sm text-white/30 leading-tight">{it.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section5_AIStack />
        <Section6_WinningFormats />

        {/* Philosophy Divider */}
        <section className="py-16 md:py-32 bg-black text-center px-4">
          <span className="text-yellow-500/50 font-black text-[10px] tracking-[0.4em] mb-10 inline-block uppercase italic">Philosopy</span>
          <h3 className="font-display text-2xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none mx-auto max-w-4xl">"Scaling Human Imagination through Artificial Intelligence"</h3>
        </section>

        <Section8_SampleWork />
        <Section9_LeadForm />

        <section className="py-24 bg-black text-center px-4 border-t border-white/5 relative group overflow-hidden">
          <div className="absolute inset-0 bg-yellow-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
          <h2 className="font-display text-3xl md:text-6xl font-black uppercase mb-10 text-white relative z-10">Build binge-worthy stories for your brand.</h2>
          <Link to="/contact" className="relative z-10"><Button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black h-16 md:h-20 px-16 text-xl font-black rounded-3xl active:scale-95 transition-all shadow-2xl">Get Started Now</Button></Link>
        </section>
      </div>
    </Layout>
  );
};

export default Microdrama;
