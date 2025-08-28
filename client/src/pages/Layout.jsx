import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";
const Layout = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  return user ? (
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200 bg-white">
        <div
          className="cursor-pointer flex items-center"
          onClick={() => navigate("/")}
        >
          <div className="px-4 py-2 border border-gray-300 rounded-lg">
            <span className="font-bold text-2xl text-gray-900">Creativo</span>
          </div>
        </div>
      </nav>
      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar />
        <div className="flex-1 bg-purple-100">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;
