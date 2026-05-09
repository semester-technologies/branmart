// src/components/marketing/features/FeaturesAccordion.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronUp, ChevronDown, Layers, MessageCircle, CalendarCheck, Mail, MapPin, Globe } from "lucide-react";
import { cn } from "@/src/lib/cn";

const items = [
  {
    icon: Layers,
    title: "Multi-Page Website Builder",
    description:
      "Create a full website with dedicated pages for Home, About, Services, Contact, Pricing, and more. Organize your business information the way customers expect to find it.",
    tags: ["Drag-and-drop sections", "Pre-built page templates", "Custom page ordering"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Add a floating WhatsApp button to your website so customers can message you instantly. Set custom greeting messages and availability hours.",
    tags: ["One-tap messaging", "Custom greetings", "Availability scheduling"],
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Let customers book appointments directly from your website. Set available time slots, receive notifications, and manage bookings from your dashboard.",
    tags: ["Calendar widget", "Email notifications", "Time slot management"],
  },
  {
    icon: Mail,
    title: "Contact Forms",
    description: "Capture leads with customizable contact forms. Get instant email notifications when someone reaches out, and manage all messages from one inbox.",
    tags: ["Customizable fields", "Spam protection", "Email notifications"],
  },
  {
    icon: MapPin,
    title: "Google Maps Embed",
    description: "Help customers find your physical location with an interactive Google Maps widget. Just enter your address and we handle the rest.",
    tags: ["Interactive map", "Directions link", "Multiple locations"],
  },
  {
    icon: Globe,
    title: "Custom Domains & Subdomains",
    description: "Use your own web address (like www.mybusiness.com) or start with a free Branmart subdomain. We guide you through the simple setup process.",
    tags: ["Free subdomain", "Custom domain support", "Automatic security"],
  },
];

export default function FeaturesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full py-20 px-4 bg-[#241717]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-4">
            Do More With Branmart
          </h2>
          <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
            Powerful features built to simplify online presence and boost conversions.
          </p>
        </div>

        {/* Two-column */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left: photo */}
          <div className="w-full lg:w-[420px] shrink-0">
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/images/features-person.png"
                alt="Business owner"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: accordion */}
          <div className="flex-1 flex flex-col gap-3">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={item.title}
                  onClick={() => setOpen(i)}
                  className={cn(
                    "w-full text-left rounded-2xl px-5 py-4 transition-colors",
                    isOpen ? "bg-white" : "bg-[#2e2121] hover:bg-[#3a2828]"
                  )}
                >
                  {/* Header row */}
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-[#fff3e7] rounded-lg flex items-center justify-center shrink-0">
                      <item.icon size={17} className="text-[#cc3602]" />
                    </div>
                    <span
                      className={cn(
                        "flex-1 text-sm font-semibold",
                        isOpen ? "text-[#241717]" : "text-white"
                      )}
                    >
                      {item.title}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={16} className="text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-gray-400 shrink-0" />
                    )}
                  </div>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="mt-4 pl-[52px] flex flex-col gap-3">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-[#cc3602] bg-[#fff3e7] border border-orange-100 px-3 py-1 rounded-full"
                            >
                              ✓ {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}