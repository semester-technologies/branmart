// src/components/auth/AuthTopBar.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthTopBar() {
  return (
    <div className="flex items-center justify-between mb-5">
      <Link href="/">
        <Image
          src="/Branmart-Logo.png"
          alt="Branmart"
          width={110}
          height={28}
          style={{ height: "auto", width: "auto" }}
        />
      </Link>
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors"
      >
        <ArrowLeft size={14} />
        Back to website
      </Link>
    </div>
  );
}