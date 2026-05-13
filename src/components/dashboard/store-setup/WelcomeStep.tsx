// src/components/dashboard/store-setup/WelcomeStep.tsx

import Link from "next/link";
import { Palette, Sparkles, Globe, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Palette,
    title: "Choose a template",
    description: "Pick a design that matches your business",
  },
  {
    icon: Sparkles,
    title: "Customize your site",
    description: "Add your branding, content, and details",
  },
  {
    icon: Globe,
    title: "Go live",
    description: "Publish your website and share it with the world",
  },
];

export default function WelcomeStep() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-12 overflow-hidden">

      {/* Faint watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none">
        <Image
          src="/Branmart-Logo.png"
          alt=""
          width={400}
          height={400}
          style={{ height: "auto", width: "auto" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center gap-8">

        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold text-[#241717] mb-3">
            Welcome to Branmart!
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Let's get your professional website up and running. <br />
            Here's what we'll do together:
          </p>
        </div>

        {/* Step cards */}
        <div className="w-full flex flex-col gap-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 text-left"
            >
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                <step.icon size={18} className="text-[#cc3602]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#241717]">{step.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Time estimate */}
        <p className="flex items-center gap-1.5 text-xs text-gray-400">
          <Clock size={13} />
          Takes about 5 minutes
        </p>

        {/* CTA */}
        <Link
          href="/store-setup/plan"
          className="w-full flex items-center justify-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium py-4 rounded-xl transition-colors"
        >
          Let's Start
          <ArrowRight size={15} />
        </Link>

        {/* Skip */}
        <Link
          href="/dashboard"
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          I'll do this later
        </Link>

      </div>
    </div>
  );
}