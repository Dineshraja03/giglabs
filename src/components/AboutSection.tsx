import { useState } from "react";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const missionData = {
    mainText: "To deliver high quality and cost-effective software solutions that help companies and entrepreneurs achieve their goals and stay ahead of the competition.",
    points: [
      {
        title: "Harnessing the power of technology",
        description: "We are committed to harnessing the power of technology to solve complex challenges, drive efficiency, and enhance user experiences for our clients.",
      },
      {
        title: "Relentless focus on quality",
        description: "With a relentless focus on quality, collaboration, and continuous improvement, we strive to be the premier choice for organizations seeking top-tier software development expertise and excellence.",
      },
      {
        title: "Exceeding client expectations",
        description: "To deliver cutting-edge software solutions that exceed client expectations, fueling their growth and success in a rapidly evolving digital landscape.",
      },
    ],
  };

  const visionData = {
    mainText: "To envision a world where technology seamlessly integrates with everyday life, empowering individuals and businesses to thrive in an interconnected digital ecosystem.",
    points: [
      {
        title: "Lead the forefront of innovation",
        description: "Our vision is to lead the forefront of innovation, shaping the future of software development with groundbreaking solutions that revolutionize industries and drive societal progress.",
      },
      {
        title: "Create a culture of collaboration",
        description: "We aspire to create a culture of creativity and collaboration, where every member of our team is inspired to push boundaries, challenge conventions, and redefine what's possible in software.",
      },
      {
        title: "Transform digital ecosystems",
        description: "To continuously innovate and deliver transformative digital solutions that empower our clients to achieve their vision and make a meaningful impact in their industries.",
      },
    ],
  };

  const valuesData = {
    mainText: "At the heart of our values lies a dedication to sustainability and social responsibility, leveraging technology to create positive change and make a lasting impact on the world.",
    points: [
      {
        title: "Customer-Centricity",
        description: "We prioritize the needs and goals of our clients above all else, striving to exceed their expectations and build long-term partnerships based on mutual success and satisfaction.",
      },
      {
        title: "Innovation",
        description: "We embrace innovation as the driving force behind our solutions, constantly pushing boundaries and exploring new technologies to deliver cutting-edge software products.",
      },
      {
        title: "Integrity",
        description: "We conduct our business with honesty, transparency, and integrity, building trust with our clients, partners, and team members through ethical practices and accountability.",
      },
    ],
  };

  const tabContent = {
    mission: missionData,
    vision: visionData,
    values: valuesData,
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-bold">
              About Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
            About Us
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            At Giglabs, we are driven by innovation and fueled by passion for technology. Accelerate Your Business Growth with Our High Performing Agile Teams.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Tech SVG Illustration */}
          <div className="relative h-full rounded-2xl overflow-hidden">
            <svg viewBox="0 0 500 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="techGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="techGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="techGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              {/* Background circles */}
              <circle cx="250" cy="300" r="280" fill="none" stroke="url(#techGrad1)" strokeWidth="1" opacity="0.1" />
              <circle cx="250" cy="300" r="220" fill="none" stroke="url(#techGrad2)" strokeWidth="1" opacity="0.1" />
              <circle cx="250" cy="300" r="160" fill="none" stroke="url(#techGrad3)" strokeWidth="1" opacity="0.1" />

              {/* Main device/laptop */}
              <rect x="120" y="200" width="260" height="200" rx="20" fill="#1E293B" stroke="url(#techGrad1)" strokeWidth="2" />
              
              {/* Laptop screen */}
              <rect x="140" y="220" width="220" height="140" rx="12" fill="#0F172A" />
              
              {/* Screen content - lines representing code/content */}
              <line x1="160" y1="240" x2="340" y2="240" stroke="url(#techGrad1)" strokeWidth="2" opacity="0.8" />
              <line x1="160" y1="265" x2="320" y2="265" stroke="url(#techGrad2)" strokeWidth="1.5" opacity="0.6" />
              <line x1="160" y1="285" x2="280" y2="285" stroke="url(#techGrad1)" strokeWidth="1.5" opacity="0.6" />
              <line x1="160" y1="305" x2="300" y2="305" stroke="url(#techGrad3)" strokeWidth="1.5" opacity="0.6" />
              <line x1="160" y1="325" x2="270" y2="325" stroke="url(#techGrad2)" strokeWidth="1.5" opacity="0.6" />

              {/* Laptop stand */}
              <rect x="200" y="410" width="100" height="15" rx="4" fill="url(#techGrad1)" />
              <line x1="230" y1="425" x2="270" y2="425" stroke="url(#techGrad1)" strokeWidth="3" />

              {/* Floating tech elements - data nodes */}
              <circle cx="100" cy="120" r="18" fill="none" stroke="url(#techGrad1)" strokeWidth="2" opacity="0.6" />
              <circle cx="110" cy="120" r="3" fill="url(#techGrad1)" />

              <circle cx="400" cy="150" r="15" fill="none" stroke="url(#techGrad2)" strokeWidth="2" opacity="0.6" />
              <circle cx="405" cy="150" r="2.5" fill="url(#techGrad2)" />

              <circle cx="80" cy="400" r="20" fill="none" stroke="url(#techGrad3)" strokeWidth="2" opacity="0.6" />
              <circle cx="90" cy="400" r="3" fill="url(#techGrad3)" />

              <circle cx="420" cy="480" r="16" fill="none" stroke="url(#techGrad1)" strokeWidth="2" opacity="0.6" />
              <circle cx="425" cy="480" r="2.5" fill="url(#techGrad1)" />

              {/* Connecting lines between nodes */}
              <line x1="110" y1="125" x2="140" y2="200" stroke="url(#techGrad1)" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />
              <line x1="400" y1="165" x2="380" y2="200" stroke="url(#techGrad2)" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />
              <line x1="110" y1="420" x2="140" y2="410" stroke="url(#techGrad3)" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />
              <line x1="400" y1="480" x2="360" y2="410" stroke="url(#techGrad1)" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />

              {/* Top floating cubes/blocks */}
              <rect x="70" y="80" width="20" height="20" rx="2" fill="url(#techGrad1)" opacity="0.7" />
              <rect x="360" y="90" width="24" height="24" rx="3" fill="url(#techGrad2)" opacity="0.6" />
              <rect x="200" y="50" width="18" height="18" rx="2" fill="url(#techGrad3)" opacity="0.7" />

              {/* Animated glow effect circles */}
              <circle cx="250" cy="300" r="5" fill="url(#techGrad1)" opacity="0.8" />
              <circle cx="250" cy="300" r="15" fill="none" stroke="url(#techGrad1)" strokeWidth="1" opacity="0.4" />

              {/* Bottom decorative wave */}
              <path d="M 100 550 Q 150 530 200 545 T 300 545 T 400 545 T 500 540 L 500 600 L 100 600 Z" fill="url(#techGrad1)" opacity="0.1" />
            </svg>

            {/* Decorative overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/5 dark:to-slate-900/20 rounded-2xl pointer-events-none" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We specialize in crafting tailored solutions that meet the unique needs of our clients across various industries.
            </p>

            {/* Tab Navigation */}
            <div className="flex gap-4 border-b border-slate-200 dark:border-slate-700">
              {[
                { id: "mission", label: "Our Mission", icon: Target },
                { id: "vision", label: "Our Vision", icon: Eye },
                { id: "values", label: "Our Values", icon: Heart },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "mission" | "vision" | "values")}
                  className={`py-3 px-4 font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              <p className="text-base font-semibold italic text-slate-700 dark:text-slate-300">
                {currentContent.mainText}
              </p>

              <div className="space-y-5">
                {currentContent.points.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {point.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
