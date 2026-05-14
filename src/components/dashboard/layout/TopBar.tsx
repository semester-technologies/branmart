"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Menu, Search } from "lucide-react";
import { cn } from "@/src/lib/cn";
import NotificationsPanel from "./NotificationsPanel";
import ProfileMenu from "./ProfileMenu";

export default function TopBar({
  collapsed,
  onToggleSidebar,
  onOpenMobile,
}: {
  collapsed: boolean;
  onToggleSidebar: () => void;
  onOpenMobile: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 h-16 flex items-center gap-4 px-4 sm:px-6">
      {/* Mobile hamburger */}
      <button
        onClick={onOpenMobile}
        aria-label="Open menu"
        className="md:hidden p-1.5 -ml-1 text-gray-600 hover:text-[#241717] transition-colors"
      >
        <Menu size={22} />
      </button>

      {/* Logo + collapse */}
      <div
        className={cn(
          "flex items-center gap-2 shrink-0 transition-[width] duration-200",
          collapsed ? "w-auto" : "md:w-[228px]",
        )}
      >
        <Link href="/dashboard" className="shrink-0">
          <Image
            src="/Branmart-Logo.png"
            alt="Branmart"
            width={110}
            height={28}
            style={{ height: "auto", width: "auto" }}
            priority
          />
        </Link>
        <button
          onClick={onToggleSidebar}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="p-1 text-gray-400 hover:text-gray-600 transition-colors hidden md:inline-flex"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-gray-50 border border-gray-100 rounded-full pl-11 pr-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-gray-200"
          />
        </div>
      </div>

      {/* Right cluster */}
      <div className="flex items-center gap-3 shrink-0">
        <NotificationsPanel />
        <ProfileMenu />
      </div>
    </header>
  );
}
