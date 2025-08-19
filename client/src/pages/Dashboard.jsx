import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkles } from "lucide-react";
import { Protect, useAuth } from "@clerk/clerk-react";
import CreationItems from "../components/CreationItems";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();
  const getDashboardData = async () => {
    try {
      const { data } = await axios.get("/api/user/get-user-creations", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    getDashboardData();
  }, []);
  return (
    <div className="h-full overflow-y-scroll p-8 bg-purple-100">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-bold text-3xl text-gray-900 mb-2">Hey there! 👋</h1>
        <p className="text-gray-600 text-lg">
          Here's all the stuff you've created so far
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start">
            <div className="text-slate-700">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Total Creations
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                {creations.length}
              </h2>
              <p className="text-xs text-green-600 mt-1 font-medium">
                ↗ +12% this month
              </p>
            </div>
            <div className="w-12 h-12 rounded bg-blue-100 text-blue-600 flex justify-center items-center">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start">
            <div className="text-slate-700">
              <p className="text-sm font-medium text-gray-500 mb-1">
                Active Plan
              </p>
              <h2 className="text-2xl font-bold text-gray-900">
                <Protect plan="premium" fallback="Free">
                  Premium
                </Protect>
              </h2>
              <p className="text-xs text-blue-600 mt-1 font-medium">
                <Protect plan="premium" fallback="Upgrade available">
                  All features unlocked
                </Protect>
              </p>
            </div>
            <div className="w-12 h-12 rounded bg-gray-100 text-gray-600 flex justify-center items-center">
              <Gem className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex justify-between items-start">
            <div className="text-slate-700">
              <p className="text-sm font-medium text-gray-500 mb-1">
                This Week
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                {Math.min(creations.length, 15)}
              </h2>
              <p className="text-xs text-gray-600 mt-1 font-medium">
                Creations made
              </p>
            </div>
            <div className="w-12 h-12 rounded bg-gray-100 text-gray-600 flex justify-center items-center">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600"></div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-2xl text-gray-900">Your Stuff</h3>
            <div className="text-sm text-gray-500">
              {creations.length} things made
            </div>
          </div>

          <div className="space-y-4">
            {creations.length > 0 ? (
              creations.map((item) => (
                <CreationItems key={item.id} item={item} />
              ))
            ) : (
              <div className="bg-white p-12 text-center rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-xl text-gray-900 mb-2">
                  Nothing here yet!
                </h4>
                <p className="text-gray-600 mb-4">
                  Try making something cool with the AI tools
                </p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Make Something Cool
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
