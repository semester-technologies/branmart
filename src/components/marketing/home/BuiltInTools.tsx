import Image from "next/image";

const tools = [
  {
    label: "WhatsApp Chat",
    description:
      "Add a floating WhatsApp button so customers can message you instantly. No plugins needed.",
    image: "/images/features/whatsapp-ui.png",
    imageAlt: "WhatsApp chat UI screenshot",
    reverse: false,
  },
  {
    label: "Appointment Booking",
    description:
      "Embed a booking widget directly on your site. Customers pick a time and you get notified.",
    image: "/images/features/booking-ui.png",
    imageAlt: "Appointment booking UI screenshot",
    reverse: true,
  },
  {
    label: "Google Maps",
    description:
      "Help customers find you with an interactive map embedded right on your contact page.",
    image: "/images/features/maps-ui.png",
    imageAlt: "Google Maps UI screenshot",
    reverse: false,
  },
];

export default function BuiltInTools() {
  return (
    <section className="w-full py-20 px-4 bg-[#241717]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-[#cc3602] mb-3">
            Built-in business tools
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight">
            Connect WhatsApp, Accept Bookings, and Show <br />
            Your Location — All Without Extra Tools.
          </h2>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-24">
          {tools.map((tool) => (
            <div
              key={tool.label}
              className={`flex flex-col gap-10 items-center ${
                tool.reverse
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#cc3602] uppercase tracking-wide">
                  {tool.label}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                  {tool.description}
                </p>
              </div>

              {/* Image card */}
              <div className="flex-1 w-full">
                <div className="relative w-full h-[260px] bg-white rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={tool.image}
                    alt={tool.imageAlt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}