import Link from "next/link";
import { Plus } from "lucide-react";

interface WebsitesHeaderProps {
  used: number;
  limit: number;
}

export default function WebsitesHeader({ used, limit }: WebsitesHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 flex-wrap">
      <div>
        <h1 className="text-3xl font-bold text-[#241717] mb-1">My Websites</h1>
        <p className="text-sm text-gray-500">
          {used} of {limit} websites used
        </p>
      </div>
      <Link
        href="/websites/new"
        className="inline-flex items-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium px-5 py-3 rounded-xl transition-colors shrink-0"
      >
        <Plus size={18} />
        Create Website
      </Link>
    </div>
  );
}
