import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

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
              Use our AI tools to make images, videos, and more. No need to be a
              pro.
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

          </div>

        </div>


      </div>
    </section>
  );
};

export default Hero;
