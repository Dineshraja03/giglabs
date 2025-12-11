import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import PageLoader from "@/components/PageLoader";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    // Hide initial loader after 2 seconds
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isInitialLoad && <Loader />}
        <PageLoader isVisible={isPageLoading} />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
