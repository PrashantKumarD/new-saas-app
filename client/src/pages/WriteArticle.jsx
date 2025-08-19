import React, { useState } from "react";
import { Edit, Sparkles } from "lucide-react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const WriteArticle = () => {
  const articleLength = [
    {
      length: 800,
      text: "Short (500-800 word)",
    },
    {
      length: 1200,
      text: "Medium (1000-1200 word)",
    },
    {
      length: 1600,
      text: "Long (1500-1600 word)",
    },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0].length);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const prompt = `Write an article about ${input} in ${selectedLength.text} words.`;

      const { data } = await axios.post(
        "/api/ai/generate-article",
        { prompt, length: selectedLength.length },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );

      if (data.success) {
        setContent(data.content);
        toast.success("Article successfully generated!");
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
          className="w-full max-w-lg p-4 bg-white rounded border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 text-blue-600" />
            <h1 className="text-xl font-semibold">Write an Article</h1>
          </div>
          <p className="mt-3 text-sm font-medium">What should it be about?</p>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="w-full p-2 px-3 mt-2 outline-none text-sm rounded border border-gray-200"
            placeholder='Like "how to bake cookies" or whatever...'
            required
          />
          <p className="mt-3 text-sm font-medium">Article Length</p>
          <div className="mt-2 flex gap-3 flex-wrap sm:max-w-9/11">
            {articleLength.map((item, index) => (
              <span
                onClick={() => setSelectedLength(item)}
                className={`text-xs px-4 py-1 border rounded cursor-pointer ${
                  selectedLength.text === item.text
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-500 border-gray-300"
                }`}
                key={index}
              >
                {item.text}
              </span>
            ))}
          </div>
          <br />
          <button
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2 mt-6 text-sm rounded hover:bg-blue-700 transition-colors"
          >
            {loading ? (
              <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
            ) : (
              <Edit className="w-5" />
            )}
            Generate Article
          </button>
        </form>
      }
      {
        <div className="w-full max-w-lg p-4 bg-white rounded flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
          <div className="flex items-center gap-3">
            <Edit className="w-5 h-5 text-[#4A7AFF]" />
            <h1 className="text-xl font-semibold">Your Article</h1>
          </div>

          {!content ? (
            <div className="flex-1 flex justify-center items-center ">
              <div className="text-sm flex flex-col items-center gap-5 text-slate-500">
                <p>Tell me what to write about and I'll get started</p>
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

export default WriteArticle;
