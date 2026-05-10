// src/components/marketing/about/TrustedBy.tsx

export default function TrustedBy() {
  const logos = [
    { src: "/images/brands/logo-1.png", alt: "Brand 1" },
    { src: "/images/brands/logo-2.png", alt: "Brand 2" },
    { src: "/images/brands/logo-3.png", alt: "Brand 3" },
    { src: "/images/brands/logo-4.png", alt: "Brand 4" },
    { src: "/images/brands/logo-5.png", alt: "Brand 5" },
    { src: "/images/brands/logo-6.png", alt: "Brand 6" },
  ];

  return (
    <section className="w-full py-14 bg-[#241717] overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-2">
          Trusted By
        </p>
        <p className="text-sm text-gray-500">
          Trusted by small businesses, creators, and brands across industries.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#241717] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#241717] to-transparent z-10 pointer-events-none" />

        {[0, 1].map((dupe) => (
          <div
            key={dupe}
            className="flex items-center gap-16 animate-marquee shrink-0 group-hover:[animation-play-state:paused]"
            aria-hidden={dupe === 1}
          >
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-7 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}