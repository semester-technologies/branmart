// src/components/marketing/features/SecuritySection.tsx

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const points = [
  "SSL encryption for all websites.",
  "Automatic backups and updates.",
  "High-speed cloud hosting.",
  "Secure checkout and data protection.",
  "99.9% uptime guarantee.",
];

export default function SecuritySection() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left: image */}
        <div className="w-full lg:w-[420px] shrink-0">
          <div className="relative w-full h-[460px] rounded-3xl overflow-hidden">
            <Image
              src="/images/features-security.png"
              alt="Business owner in her store"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: text */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#461004] uppercase leading-tight mb-3">
              Fast, Reliable, And Secure
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Your website stays safe and performs at its best every time.
            </p>
          </div>

          {/* Checklist */}
          <div className="flex flex-col divide-y divide-gray-100">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 py-4">
                <CheckCircle size={18} className="text-[#cc3602] shrink-0" />
                <span className="text-sm text-gray-600">{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}