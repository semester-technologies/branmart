"use client";

import { useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { BusinessProvider } from "./BusinessContext";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = useCallback(() => setCollapsed((c) => !c), []);
  const openMobile = useCallback(() => setMobileOpen(true), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <BusinessProvider>
      <div className="min-h-screen bg-gray-50/40 flex flex-col">
        <TopBar
          collapsed={collapsed}
          onToggleSidebar={toggleSidebar}
          onOpenMobile={openMobile}
        />
        <div className="flex flex-1 min-h-0">
          <Sidebar
            collapsed={collapsed}
            mobileOpen={mobileOpen}
            onCloseMobile={closeMobile}
          />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </BusinessProvider>
  );
}
