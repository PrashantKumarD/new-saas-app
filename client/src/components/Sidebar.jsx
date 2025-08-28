import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Scissors,
  SquarePen,
  Image,
  LogOut,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const navItems = [
  // { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
];

const Sidebar = () => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  if (!user) return null;

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between items-center h-full">
      <div className="my-6 w-full px-4">
        {/* User Profile Section */}
        <div className="text-center mb-6">
          <div className="mx-auto w-16 h-16">
            <img
              src={user.imageUrl}
              alt="User avatar"
              className="w-16 h-16 rounded-full border border-gray-200"
            />
          </div>
          <h1 className="mt-3 font-semibold text-lg text-gray-800">
            {user.fullName}
          </h1>
          <div className="mt-1 inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
            <Protect plan="premium" fallback="Free Plan">
              Member
            </Protect>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-1">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              className={({ isActive }) =>
                `px-3 py-2 flex items-center gap-3 rounded transition-colors duration-150
                ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
      {/* Bottom Profile Bar */}
      <div className="w-full border-t border-gray-200 p-4">
        <div
          onClick={openUserProfile}
          className="flex gap-3 items-center cursor-pointer p-2 rounded hover:bg-gray-50 transition-colors duration-150"
        >
          <img
            src={user.imageUrl}
            className="w-10 h-10 rounded-full border border-gray-200"
            alt="User profile"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate text-sm">
              {user.fullName}
            </h3>
            <p className="text-xs text-gray-500">
              <Protect plan="premium" fallback="Free Plan">
                Member
              </Protect>
            </p>
          </div>
          <LogOut
            onClick={(e) => {
              e.stopPropagation();
              toast.success("Successfully logged out!");
              signOut();
            }}
            className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors duration-150 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
