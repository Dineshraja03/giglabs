import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Eye, Heart, Users, Lightbulb, TrendingUp, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 border-b-2 border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-mono uppercase tracking-widest mb-4 text-muted-foreground">
                About Us
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Where Innovation Meets Excellence
              </h1>
              <p className="text-xl text-muted-foreground">
                At Giglabs, we are driven by innovation and fueled by passion for technology. 
                We specialize in crafting tailored solutions that meet the unique needs of our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-secondary border-b-2 border-border">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="mission" className="font-medium">Our Mission</TabsTrigger>
                <TabsTrigger value="vision" className="font-medium">Our Vision</TabsTrigger>
                <TabsTrigger value="values" className="font-medium">Our Values</TabsTrigger>
              </TabsList>

              <TabsContent value="mission" className="bg-background border-2 border-border p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Target className="w-16 h-16 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Harnessing the Power of Technology</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      To deliver high quality and cost-effective software solutions that help companies 
                      and entrepreneurs achieve their goals and stay ahead of the competition.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We are committed to harnessing the power of technology to solve complex challenges, 
                      drive efficiency, and enhance user experiences for our clients.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vision" className="bg-background border-2 border-border p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Eye className="w-16 h-16 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Exceeding Client Expectations</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      To deliver cutting-edge software solutions that exceed client expectations, 
                      fueling their growth and success in a rapidly evolving digital landscape.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We envision a future where every business, regardless of size, has access to 
                      transformative technology solutions that drive meaningful impact.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="values" className="bg-background border-2 border-border p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <Heart className="w-16 h-16 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Relentless Focus on Quality</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      With a relentless focus on quality, collaboration, and continuous improvement, 
                      we strive to be the premier choice for organizations seeking top-tier software development expertise.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe in building lasting partnerships based on trust, transparency, and delivering 
                      exceptional value to every client we serve.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 border-b-2 border-border">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-mono uppercase tracking-widest mb-4 text-muted-foreground">
                Why Choose Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Tailored Solutions for Any Organization
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "Customer-Centric Approach",
                  description: "We put our clients at the center of everything we do, ensuring solutions that truly meet their needs.",
                },
                {
                  icon: Lightbulb,
                  title: "Value Driven Innovation",
                  description: "We focus on innovations that deliver real business value and measurable outcomes.",
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Improvement",
                  description: "Our culture of continuous improvement ensures we stay ahead of industry trends.",
                },
                {
                  icon: Shield,
                  title: "Quality Assurance",
                  description: "Rigorous quality processes ensure reliable, secure, and high-performing solutions.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-secondary border-2 border-border p-8">
                  <item.icon className="w-10 h-10 mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10+", label: "Years of Experience" },
                { value: "100+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
