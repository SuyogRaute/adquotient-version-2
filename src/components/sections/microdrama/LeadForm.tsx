import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    requirement: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Request Received!",
        description: "Our storytelling team will contact you shortly.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Start Your Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to create <br />
              <span className="text-gradient">Binge-Worthy</span> stories?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Fill out the brief below and let's craft a narrative that resonates with your audience and drives results.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-secondary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                     <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="font-bold">Initial Context Audit</p>
                     <p className="text-sm text-muted-foreground">We analyze your brand DNA first.</p>
                  </div>
               </div>
               <p className="text-sm text-muted-foreground flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                 Typical response time: <span className="text-foreground font-bold">Under 2 hours</span>
               </p>
            </div>
          </div>

          <div className="glass-strong rounded-[40px] p-8 md:p-12 border border-secondary/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Send className="w-24 h-24 rotate-12" />
            </div>

            {isSubmitted ? (
               <div className="text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                     <CheckCircle2 className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Thank You!</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Your brief has been successfully submitted. Check your inbox for our initial audit proposal.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8 border-secondary text-secondary hover:bg-secondary/10"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Brief
                  </Button>
               </div>
            ) : (
               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                        <Input
                           placeholder="Full Name"
                           required
                           className="bg-background/50 border-white/10 h-14 rounded-2xl focus:border-secondary"
                           value={formData.name}
                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Company / Brand</label>
                        <Input
                           placeholder="Your Brand Name"
                           required
                           className="bg-background/50 border-white/10 h-14 rounded-2xl focus:border-secondary"
                           value={formData.company}
                           onChange={(e) => setFormData({...formData, company: e.target.value})}
                        />
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Requirement Overview</label>
                     <Textarea
                        placeholder="What stories do you want to tell?"
                        required
                        rows={4}
                        className="bg-background/50 border-white/10 rounded-2xl focus:border-secondary resize-none"
                        value={formData.requirement}
                        onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                     />
                  </div>

                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Estimated Monthly Budget (Optional)</label>
                     <Input
                        placeholder="Budget (e.g. ₹5L - ₹20L)"
                        className="bg-background/50 border-white/10 h-14 rounded-2xl focus:border-secondary"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                     />
                  </div>

                  <Button type="submit" variant="gradient" size="lg" className="w-full h-14 text-lg font-bold shadow-xl shadow-secondary/20">
                     Submit Your Story Brief
                     <Send className="ml-2 w-4 h-4" />
                  </Button>

                  <div className="text-center pt-4">
                     <a
                        href="https://wa.me/919999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors bg-secondary/5 px-4 py-2 rounded-full border border-secondary/10"
                     >
                        <MessageCircle className="w-4 h-4" />
                        Quick Chat on WhatsApp
                     </a>
                  </div>
               </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
