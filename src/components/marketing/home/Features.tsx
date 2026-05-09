import {
  FileText,
  Palette,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Multi-Page Builder",
    description:
      "Create multiple pages — Home, About, Services, Contact, and more.",
  },
  {
    icon: Palette,
    title: "Template Customization",
    description:
      "Professional templates you can customize with your brand in minutes.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Let customers message you directly from your website.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Built-in scheduling so clients can book time with you.",
  },
  {
    icon: MapPin,
    title: "Google Maps Embed",
    description: "Show your business location with an interactive map.",
  },
  {
    icon: Globe,
    title: "Custom Web Address",
    description: "Use your own domain name for a professional look.",
  },
];

export default function Features() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase leading-tight mb-4">
            Everything You Need For <br /> Your Online Office
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">
            Branmart gives you all the tools to create, manage, and grow your
            business website.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-sm transition-shadow"
            >
              {/* Icon box */}
              <div className="w-10 h-10 bg-[#fff3e7] rounded-lg flex items-center justify-center shrink-0">
                <feature.icon size={18} className="text-[#cc3602]" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-[#241717] mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}