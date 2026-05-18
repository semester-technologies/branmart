import Link from "next/link";
import { cn } from "@/src/lib/cn";
import WebsiteActionsMenu from "./WebsiteActionsMenu";
import { type Website, websiteStatusStyles } from "./types";

export default function WebsiteCard({ website }: { website: Website }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col group">
      <div className="relative aspect-video">
        <div
          className={cn("w-full h-full bg-gradient-to-br", website.previewGradient)}
        />
        <span
          className={cn(
            "absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full",
            websiteStatusStyles[website.status],
          )}
        >
          {website.status === "published" ? "Published" : "Draft"}
        </span>

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
            href={`/websites/${website.id}/edit`}
            className="bg-white text-[#cc3602] text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:bg-orange-50 transition-colors"
          >
            Edit Site
          </Link>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-bold text-[#241717] truncate flex-1">
            {website.name}
          </p>
          <WebsiteActionsMenu
            websiteId={website.id}
            domain={website.domain}
          />
        </div>
        <p className="text-xs text-gray-500 truncate mt-1">{website.domain}</p>
        <p className="text-xs text-gray-400 mt-2">Updated {website.updated}</p>
      </div>
    </div>
  );
}
