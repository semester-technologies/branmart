"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Globe,
  Users,
  Calendar,
  Link2,
  CreditCard,
  UsersRound,
  Building2,
  Settings,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/src/lib/cn";
import BusinessSwitcher from "./BusinessSwitcher";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const primaryNav: NavItem[] = [
  { label: "Dashboard",    href: "/dashboard",    icon: LayoutGrid },
  { label: "My Websites",  href: "/websites",     icon: Globe      },
  { label: "Leads",        href: "/leads",        icon: Users      },
  { label: "Appointments", href: "/appointments", icon: Calendar   },
  { label: "Domains",      href: "/domains",      icon: Link2      },
  { label: "Billing",      href: "/billing",      icon: CreditCard },
  { label: "Team",         href: "/team",         icon: UsersRound },
];

const secondaryNav: NavItem[] = [
  { label: "All Businesses", href: "/businesses", icon: Building2 },
  { label: "Settings",       href: "/settings",   icon: Settings  },
];

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors",
        active
          ? "bg-[#fff6ec] text-[#cc3602] font-semibold"
          : "text-gray-600 hover:bg-gray-50 hover:text-[#241717]",
      )}
    >
      <item.icon
        size={17}
        className={active ? "text-[#cc3602]" : "text-gray-400"}
      />
      {item.label}
    </Link>
  );
}

export default function Sidebar({
  collapsed,
  mobileOpen,
  onCloseMobile,
}: {
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    onCloseMobile();
  }, [pathname, onCloseMobile]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onCloseMobile}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[260px] shrink-0 bg-white border-r border-gray-100 flex flex-col transition-transform duration-200",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "md:sticky md:top-16 md:h-[calc(100vh-64px)] md:translate-x-0 md:z-auto md:transition-none",
          collapsed && "md:hidden",
        )}
      >
        <div className="md:hidden flex items-center justify-end px-3 pt-3 -mb-2">
          <button
            onClick={onCloseMobile}
            aria-label="Close menu"
            className="p-1.5 text-gray-500 hover:text-[#241717] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-4 border-b border-gray-100">
          <BusinessSwitcher />
        </div>

      <nav className="flex-1 px-3 py-3 flex flex-col gap-0.5 overflow-y-auto">
        {primaryNav.map((item) => (
          <NavLink key={item.href} item={item} active={isActive(item.href)} />
        ))}

        <div className="h-px bg-gray-100 my-3" />

        {secondaryNav.map((item) => (
          <NavLink key={item.href} item={item} active={isActive(item.href)} />
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <div className="bg-[#fff6ec] rounded-xl p-3">
          <p className="text-xs font-semibold text-[#241717] mb-2">Pro Plan</p>
          <button className="w-full bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-2 rounded-lg transition-colors">
            Upgrade
          </button>
        </div>
      </div>
      </aside>
    </>
  );
}
