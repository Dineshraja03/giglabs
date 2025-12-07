import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Take the first step towards transformative growth today. 
            Contact us to schedule a consultation and discover how our tailored solutions can propel your business.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            asChild 
            className="text-base px-8 py-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <Link to="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
