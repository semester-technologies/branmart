// src/components/marketing/features/DesignFreedom.tsx

import { CheckCircle } from "lucide-react";

const points = [
  "Drag-and-drop editor for real-time editing.",
  "Pre-built templates tailored for industries.",
  "Font, color, and layout controls.",
  "Reusable content blocks for banners and testimonials",
  "Mobile-responsive designs that look great everywhere.",
];

export default function DesignFreedom() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#461004] uppercase leading-tight mb-4">
            Design Freedom Without The <br /> Complexity
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Customize your website with flexible tools that adapt to your brand.
          </p>
        </div>

        {/* Pill cards — 2 col, 2 col, 1 centered */}
        <div className="flex flex-col gap-4">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.slice(0, 2).map((point) => (
              <PillCard key={point} text={point} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.slice(2, 4).map((point) => (
              <PillCard key={point} text={point} />
            ))}
          </div>

          {/* Row 3 — centered single */}
          <div className="flex justify-center">
            <div className="w-full sm:w-1/2">
              <PillCard text={points[4]} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function PillCard({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 bg-[#fff6ec] rounded-full px-6 py-4">
      <CheckCircle size={18} className="text-[#cc3602] shrink-0" />
      <span className="text-sm text-[#241717]">{text}</span>
    </div>
  );
}