import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DecorativeShapes = () => (
  <>
    {/* Animated geometric shapes */}
    <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 transform rotate-45 opacity-90 animate-pulse" />
    <div className="absolute top-40 left-16 w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-80 animate-pulse" />
    <div className="absolute bottom-32 right-40 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 transform -rotate-45 opacity-90 animate-pulse" />
    <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-yellow-400 rounded-full opacity-80" />
    <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-400 rounded-full opacity-80" />
  </>
);

const stats = [
  { number: "10+", label: "Years of experience" },
  { number: "235+", label: "Awards won" },
  { number: "38+", label: "Clients worldwide" },
  { number: "4.6m+", label: "Monthly Blog readers" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Decorative background elements */}
      <DecorativeShapes />

      {/* Animated background blur */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob" />
      <div className="absolute top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
              Sustainable solution for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                mindful brands.
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light mx-auto">
              We are driven by innovation and fueled by passion for technology. Accelerate Your Business Growth with Our High Performing Agile Teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-6 rounded-xl font-semibold flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-xl font-semibold border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-2">
                  {stat.number}
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Image Placeholder */}
      <div className="container mx-auto px-6 mt-20 relative z-10">
        <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;