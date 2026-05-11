// src/components/marketing/help-centre/NeedMoreHelp.tsx

import { MessageCircle, Mail, Phone } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Available 24/7 inside your dashboard.",
    contact: "support@branmart.com",
    href: "mailto:support@branmart.com",
  },
  {
    icon: Mail,
    title: "Email us",
    description: "Send us an email",
    contact: "support@branmart.com",
    href: "mailto:support@branmart.com",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    contact: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
];

export default function NeedMoreHelp() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-display text-4xl font-bold text-[#241717] uppercase leading-tight mb-2">
            Need More Help?
          </h2>
          <p className="text-sm text-gray-500">
            Our support team is always ready to assist you.
          </p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="bg-[#fff6ec] rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="w-10 h-10 bg-[#cc3602] rounded-xl flex items-center justify-center shrink-0">
                <channel.icon size={18} className="text-white" />
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <p className="text-sm font-semibold text-[#241717]">{channel.title}</p>
                <p className="text-sm text-gray-500">{channel.description}</p>
              </div>

              <a
                href={channel.href}
                className="text-sm font-medium text-[#cc3602] hover:underline"
              >
                {channel.contact}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}