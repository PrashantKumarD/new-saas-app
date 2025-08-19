import React from "react";
import { assets } from "../assets/assets";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center">
        <div className="flex items-center justify-center mb-4">
          <span className="font-bold text-2xl text-gray-900">Creativo</span>
        </div>
        <p className="text-gray-600 text-center max-w-xl text-sm leading-relaxed">
          Simple AI tools for content creation and image editing.
        </p>
      </div>
      <div className="border-t border-gray-200">
        <div className="text-gray-500 max-w-7xl mx-auto px-6 py-4 text-center text-sm">
          Creativo ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
