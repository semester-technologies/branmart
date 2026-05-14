import Link from "next/link";
import { cn } from "@/src/lib/cn";

type LeadStatus = "new" | "contacted" | "closed";

interface Lead {
  id: string;
  name: string;
  initials: string;
  source: string;
  status: LeadStatus;
}

const leads: Lead[] = [
  { id: "1", name: "John Peterson",  initials: "JP", source: "Contact Form",   status: "new"       },
  { id: "2", name: "Emily Watson",   initials: "EW", source: "WhatsApp",       status: "contacted" },
  { id: "3", name: "Michael Torres", initials: "MT", source: "Booking Widget", status: "new"       },
  { id: "4", name: "Lisa Chen",      initials: "LC", source: "Contact Form",   status: "closed"    },
  { id: "5", name: "Robert Kim",     initials: "RK", source: "Contact Form",   status: "contacted" },
];

const statusStyles: Record<LeadStatus, string> = {
  new:       "text-blue-500",
  contacted: "text-orange-500",
  closed:    "text-gray-400",
};

export default function RecentLeads() {
  return (
    <section className="bg-white border border-gray-100 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#241717]">Recent Leads</h2>
        <Link
          href="/leads"
          className="text-sm font-medium text-[#cc3602] hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {leads.map((lead) => (
          <div key={lead.id} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-semibold shrink-0">
              {lead.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#241717] truncate">
                {lead.name}
              </p>
              <p className="text-xs text-gray-400">{lead.source}</p>
            </div>
            <span
              className={cn(
                "text-xs font-medium shrink-0",
                statusStyles[lead.status],
              )}
            >
              {lead.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
