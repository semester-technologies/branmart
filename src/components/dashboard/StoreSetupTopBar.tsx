// src/components/dashboard/StoreSetupTopBar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/cn";

const steps = [
  { number: 1, label: "Welcome",     path: "/store-setup/welcome"         },
  { number: 2, label: "Choose Plan", path: "/store-setup/plan"            },
  { number: 3, label: "Payment",     path: "/store-setup/payment"         },
  { number: 4, label: "Confirmation",path: "/store-setup/payment-success" },
  { number: 5, label: "Template",    path: "/store-setup/theme"           },
  { number: 6, label: "Setup",       path: "/store-setup/theme-chosen"    },
];

function getActiveStep(pathname: string): number {
  if (pathname.includes("payment-success")) return 4;
  if (pathname.includes("payment"))         return 3;
  if (pathname.includes("theme-chosen"))    return 6;
  if (pathname.includes("theme"))           return 5;
  if (pathname.includes("plan"))            return 2;
  return 1;
}

export default function StoreSetupTopBar() {
  const pathname = usePathname();
  const active = getActiveStep(pathname);

  return (
    <header className="w-full bg-white border-b border-gray-100 px-6 h-16 flex items-center justify-between gap-8">

      {/* Logo */}
      <Link href="/" className="shrink-0">
        <Image
          src="/Branmart-Logo.png"
          alt="Branmart"
          width={110}
          height={28}
          style={{ height: "auto", width: "auto" }}
        />
      </Link>

      {/* Steps */}
      <nav className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
        {steps.map((step, i) => (
          <div key={step.number} className="flex items-center">

            {/* Step */}
            <div className="flex items-center gap-2 shrink-0">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors shrink-0",
                  active === step.number
                    ? "bg-[#cc3602]  text-white"
                    : active > step.number
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-400"
                )}
              >
                {active > step.number ? (
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium hidden sm:block",
                  active === step.number
                    ? "text-[#cc3602]"
                    : active > step.number
                    ? "text-gray-400"
                    : "text-gray-400"
                )}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "w-8 md:w-12 h-px mx-2 shrink-0",
                  active > step.number ? "bg-[#cc3602]" : "bg-gray-200"
                )}
              />
            )}

          </div>
        ))}
      </nav>

      {/* Spacer to balance logo */}
      <div className="w-[110px] shrink-0" />

    </header>
  );
}