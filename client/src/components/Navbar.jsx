import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <nav className="fixed top-0 z-1000 w-full bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-3 mx-auto">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="font-display font-bold text-2xl text-gray-900">
            Creativo
          </span>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <button
                onClick={() => navigate("/ai")}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-150 rounded-md border border-gray-200 bg-white"
              >
                <Sparkles className="w-5 h-5" />
                Dashboard
              </button>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 border border-gray-200",
                  },
                }}
              />
            </>
          ) : (
            <button
              onClick={() => {
                openSignIn();
              }}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-150"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
