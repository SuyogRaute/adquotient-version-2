import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Building2, Users, Megaphone, HelpCircle } from "lucide-react";

const inquiryTypes = [
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Advertiser",
    description: "I want to run campaigns with AdQuotient",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Publisher",
    description: "I have inventory to offer",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partner",
    description: "I want to explore partnerships",
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "Support",
    description: "I need help with an existing campaign",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setSelectedType(null);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's{" "}
              <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to transform your media strategy? Reach out and let's
              discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="glass rounded-3xl p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold mb-6">
                Send Us a Message
              </h2>

              {/* Inquiry Type Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.title}
                    onClick={() => setSelectedType(type.title)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      selectedType === type.title
                        ? "bg-secondary/20 border-2 border-secondary"
                        : "bg-muted border-2 border-transparent hover:border-border"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${
                        selectedType === type.title
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-border text-muted-foreground"
                      }`}
                    >
                      {type.icon}
                    </div>
                    <div className="font-medium text-sm">{type.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {type.description}
                    </div>
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Company
                    </label>
                    <Input
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Phone
                    </label>
                    <Input
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us about your needs..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-muted border-border resize-none"
                  />
                </div>
                <Button variant="gradient" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <SectionHeader
                  badge="Contact Info"
                  title="We're Here to Help"
                  centered={false}
                />
                <p className="text-muted-foreground">
                  Whether you're an advertiser looking to scale, a publisher with
                  premium inventory, or a potential partner, we'd love to hear
                  from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@adquotient.com</p>
                    <p className="text-muted-foreground">sales@adquotient.com</p>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 22 4567 8900</p>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      WeWork, One BKC<br />
                      Bandra Kurla Complex<br />
                      Mumbai, Maharashtra 400051
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="glass rounded-2xl p-6 bg-gradient-glow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-medium">Quick Response</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our team typically responds within 24 hours during business
                  days. For urgent inquiries, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
