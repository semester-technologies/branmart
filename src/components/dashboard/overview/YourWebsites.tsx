import Link from "next/link";
import { ArrowRight, ExternalLink, Pencil } from "lucide-react";
import { cn } from "@/src/lib/cn";

type WebsiteStatus = "published" | "draft";

interface Website {
  id: string;
  name: string;
  url: string;
  status: WebsiteStatus;
  previewGradient: string;
}

const websites: Website[] = [
  {
    id: "mitchell-dental",
    name: "Mitchell Dental Clinic",
    url: "mitchelldental.com",
    status: "published",
    previewGradient: "from-blue-200 to-cyan-100",
  },
  {
    id: "sarah-wellness",
    name: "Sarah's Wellness Blog",
    url: "sarahwellness.branmart.com",
    status: "draft",
    previewGradient: "from-gray-200 to-slate-100",
  },
];

const statusStyles: Record<WebsiteStatus, string> = {
  published: "bg-green-50 text-green-600",
  draft:     "bg-gray-100 text-gray-500",
};

export default function YourWebsites() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-[#241717]">Your Websites</h2>
        <Link
          href="/websites"
          className="text-sm font-medium text-[#cc3602] flex items-center gap-1 hover:underline"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {websites.map((w) => (
          <div
            key={w.id}
            className="bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3"
          >
            <div
              className={cn(
                "w-14 h-14 rounded-xl shrink-0 bg-gradient-to-br",
                w.previewGradient,
              )}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-semibold text-[#241717] truncate">
                  {w.name}
                </p>
                <span
                  className={cn(
                    "text-[10px] font-semibold px-2 py-0.5 rounded-full",
                    statusStyles[w.status],
                  )}
                >
                  {w.status === "published" ? "Published" : "Draft"}
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate mt-0.5">{w.url}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Link
                href={`/websites/${w.id}/edit`}
                aria-label="Edit website"
                className="p-1.5 text-gray-400 hover:text-[#cc3602] transition-colors"
              >
                <Pencil size={14} />
              </Link>
              <a
                href={`https://${w.url}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open website"
                className="p-1.5 text-gray-400 hover:text-[#cc3602] transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
