"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bell,
  AlertTriangle,
  MessageSquare,
  CreditCard,
  CheckCheck,
  X,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/src/lib/cn";

interface Notification {
  id: number;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  timeAgo: string;
  business: string;
  actionLabel: string;
  unread: boolean;
}

const notifications: Notification[] = [
  {
    id: 1,
    icon: AlertTriangle,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    title: "Trial expiring soon",
    description:
      "Sarah's Wellness Studio trial ends in 5 days. Upgrade to keep your site live.",
    timeAgo: "1h ago",
    business: "Sarah's Wellness Studio",
    actionLabel: "Upgrade now",
    unread: true,
  },
  {
    id: 2,
    icon: MessageSquare,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "New lead received",
    description:
      "John Peterson submitted a contact form on Mitchell Dental Clinic.",
    timeAgo: "2h ago",
    business: "Mitchell Dental Clinic",
    actionLabel: "View lead",
    unread: true,
  },
  {
    id: 3,
    icon: CreditCard,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    title: "Payment failed",
    description:
      "We couldn't process payment for Downtown Coffee Co. Please update your payment method.",
    timeAgo: "3h ago",
    business: "Downtown Coffee Co.",
    actionLabel: "Update payment",
    unread: true,
  },
  {
    id: 4,
    icon: CreditCard,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    title: "Payment received",
    description:
      "Your Pro plan payment of $19.00 for Mitchell Dental Clinic was processed successfully.",
    timeAgo: "1d ago",
    business: "Mitchell Dental Clinic",
    actionLabel: "View receipt",
    unread: false,
  },
];

type Tab = "all" | "unread";

export default function NotificationsPanel() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("all");
  const [items, setItems] = useState(notifications);
  const ref = useRef<HTMLDivElement>(null);

  const unreadCount = items.filter((n) => n.unread).length;
  const visible = tab === "all" ? items : items.filter((n) => n.unread);

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

  function markAllRead() {
    setItems((curr) => curr.map((n) => ({ ...n, unread: false })));
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Notifications"
        className="relative p-2 rounded-full hover:bg-gray-50 transition-colors"
      >
        <Bell size={18} className="text-gray-600" />
        {unreadCount > 0 && (
          <span className="absolute top-0.5 right-0.5 min-w-[18px] h-[18px] px-1 bg-[#cc3602] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-[360px] bg-white border border-gray-100 rounded-2xl shadow-lg z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-[#241717]">
                Notifications
              </h3>
              {unreadCount > 0 && (
                <span className="text-xs font-semibold text-[#cc3602]">
                  {unreadCount} new
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  aria-label="Mark all as read"
                  className="p-1.5 text-gray-400 hover:text-[#cc3602] transition-colors"
                >
                  <CheckCheck size={16} />
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 px-3 pt-3">
            <button
              onClick={() => setTab("all")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                tab === "all"
                  ? "bg-gray-100 text-[#241717]"
                  : "text-gray-500 hover:text-[#241717]",
              )}
            >
              All
            </button>
            <button
              onClick={() => setTab("unread")}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                tab === "unread"
                  ? "bg-gray-100 text-[#241717]"
                  : "text-gray-500 hover:text-[#241717]",
              )}
            >
              Unread{unreadCount > 0 && `(${unreadCount})`}
            </button>
          </div>

          {/* List */}
          <div className="max-h-[420px] overflow-y-auto py-2">
            {visible.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <Bell size={28} className="text-gray-300" />
                <p className="text-sm text-gray-400">No unread notifications</p>
              </div>
            ) : (
              visible.map((n) => (
                <div
                  key={n.id}
                  className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50/60 transition-colors"
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                      n.iconBg,
                    )}
                  >
                    <n.icon size={16} className={n.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-[#241717]">
                        {n.title}
                      </p>
                      {n.unread && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cc3602] shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mt-0.5">
                      {n.description}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 text-[11px]">
                      <span className="flex items-center gap-1 text-gray-400">
                        <Clock size={11} />
                        {n.timeAgo}
                      </span>
                      <span className="text-gray-400 truncate">
                        {n.business}
                      </span>
                      <button className="ml-auto text-[#cc3602] font-medium hover:underline shrink-0">
                        {n.actionLabel}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
