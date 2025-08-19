import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Calendar,
  Type,
  Image as ImageIcon,
  FileText,
} from "lucide-react";

const CreationItems = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const getTypeIcon = (type) => {
    switch (type) {
      case "image":
        return ImageIcon;
      case "blog-title":
        return Type;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "image":
        return "bg-green-500";
      case "blog-title":
        return "bg-purple-500";
      case "article":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const TypeIcon = getTypeIcon(item.type);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div
        onClick={() => setExpanded(!expanded)}
        className="p-6 cursor-pointer hover:bg-gray-50"
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-lg ${getTypeColor(
                  item.type
                )} flex items-center justify-center`}
              >
                <TypeIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 line-clamp-2 leading-tight">
                  {item.prompt}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(item.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <TypeIcon className="w-4 h-4" />
                <span className="capitalize">
                  {item.type.replace("-", " ")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(
                item.type
              )} text-white`}
            >
              {item.type.replace("-", " ").toUpperCase()}
            </span>

            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              {expanded ? (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-600" />
              )}
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="p-6">
            <h4 className="font-medium text-gray-900 mb-3">
              Generated Content
            </h4>
            {item.type === "image" ? (
              <div className="rounded-lg overflow-hidden bg-white p-4 border border-gray-200">
                <img
                  src={item.content}
                  alt="Generated content"
                  className="w-full max-w-md rounded mx-auto block"
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-gray-700">
                  <p className="whitespace-pre-wrap">{item.content}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreationItems;
