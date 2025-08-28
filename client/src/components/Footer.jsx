import React from "react";


const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center">
        <div className="flex items-center justify-center mb-4">
          <span className="font-bold text-2xl text-gray-900">Creativo</span>
        </div>
        <p className="text-gray-600 text-center max-w-xl text-sm leading-relaxed">
          Made this to help for the people to make things with AI.
          <br /> Do connect!
        </p>
      </div>
      <div className="border-t border-gray-200">
        <div className="text-gray-500 max-w-7xl mx-auto px-6 py-2 text-center text-sm">
          🧑 Prashant Kumar Dwebedi <br/>📧 kumarprashant6080@gmail.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
