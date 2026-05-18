"use client";

import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  MoreVertical,
  Pencil,
  Settings,
  Trash2,
} from "lucide-react";
import { cn } from "@/src/lib/cn";

interface WebsiteActionsMenuProps {
  websiteId: string;
  domain: string;
  align?: "left" | "right";
}

export default function WebsiteActionsMenu({
  domain,
  align = "right",
}: WebsiteActionsMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Website actions"
        className="p-1.5 text-gray-400 hover:text-[#241717] hover:bg-gray-100 rounded-lg transition-colors"
      >
        <MoreVertical size={16} />
      </button>

      {open && (
        <div
          className={cn(
            "absolute top-full mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 z-30",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left">
            <Settings size={14} className="text-gray-400" />
            Settings
          </button>
          <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left">
            <Pencil size={14} className="text-gray-400" />
            Edit Website
          </button>
          <a
            href={`https://${domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
          >
            <ExternalLink size={14} className="text-gray-400" />
            Visit Site
          </a>
          <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors text-left">
            <Trash2 size={14} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
