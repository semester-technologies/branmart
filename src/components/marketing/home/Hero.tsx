import Image from "next/image";
import Link from "next/link";
import { Zap, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full px-4 md:py-10 flex items-center justify-center overflow-hidden">
      {/* ── Hero card ── */}
      <div className="relative z-10 w-full max-w-6xl bg-[#241717] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center min-h-[420px]">
        {/* ── Left: text content ── */}
        <div className="flex-1 px-8 py-12 md:px-14 md:py-16 flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#461004] text-white text-xs font-medium px-4 py-1.5 rounded-full w-fit">
            <Zap size={12} className="text-[#fffff] fill-[#fffff]" />
            Trusted by 5,000+ businesses
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight text-white">
            Your Business Deserves <br className="hidden sm:block" />a{" "}
            <span className="text-[#cc3602]">Professional Website</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm md:text-base text-gray-100 max-w-lg leading-relaxed">
            Build a beautiful, multi-page website for your business in minutes,
            no technical skills needed. Choose a template, customize, and go
            live.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              Start for free
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              Browse Templates
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 mt-2">
            {/* Overlapping avatars */}
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#241717] bg-gray-600 overflow-hidden"
                >
                  <Image
                    src={`/images/avatar-${i}.png`}
                    alt={`User ${i}`}
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Stars + text */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="text-[#cc3602] fill-[#cc3602]"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-100">
                4.9/5 from 500+ reviews
              </span>
            </div>
          </div>
        </div>

        {/* ── Right: hero graphic ── */}
        <div
          className="relative w-full md:w-[350px] shrink-0 flex items-center justify-end overflow-hidden"
          style={{ aspectRatio: "460 / 480" }}
        >
          <Image
            src="/images/hero-graphic.png"
            alt="Branmart hero graphic"
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover object-left"
            priority
          />
        </div>
      </div>
    </section>
  );
}
