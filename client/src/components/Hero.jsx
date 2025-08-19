import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Sparkles, ArrowRight, Play, Users, Star } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  // Screenshots data with main image first
  const screenshots = [
    { src: "/Screenshot 2025-07-23 220604.png", alt: "Creativo Dashboard" },
    { src: "/Screenshot 2025-07-23 220650.png", alt: "AI Content Generation" },
    { src: "/Screenshot 2025-07-23 220756.png", alt: "Image Editing Tools" },
    { src: "/Screenshot 2025-07-23 220851.png", alt: "Creative Templates" },
    { src: "/Screenshot 2025-07-23 220915.png", alt: "Export Options" },
  ];

  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Function to smoothly scroll to the action section
  const scrollToAction = () => {
    const actionSection = document.getElementById("action-section");
    if (actionSection) {
      actionSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="min-h-screen flex items-center bg-purple-100">
      <div className="relative z-10 w-full px-6 sm:px-12 xl:px-20 max-w-7xl mx-auto">
        <div className="text-center space-y-8 fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-300 text-sm font-medium text-gray-700">
            <Sparkles className="w-4 h-4" />
            <span>Simple AI Tools</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-gray-900">
              Create Cool Stuff
              <span className="block text-cyan-500">With AI</span>
              <span className="block text-gray-900">It's Pretty Easy</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Use our AI tools to make images, videos, and more. No need to be a pro.
              <span className="block mt-2 font-medium text-gray-800">
                Just type what you want and we'll help you make it happen.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate("/ai")}
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 min-w-[200px]"
            >
              <span>Try It Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={scrollToAction}
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-lg border border-gray-300 hover:border-gray-400 transition-colors duration-300 min-w-[200px]"
            >
              <Play className="w-5 h-5" />
              <span>See Examples</span>
            </button>
          </div>

          {/* Premium Screenshots Showcase */}
          <div id="action-section" className="pt-12 pb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Here's What It Looks Like
              </h3>
              <p className="text-gray-600">
                Just some screenshots of the tools in action
              </p>
            </div>

            {/* Screenshot Gallery */}
            <div className="relative max-w-6xl mx-auto">
              {/* Main featured screenshot */}
              <div className="mb-8">
                <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-200">
                  <img
                    src={screenshots[activeScreenshot].src}
                    alt={screenshots[activeScreenshot].alt}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Image title */}
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    {screenshots[activeScreenshot].alt}
                  </p>
                </div>
              </div>

              {/* Secondary screenshots grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {screenshots.map((screenshot, index) => {
                  const isActive = activeScreenshot === index;

                  return (
                    <div
                      key={index}
                      className={`cursor-pointer transition-all duration-300 ${
                        isActive ? "ring-2 ring-blue-500" : "hover:opacity-80"
                      }`}
                      onClick={() => setActiveScreenshot(index)}
                    >
                      <div
                        className={`bg-white rounded-lg shadow-md p-1.5 border overflow-hidden transition-all duration-300 ${
                          isActive ? "border-blue-500" : "border-gray-200"
                        }`}
                      >
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          className="w-full h-48 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-lg pointer-events-none"></div>

                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute top-2 left-2 bg-cyan-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                            Active
                          </div>
                        )}
                      </div>

                      {/* Floating badge */}
                      <div
                        className={`absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full border-2 border-white shadow-lg transition-all duration-300 flex items-center justify-center ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Floating elements around screenshots */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-500 rounded-full opacity-30"></div>
              <div className="absolute -top-2 -right-8 w-6 h-6 bg-cyan-400 rounded-full opacity-25"></div>
              <div className="absolute -bottom-6 -left-2 w-4 h-4 bg-cyan-600 rounded-full opacity-35"></div>
              <div className="absolute -bottom-4 -right-6 w-10 h-10 bg-cyan-500 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Social Proof */}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="rgba(255,255,255,0.8)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
