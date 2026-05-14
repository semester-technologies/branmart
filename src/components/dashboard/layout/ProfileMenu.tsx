"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  User,
  Building2,
  CreditCard,
  LogOut,
} from "lucide-react";
import { cn } from "@/src/lib/cn";
import SignOutModal from "./SignOutModal";

const profile = {
  name: "Sarah Mitchell",
  email: "sarah@mitchelldental.com",
  initials: "SM",
};

const menuItems = [
  { label: "Profile Settings", href: "/settings",   icon: User       },
  { label: "All Businesses",   href: "/businesses", icon: Building2  },
  { label: "Billing",          href: "/billing",    icon: CreditCard },
];

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const [signOutOpen, setSignOutOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  function handleSignOut() {
    setSignOutOpen(false);
    router.push("/sign-in");
  }

  return (
    <>
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 px-1.5 py-1 rounded-full hover:bg-gray-50 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center text-xs font-semibold">
            {profile.initials}
          </div>
          <span className="text-sm font-medium text-[#241717] hidden sm:block">
            {profile.name}
          </span>
          <ChevronDown
            size={14}
            className={cn(
              "text-gray-400 transition-transform",
              open && "rotate-180",
            )}
          />
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-lg py-2 z-50">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-[#241717]">
                {profile.name}
              </p>
              <p className="text-xs text-gray-500 truncate">{profile.email}</p>
            </div>

            <div className="py-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setOpen(false);
                    router.push(item.href);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                >
                  <item.icon size={15} className="text-gray-400" />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="border-t border-gray-100 py-1">
              <button
                onClick={() => {
                  setOpen(false);
                  setSignOutOpen(true);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors text-left"
              >
                <LogOut size={15} />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>

      <SignOutModal
        open={signOutOpen}
        onClose={() => setSignOutOpen(false)}
        onConfirm={handleSignOut}
      />
    </>
  );
}
