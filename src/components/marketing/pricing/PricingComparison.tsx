// src/components/marketing/pricing/PricingComparison.tsx

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { cn } from "@/src/lib/cn";

type CellValue = string | boolean | null;

const rows: { feature: string; basic: CellValue; pro: CellValue; business: CellValue }[] = [
  { feature: "Monthly Price",               basic: "$0",                pro: "$15",                      business: "$29"                      },
  { feature: "Website Builder Access",      basic: "Full Editor",       pro: "Full Editor",               business: "Full Editor"               },
  { feature: "Products Limit",              basic: null,                pro: "Unlimited",                 business: "Unlimited"                 },
  { feature: "Custom Domain Connection",    basic: null,                pro: true,                        business: true                        },
  { feature: "Branmart Subdomain",          basic: true,                pro: true,                        business: true                        },
  { feature: "Storage Space",              basic: "5GB",               pro: "20GB",                      business: "50GB"                      },
  { feature: "Discount Codes",             basic: null,                pro: true,                        business: true                        },
  { feature: "Analytics & Reports",        basic: "Basic Insights",    pro: "Standard Analytics",        business: "Advanced Analytics"        },
  { feature: "Customer Accounts",          basic: null,                pro: true,                        business: true                        },
  { feature: "Email Notifications",        basic: "Order alerts only", pro: "Customizable templates",    business: "Automated workflows"       },
  { feature: "Team Members / Staff Accounts", basic: "1",              pro: "5",                         business: "10"                        },
  { feature: "Templates",                  basic: "Basic",             pro: "Full",                      business: "Full"                      },
  { feature: "Support Access",             basic: "Email only",        pro: "Priority chat support",     business: "Dedicated account manager" },
  { feature: "Transaction Fees (Branmart)", basic: "2% per sale",      pro: "1%",                        business: "0%"                        },
  { feature: "Support Response Time",      basic: "24 hours",          pro: "6 hours",                   business: "2 hours"                   },
];

function Cell({ value, featured }: { value: CellValue; featured?: boolean }) {
  if (value === null) {
    return <span className="text-gray-300 font-bold text-lg">—</span>;
  }
  if (value === true) {
    return <CheckCircle size={18} className="text-[#cc3602] mx-auto" />;
  }
  return (
    <span className={cn("text-sm", featured ? "text-[#241717] font-medium" : "text-gray-500")}>
      {value}
    </span>
  );
}

export default function PricingComparison() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#241717] uppercase leading-tight mb-3">
            Compare Our Plans
          </h2>
          <p className="text-sm text-gray-500">Compare what's included in each plan</p>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-sm font-semibold text-[#241717] pb-6 w-[30%]">
                  Features Overview
                </th>
                <th className="text-center text-sm font-semibold text-[#241717] pb-6">
                  Basic Plan
                </th>
                <th className="text-center text-sm font-semibold text-[#241717] pb-6 bg-[#fff6ec] rounded-t-2xl px-4">
                  Pro Plan
                </th>
                <th className="text-center text-sm font-semibold text-[#241717] pb-6">
                  Business Plan
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "" : ""}>
                  {/* Feature name */}
                  <td className="text-sm text-gray-500 py-4 pr-4 border-t border-gray-100">
                    {row.feature}
                  </td>
                  {/* Basic */}
                  <td className="text-center py-4 border-t border-gray-100">
                    <Cell value={row.basic} />
                  </td>
                  {/* Pro — highlighted */}
                  <td className="text-center py-4 border-t border-orange-100 bg-[#fff6ec] px-4">
                    <Cell value={row.pro} featured />
                  </td>
                  {/* Business */}
                  <td className="text-center py-4 border-t border-gray-100">
                    <Cell value={row.business} />
                  </td>
                </tr>
              ))}

              {/* CTA row */}
              <tr>
                <td className="pt-8" />
                {["basic", "pro", "business"].map((plan) => (
                  <td
                    key={plan}
                    className={cn(
                      "text-center pt-8 pb-4",
                      plan === "pro" ? "bg-[#fff6ec] rounded-b-2xl px-4" : ""
                    )}
                  >
                    <Link
                      href="/sign-up"
                      className={cn(
                        "inline-block text-sm font-medium px-6 py-2.5 rounded-full border transition-colors",
                        plan === "pro"
                          ? "border-[#cc3602] text-[#cc3602] hover:bg-[#cc3602] hover:text-white"
                          : "border-gray-200 text-[#241717] hover:border-gray-400"
                      )}
                    >
                      Start for free
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}