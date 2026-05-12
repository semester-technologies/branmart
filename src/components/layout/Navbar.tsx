"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  HelpCircle,
  Headphones,
  Lock,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/cn";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

const navLinks: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "#",
    children: [
      {
        label: "Blog",
        description: "Tips on e-commerce, design, and marketing",
        href: "/blog",
        icon: BookOpen,
      },
      {
        label: "Help Centre",
        description: "Articles on setup, payments, customization, troubleshooting",
        href: "/help-centre",
        icon: HelpCircle,
      },
      {
        label: "Contact Us",
        description: "Get in touch with us, our team is ready to assist.",
        href: "/contact-us",
        icon: Headphones,
      },
      {
        label: "Privacy Policy",
        description: "Learn about data collection, usage, and protection.",
        href: "/privacy-policy",
        icon: Lock,
      },
    ],
  },
  { label: "About", href: "/about-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setResourcesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* ── Logo ── */}
        <Link href="/">
          <Image
            src="/Branmart-Logo.png"
            alt="Branmart"
            width={120}
            height={32}
            priority
            style={{ height: "auto", width: "auto" }}
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-7 flex-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" ref={resourcesRef}>
                <button
                  onClick={() => setResourcesOpen((p) => !p)}
                  className={cn(
                    "flex items-center gap-1 text-sm transition-colors",
                    resourcesOpen
                      ? "text-[#cc3602]"
                      : "text-gray-700 hover:text-[#cc3602]"
                  )}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={cn("transition-transform", resourcesOpen && "rotate-180")}
                  />
                </button>

                {resourcesOpen && (
                  <div className="absolute top-8 left-0 w-72 bg-white border border-gray-100 rounded-2xl shadow-lg py-3 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setResourcesOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-orange-50 transition-colors rounded-xl mx-1"
                      >
                        {child.icon && (
                          <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <child.icon size={15} className="text-[#cc3602]" />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-[#241717]">{child.label}</p>
                          {child.description && (
                            <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                              {child.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  pathname.startsWith(link.href)
                    ? "text-[#cc3602] font-medium"
                    : "text-gray-700 hover:text-[#cc3602]",
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Link
            href="/sign-in"
            className="text-sm text-gray-700 hover:text-[#cc3602] transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-5 py-2.5 rounded-full transition-colors"
          >
            Start for free
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

{/* ── Mobile menu ── */}
{mobileOpen && (
  <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
    {navLinks.map((link) =>
      link.children ? (
        <div key={link.label}>
          <button
            onClick={() => setResourcesOpen((p) => !p)}
            className="flex items-center gap-1 text-sm text-gray-700 w-full"
          >
            {link.label}
            <ChevronDown
              size={14}
              className={cn("transition-transform", resourcesOpen && "rotate-180")}
            />
          </button>
          {resourcesOpen && (
            <div className="pl-2 mt-3 flex flex-col gap-1">
              {link.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={() => {
                    setMobileOpen(false);
                    setResourcesOpen(false);
                  }}
                  className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-orange-50 transition-colors"
                >
                  {child.icon && (
                    <div className="w-7 h-7 bg-orange-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <child.icon size={14} className="text-[#cc3602]" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[#241717]">{child.label}</p>
                    {child.description && (
                      <p className="text-xs text-gray-400 mt-0.5">{child.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          key={link.label}
          href={link.href}
          onClick={() => setMobileOpen(false)}
          className={cn(
            "text-sm transition-colors",
            pathname.startsWith(link.href)
              ? "text-[#cc3602] font-medium"
              : "text-gray-700 hover:text-[#cc3602]",
          )}
        >
          {link.label}
        </Link>
      )
    )}

    <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
      <Link
        href="/sign-in"
        onClick={() => setMobileOpen(false)}
        className="text-sm text-gray-700 hover:text-[#cc3602]"
      >
        Log in
      </Link>
      <Link
        href="/sign-up"
        onClick={() => setMobileOpen(false)}
        className="text-sm font-medium text-center text-white bg-[#cc3602] hover:bg-[#e65a29] px-5 py-2.5 rounded-full transition-colors"
      >
        Start for free
      </Link>
    </div>
  </div>
)}
    </header>
  );
}