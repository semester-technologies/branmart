import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TemplatesHeader() {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors w-fit"
      >
        <ArrowLeft size={14} />
        Back to dashboard
      </Link>

      <div>
        <h1 className="text-3xl font-bold text-[#241717] mb-1">
          Choose your template
        </h1>
        <p className="text-sm text-gray-500">
          Pick a starting point for your website. You can customize everything
          later.
        </p>
      </div>
    </div>
  );
}
