import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              We are a team of
              <br />
              <span className="italic">creators, doers</span> and
              <br />
              <span className="italic">problem solvers.</span>
            </h2>
          </div>

          <div className="flex gap-6">
            {/* Image placeholder */}
            <div className="w-48 h-64 bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-secondary to-muted" />
            </div>
            
            <div className="flex-1">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                We're an obstinate, scrappy, eclectic squad 
                with a love of people-focused design.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                We're fueled almost exclusively by caffeine 
                and a tendency to say "what if..."
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                You'll typically find us waving markers in 
                front of whiteboards, arguing by the coffee 
                machine or hunched over a screen.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"
              >
                MORE ABOUT US
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
