import { useAuth } from "@clerk/clerk-react";
import { Hash, Sparkles } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
const BlogTitles = () => {
  const blogCategories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
  ];

  const [selctedCategory, setSelectedCategory] = useState("General");
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const prompt = `Generate blog titles for the keyword "${input}" in the category "${selctedCategory}".`;

      const { data } = await axios.post(
        "/api/ai/generate-blog-title",
        { prompt },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );

      if (data.success) {
        setContent(data.content);
        toast.success("Blog titles successfully generated!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(data.message);
    }
    setLoading(false);
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700 bg-purple-100">
      {
        <form
          onSubmit={onSubmitHandler}
          className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 text-[#8E37EB]" />
            <h1 className="text-xl font-semibold">Make Blog Titles</h1>
          </div>
          <p className="mt-3 text-sm font-medium">What's your blog about?</p>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-200"
            placeholder='Like "cooking tips" or something...'
            required
          />
          <p className="mt-3 text-sm font-medium">Pick a category</p>
          <div className="mt-2 flex gap-3 flex-wrap sm:max-w-9/11">
            {blogCategories.map((item) => (
              <span
                onClick={() => setSelectedCategory(item)}
                className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                  selctedCategory === item
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-500 border-gray-300"
                }`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <br />

          <button
            disabled={loading}
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer transition-colors"
          >
            {loading ? (
              <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
            ) : (
              <Hash className="w-5" />
            )}{" "}
            Generate Title
          </button>
        </form>
      }
      {
        <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 ">
          <div className="flex items-center gap-3">
            <Hash className="w-5 h-5 text-[#4A7AFF]" />
            <h1 className="text-xl font-semibold">Your Titles</h1>
          </div>
          {!content ? (
            <div className="flex-1 flex justify-center items-center ">
              <div className="text-sm flex flex-col items-center gap-5 text-slate-500">
                <p>Just fill out the form and I'll make some titles for you</p>
              </div>
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-600">
              <div className="reset-tw">
                <Markdown>{content}</Markdown>
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default BlogTitles;
