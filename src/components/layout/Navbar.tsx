"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // 👈 add this
import { cn } from "@/src/lib/cn";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Help Centre", href: "/help-centre" },
    ],
  },
  { label: "About", href: "/about-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname(); // 👈 add this

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
              <div key={link.label} className="relative">
                <button
                  onClick={() => setResourcesOpen((p) => !p)}
                  className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#cc3602] transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={cn(
                      "transition-transform",
                      resourcesOpen && "rotate-180",
                    )}
                  />
                </button>

                {resourcesOpen && (
                  <div className="absolute top-8 left-0 w-44 bg-white border border-gray-100 rounded-xl shadow-md py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setResourcesOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-[#cc3602] hover:bg-orange-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              //   <Link
              //     key={link.label}
              //     href={link.href}
              //     className="text-sm text-gray-700 hover:text-[#cc3602] transition-colors"
              //   >
              //     {link.label}
              //   </Link>

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
            ),
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
                    className={cn(
                      "transition-transform",
                      resourcesOpen && "rotate-180",
                    )}
                  />
                </button>
                {resourcesOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-gray-600 hover:text-[#cc3602]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              //   <Link
              //     key={link.label}
              //     href={link.href}
              //     onClick={() => setMobileOpen(false)}
              //     className="text-sm text-gray-700 hover:text-[#cc3602]"
              //   >
              //     {link.label}
              //   </Link>

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
            ),
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
