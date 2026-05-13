// src/components/auth/AuthRightPanel.tsx

import Image from "next/image";

export default function AuthRightPanel() {
  return (
    <div className="hidden lg:flex w-[580px] shrink-0 bg-[#F07316] flex-col items-center justify-center gap-6 px-12 text-center relative overflow-hidden">

      {/* Background circles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Icon */}
      <div className="relative z-10 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
        <Image
          src="/b.png"
          alt="Branmart"
          width={40}
          height={40}
          style={{ height: "auto", width: "auto" }}
        />
      </div>

      {/* Text */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white leading-snug mb-3">
          Build your business <br /> website in minutes
        </h2>
        <p className="text-sm text-orange-100 leading-relaxed max-w-xs">
          No coding needed. Choose a template, customize it, and go live — all in under 30 minutes.
        </p>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex items-center gap-6 text-white">
        {[
          { value: "10,000+", label: "businesses" },
          { value: "99.9%",   label: "uptime"     },
          { value: "24/7",    label: "support"    },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-sm font-semibold">{stat.value}</p>
            <p className="text-xs text-orange-200">{stat.label}</p>
          </div>
        ))}
      </div>

    </div>
  );
}