"use client";

import { useState } from "react";
import WebsitesHeader from "./WebsitesHeader";
import WebsitesToolbar, {
  type StatusFilter,
  type ViewMode,
} from "./WebsitesToolbar";
import WebsiteCard from "./WebsiteCard";
import WebsiteRow from "./WebsiteRow";
import { type Website } from "./types";

const websites: Website[] = [
  {
    id: "riamly",
    name: "Riamly Beauty",
    domain: "riamlybeauty.branmart.com",
    status: "draft",
    updated: "2026-03-04",
    previewGradient: "from-amber-100 to-rose-100",
  },
  {
    id: "mitchell",
    name: "Mitchell Dental Clinic",
    domain: "mitchelldental.com",
    status: "published",
    updated: "2026-02-28",
    previewGradient: "from-blue-200 to-cyan-100",
  },
  {
    id: "sarah",
    name: "Sarah's Wellness Blog",
    domain: "sarahwellness.branmart.com",
    status: "draft",
    updated: "2026-02-25",
    previewGradient: "from-gray-200 to-slate-100",
  },
];

const LIMIT = 5;

export default function WebsitesView() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [view, setView] = useState<ViewMode>("grid");

  const query = search.trim().toLowerCase();
  const filtered = websites.filter((w) => {
    if (status !== "all" && w.status !== status) return false;
    if (
      query &&
      !w.name.toLowerCase().includes(query) &&
      !w.domain.toLowerCase().includes(query)
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-8 flex flex-col gap-6">
      <WebsitesHeader used={websites.length} limit={LIMIT} />

      <WebsitesToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        view={view}
        onViewChange={setView}
      />

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-sm text-gray-400">
          No websites match your filters.
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((w) => (
            <WebsiteCard key={w.id} website={w} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((w) => (
            <WebsiteRow key={w.id} website={w} />
          ))}
        </div>
      )}
    </div>
  );
}
