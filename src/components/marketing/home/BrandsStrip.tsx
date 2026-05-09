// src/components/marketing/home/BrandsStrip.tsx

export default function BrandsStrip() {
  const logos = [
    { src: "/images/brands/logo-1.png", alt: "Brand 1" },
    { src: "/images/brands/logo-2.png", alt: "Brand 2" },
    { src: "/images/brands/logo-3.png", alt: "Brand 3" },
    { src: "/images/brands/logo-4.png", alt: "Brand 4" },
    { src: "/images/brands/logo-5.png", alt: "Brand 5" },
    { src: "/images/brands/logo-6.png", alt: "Brand 6" },
  ];

  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      {/* Label */}
      <p className="text-center text-xs font-semibold tracking-[0.2em] text-gray-900 uppercase mb-10">
        Trusted by businesses in every industry
      </p>

      {/* Marquee wrapper */}
      <div className="relative flex overflow-hidden group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track — duplicated for seamless loop */}
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
                className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}