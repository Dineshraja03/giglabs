import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 border-b-2 border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-mono uppercase tracking-widest mb-4 text-muted-foreground">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Innovation Meets Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Giglabs, we are driven by innovation and fueled by passion for technology. 
              We specialize in crafting tailored solutions that meet the unique needs of our clients across various industries.
            </p>

            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="mission" className="font-medium">Mission</TabsTrigger>
                <TabsTrigger value="vision" className="font-medium">Vision</TabsTrigger>
                <TabsTrigger value="values" className="font-medium">Values</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="border-2 border-border p-6">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold mb-2">Our Mission</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To deliver high quality and cost-effective software solutions that help companies 
                      and entrepreneurs achieve their goals and stay ahead of the competition.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="vision" className="border-2 border-border p-6">
                <div className="flex items-start gap-4">
                  <Eye className="w-8 h-8 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold mb-2">Our Vision</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To deliver cutting-edge software solutions that exceed client expectations, 
                      fueling their growth and success in a rapidly evolving digital landscape.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="values" className="border-2 border-border p-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold mb-2">Our Values</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      With a relentless focus on quality, collaboration, and continuous improvement, 
                      we strive to be the premier choice for organizations seeking top-tier software development expertise.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary border-2 border-border p-6 shadow-sm">
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-secondary border-2 border-border p-6 shadow-sm">
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="bg-secondary border-2 border-border p-6 shadow-sm">
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="bg-secondary border-2 border-border p-6 shadow-sm">
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
