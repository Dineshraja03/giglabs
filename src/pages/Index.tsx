import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import HomeServicesSection from "@/components/HomeServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProcessSection />
        <HomeServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
