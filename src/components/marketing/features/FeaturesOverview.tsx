import Image from "next/image";

const features = [
  {
    title: "Template Library",
    description: "Industry-specific designs ready to customize.",
  },
  {
    title: "Website Builder",
    description: "Drag-and-drop tools and templates for easy design. No coding required.",
  },
  {
    title: "Custom Domains",
    description: "Connect your existing domain or buy one directly on Branmart.",
  },
  {
    title: "SEO Friendly",
    description: "Improve visibility with built-in search optimization settings.",
  },
  {
    title: "Built-In Security",
    description: "Automatic security certificates included.",
  },
  {
    title: "Analytics",
    description: "Track visits and understand your audience.",
  },
];

export default function FeaturesOverview() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#461004] uppercase leading-tight mb-4">
            Everything You <br /> Need In One Place
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Powerful tools built for individuals and businesses across industries.
          </p>
        </div>

        {/* Dashboard screenshot */}
        <div className="w-full bg-gray-100 rounded-3xl p-6 md:p-10 mb-16">
          <div className="relative w-full h-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/features-dashboard.png"
              alt="Branmart dashboard screenshot"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-3">
              {/* Orange underline accent */}
              <div className="w-8 h-0.5 bg-[#cc3602]" />
              <h3 className="font-display text-lg font-bold text-[#461004] uppercase tracking-wide">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}