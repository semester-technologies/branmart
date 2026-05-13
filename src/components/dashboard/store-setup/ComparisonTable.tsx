// src/components/dashboard/store-setup/ComparisonTable.tsx

import { Check, X, Info } from "lucide-react";

type CellValue = string | boolean;

const rows: { feature: string; free: CellValue; pro: CellValue; business: CellValue }[] = [
  { feature: "Pages",              free: "1",              pro: "5",                business: "15"             },
  { feature: "Templates",          free: "Basic",          pro: "All",              business: "All"            },
  { feature: "Custom domain",      free: false,            pro: true,               business: true             },
  { feature: "WhatsApp integration", free: false,          pro: true,               business: true             },
  { feature: "Booking widget",     free: false,            pro: true,               business: true             },
  { feature: "Contact forms",      free: true,             pro: true,               business: true             },
  { feature: "Google Maps",        free: true,             pro: true,               business: true             },
  { feature: "Blog",               free: false,            pro: false,              business: true             },
  { feature: "Analytics",          free: false,            pro: true,               business: true             },
  { feature: "SEO tools",          free: false,            pro: false,              business: true             },
  { feature: "Remove branding",    free: false,            pro: true,               business: true             },
  { feature: "Support",            free: "Email",          pro: "Priority Email",   business: "Priority Phone" },
];

function Cell({ value }: { value: CellValue }) {
  if (value === true)  return <Check size={16} className="text-green-500 mx-auto" />;
  if (value === false) return <X     size={16} className="text-gray-300 mx-auto"  />;
  return <span className="text-sm text-gray-600">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-4xl mt-4 border border-gray-200 rounded-2xl overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left text-sm font-semibold text-gray-500 px-5 py-4 w-[40%]">
              Feature
            </th>
            <th className="text-center text-sm font-semibold text-[#241717] px-4 py-4">Free</th>
            <th className="text-center text-sm font-semibold text-[#cc3602]  px-4 py-4">Pro</th>
            <th className="text-center text-sm font-semibold text-[#241717] px-4 py-4">Business</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.feature}
              className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
            >
              <td className="px-5 py-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm text-gray-700">{row.feature}</span>
                  <Info size={12} className="text-gray-300 shrink-0" />
                </div>
              </td>
              <td className="text-center px-4 py-4 border-t border-gray-100">
                <Cell value={row.free} />
              </td>
              <td className="text-center px-4 py-4 border-t border-gray-100 bg-orange-50/30">
                <Cell value={row.pro} />
              </td>
              <td className="text-center px-4 py-4 border-t border-gray-100">
                <Cell value={row.business} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}