// src/components/layout/CookieBanner.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("branmart_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("branmart_cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("branmart_cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[300px] bg-white rounded-2xl shadow-xl p-5 flex flex-col gap-4">

      {/* Cookie emoji */}
      <span className="text-2xl">🍪</span>

      {/* Text */}
      <p className="text-xs text-gray-500 leading-relaxed">
        This website uses cookies and other technologies to help you navigate,
        as well as to provide a better user experience and to analyze the use
        of our products and services.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        <Link
          href="#"
          className="text-xs text-gray-500 hover:text-[#cc3602] underline transition-colors"
        >
          Cookie Policy
        </Link>
        <button
          onClick={decline}
          className="text-xs font-medium text-gray-600 border border-gray-200 hover:border-gray-400 px-4 py-2 rounded-full transition-colors ml-auto"
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="text-xs font-medium text-white bg-[#cc3602] hover:bg-[#e65a29] px-4 py-2 rounded-full transition-colors"
        >
          Accept
        </button>
      </div>

    </div>
  );
}