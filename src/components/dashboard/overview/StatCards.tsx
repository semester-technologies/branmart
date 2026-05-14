import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Eye,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  href: string;
  growth?: string;
}

const stats: Stat[] = [
  {
    label: "Websites",
    value: "2",
    icon: Globe,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    href: "/websites",
  },
  {
    label: "New Leads",
    value: "3",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    href: "/leads",
    growth: "+12%",
  },
  {
    label: "Upcoming",
    value: "4",
    icon: Calendar,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    href: "/appointments",
  },
  {
    label: "Total Visits",
    value: "1,247",
    icon: Eye,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    href: "/dashboard",
    growth: "+8%",
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Link
          key={stat.label}
          href={stat.href}
          className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-4 hover:border-gray-200 transition-colors group"
        >
          <div className="flex items-start justify-between">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.iconBg}`}
            >
              <stat.icon size={18} className={stat.iconColor} />
            </div>
            <ArrowUpRight
              size={16}
              className="text-gray-300 group-hover:text-[#cc3602] transition-colors"
            />
          </div>
          <div>
            <p className="text-3xl font-bold text-[#241717]">{stat.value}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
              {stat.label}
              {stat.growth && (
                <span className="inline-flex items-center gap-0.5 text-green-500 font-semibold">
                  <TrendingUp size={11} />
                  {stat.growth}
                </span>
              )}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
