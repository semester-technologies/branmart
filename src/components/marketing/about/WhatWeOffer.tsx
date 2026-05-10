// src/components/marketing/about/WhatWeOffer.tsx

import { Globe, Pen, CreditCard, HeadphonesIcon } from "lucide-react";

const offers = [
  {
    icon: Globe,
    title: "All-in-One Platform",
    description: "Build, host, and manage your website from one dashboard.",
  },
  {
    icon: Pen,
    title: "Flexible Design Tools",
    description: "Choose a template, customize layouts, and make it your own.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Accept payments confidently with global gateways.",
  },
  {
    icon: HeadphonesIcon,
    title: "Growth Support",
    description: "Get insights, guides, and analytics to improve your business.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="w-full py-20 px-4 bg-[#241717]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-4">
            What We Offer
          </h2>
          <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
            Everything you need to build, manage, and grow your online business in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-[#2e2121] rounded-2xl p-6 flex flex-col gap-4"
            >
              <offer.icon size={24} className="text-[#cc3602]" />
              <div>
                <p className="text-sm font-semibold text-white mb-2">
                  {offer.title}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}