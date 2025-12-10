import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Giglabs transformed our entire digital strategy. Their team's creative approach and technical expertise resulted in a 150% increase in engagement.",
    author: "Leslie Alexander",
    role: "Creative Director, DesignCo",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    company: "DesignCo",
    rating: 5,
  },
  {
    quote: "Working with Giglabs was a game-changer. They understood our vision immediately and delivered beyond our expectations.",
    author: "Michael Chen",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    company: "TechStart",
    rating: 5,
  },
  {
    quote: "The best investment we've made in our company's digital transformation. Their expertise is unmatched in the industry.",
    author: "Sarah Johnson",
    role: "Marketing Director, BrandPro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    company: "BrandPro",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-200 dark:bg-yellow-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-200 dark:bg-rose-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-4">
            Loved by <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Our Clients</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about working with us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star 
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-8 leading-relaxed italic">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-black text-slate-900 dark:text-white">
                  {currentTestimonial.author}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">
                {activeIndex + 1} of {testimonials.length}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={goToPrevious}
                  className="p-3 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 hover:from-slate-300 hover:to-slate-200 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-900 dark:text-white" />
                </button>
                <button
                  onClick={goToNext}
                  className="p-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"
                    : "w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
              98%
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-semibold">
              Client Satisfaction Rate
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
              500+
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-semibold">
              Happy Clients Worldwide
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
              10+
            </p>
            <p className="text-slate-600 dark:text-slate-400 font-semibold">
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
