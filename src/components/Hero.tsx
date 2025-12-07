import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const DecorativeShapes = () => (
  <>
    {/* Top left orange shape */}
    <div className="absolute top-20 left-10 w-16 h-16 bg-accent rounded-full opacity-80" />
    {/* Top right purple shape */}
    <div className="absolute top-32 right-20 w-12 h-12 bg-purple-500 rotate-45" />
    {/* Yellow triangle */}
    <div className="absolute top-40 left-1/4 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-yellow-400" />
    {/* Blue squiggle - represented as a curved line */}
    <div className="absolute bottom-40 right-1/4 w-20 h-3 bg-blue-500 rounded-full rotate-12" />
    {/* Small orange dots */}
    <div className="absolute top-60 right-40 w-4 h-4 bg-accent rounded-full" />
    <div className="absolute bottom-60 left-40 w-6 h-6 bg-green-400 rounded-full" />
  </>
);

const stats = [
  { number: "10+", label: "Years of experience", link: "EXPERIENCE" },
  { number: "235+", label: "Awards won", link: "AWARDS" },
  { number: "38+", label: "Client worldwide", link: "CAREERS" },
  { number: "4.6m+", label: "Monthly Blog readers", link: "BRAND IMPACT" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 relative overflow-hidden">
      <DecorativeShapes />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-8">
            <span className="italic">Sustainable</span> design
            <br />
            for mindful <span className="text-accent italic">brands.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            A Product UI UX design agency blending strategy, creativity and 
            We make them more meaningful, memorable, intuitive and help 
            more meaningful, functional.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-semibold mb-1">{stat.number}</p>
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <Link 
                to="/about" 
                className="text-xs text-accent hover:underline underline-offset-2 uppercase tracking-wide"
              >
                {stat.link}
              </Link>
            </div>
          ))}
        </div>

        {/* Video/Image Placeholder */}
        <div className="max-w-3xl mx-auto relative">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-accent-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
