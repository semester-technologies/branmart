// src/components/marketing/contact/ContactChannels.tsx

import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";

const channels = [
  {
    icon: Mail,
    title: "Chat to sales",
    description:
      "For business inquiries, collaborations, or enterprise solutions.",
    contact: "sales@branmart.com",
    href: "mailto:sales@branmart.com",
  },
  {
    icon: MessageCircle,
    title: "Chat to support",
    description:
      "Need help with your website or account? Our team is available 24/7.",
    contact: "support@branmart.com",
    href: "mailto:support@branmart.com",
  },
  {
    icon: MapPin,
    title: "Partnerships",
    description:
      "Interested in collaborating or integrating with Branmart? Let's talk.",
    contact: "partners@branmart.com",
    href: "mailto:partners@branmart.com",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm.",
    contact: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
];

export default function ContactChannels() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase leading-tight mb-4">
            Get In Touch With The Right Team
          </h2>
          <p className="text-sm text-gray-500">
            Choose the best way to contact us based on your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="bg-[#fff6ec] rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-[#cc3602] rounded-xl flex items-center justify-center shrink-0">
                <channel.icon size={18} className="text-white" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-sm font-semibold text-[#241717]">
                  {channel.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              {/* Contact */}
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
