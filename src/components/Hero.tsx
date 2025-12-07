import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 border-b-2 border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-mono uppercase tracking-widest mb-6 text-muted-foreground">
            Digital Transformation & AI
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
            Rewiring Business
            <br />
            for the AI Era
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Your partner for digital transformation and AI integration. 
            We help businesses unlock their full potential through innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base px-8 py-6 shadow-sm hover:shadow-md transition-shadow">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 py-6 shadow-sm hover:shadow-md transition-shadow">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
