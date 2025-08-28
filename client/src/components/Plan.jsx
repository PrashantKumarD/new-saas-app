import React from "react";
import { PricingTable } from "@clerk/clerk-react";
import { Crown, Zap, Star } from "lucide-react";

const Plan = () => {
  return (
    <section className="py-24 px-6 sm:px-12 xl:px-20 bg-purple-100 relative">
      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
            <Crown className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-600 font-medium text-sm">Pricing</span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            Want More? <span className="text-cyan-500">Upgrade</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start free and upgrade when you need more stuff.
          </p>
        </div>

        {/* Features highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Pretty Fast</div>
              <div className="text-sm text-gray-600">
                Usually takes a few seconds
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Good Quality</div>
              <div className="text-sm text-gray-600">
                Does what it's supposed to do
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                Help When Needed
              </div>
              <div className="text-sm text-gray-600">
                I'll try to help if things break
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Table Container */}
        <div >
          <div
            className="bg-white p-8 border border-gray-200 rounded-lg"
            
          >
            <PricingTable/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
