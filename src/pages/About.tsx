import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/CTASection";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import MSSION from "@/assets/ourmission.png";

const values = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client-First Approach",
    description: "Your success is our priority. We build partnerships, not transactions.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Precision & Transparency",
    description: "Data-driven decisions with complete visibility into performance.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation Leadership",
    description: "Continuously pushing the boundaries of media technology.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence in Execution",
    description: "Decades of combined expertise delivering exceptional results.",
  },
];

const leadership = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    bio: "20+ years in media sales and ad tech. Former VP at leading broadcaster.",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "AI/ML expert with background at top tech companies. PhD in Data Science.",
  },
  {
    name: "Amit Patel",
    role: "Chief Revenue Officer",
    bio: "15+ years building high-performance sales teams in digital advertising.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              About AdQuotient
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Redefining{" "}
              <span className="text-gradient">Media Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a tech-driven AdSales and Media Planning partner, unifying
              Linear, Digital, CTV, and Addressable advertising through AI-powered
              intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-dark relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Our Mission"
                title="Empowering Advertisers with Unified Media Access"
                centered={false}
              />
              <p className="text-muted-foreground text-lg mb-6">
                In a fragmented media landscape, advertisers struggle to reach
                audiences effectively across screens. AdQuotient was founded to
                solve this—bringing together linear TV, connected TV, digital,
                and addressable inventory under one intelligent platform.
              </p>
              <p className="text-muted-foreground text-lg">
                Our AI-powered planning engine eliminates guesswork, optimizes
                budgets in real-time, and delivers measurable outcomes. With PAN
                India footprint and premium publisher relationships, we help
                brands achieve true cross-screen consistency.
              </p>
            </div>
            <div className="glass rounded-3xl ">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={MSSION}
                  alt="AdQuotient company statistics and achievements"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us"
            description="Core principles that guide every decision we make."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass rounded-2xl p-8 text-center group hover:border-secondary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 text-navy-deep group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            badge="Leadership"
            title="Meet Our Team"
            description="Industry veterans driving innovation in media technology."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((person, index) => (
              <div
                key={person.name}
                className="glass rounded-2xl p-8 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center text-3xl font-display font-bold text-navy-deep">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-secondary text-sm mb-4">{person.role}</p>
                <p className="text-muted-foreground text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
