import { Pencil, Settings, Trash2 } from "lucide-react";
import { cn } from "@/src/lib/cn";
import { type Website, websiteStatusStyles } from "./types";

export default function WebsiteRow({ website }: { website: Website }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl px-4 py-3 flex items-center gap-4">
      <div
        className={cn(
          "w-12 h-12 rounded-lg shrink-0 bg-gradient-to-br",
          website.previewGradient,
        )}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-bold text-[#241717] truncate">
            {website.name}
          </p>
          <span
            className={cn(
              "text-[10px] font-semibold px-2 py-0.5 rounded-full",
              websiteStatusStyles[website.status],
            )}
          >
            {website.status === "published" ? "Published" : "Draft"}
          </span>
        </div>
        <p className="text-xs text-gray-500 truncate mt-0.5">
          {website.domain}
        </p>
      </div>
      <div className="text-xs text-gray-400 hidden sm:block shrink-0">
        {website.updated}
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <button
          aria-label="Edit website"
          className="p-1.5 text-gray-400 hover:text-[#cc3602] transition-colors"
        >
          <Pencil size={14} />
        </button>
        <button
          aria-label="Settings"
          className="p-1.5 text-gray-400 hover:text-[#cc3602] transition-colors"
        >
          <Settings size={14} />
        </button>
        <button
          aria-label="Delete website"
          className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}
