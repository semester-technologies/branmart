// app/not-found.tsx

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-[calc(100vh-64px)] bg-[#fff6ec] flex items-center px-8 md:px-16">
        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left */}
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[120px] md:text-[160px] font-bold text-[#241717] leading-none">
              404
            </h1>
            <h2 className="font-body text-6xl md:text-4xl font-bold text-[#241717]">
              Page Not Found
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Oops! The page you're looking for doesn't exist. Let's get you back on track.
            </p>
            <Link
              href="/"
              className="inline-flex w-fit text-sm font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-6 py-3 rounded-full transition-colors mt-2"
            >
              Go to Homepage
            </Link>
          </div>

          {/* Right: illustration */}
          <div className="relative w-[280px] md:w-[380px] h-[280px] md:h-[380px] shrink-0">
            <Image
              src="/images/404-cart.png"
              alt="Shopping cart illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}