// src/components/marketing/help-centre/PopularArticles.tsx

import { Globe, Link2, CreditCard, Package, Lock, BarChart2, ShoppingCart, Box } from "lucide-react";

const articles = [
  { icon: Globe,        title: "How to Publish Your Website"        },
  { icon: Link2,        title: "How to Connect a Custom Domain"      },
  { icon: CreditCard,   title: "Setting Up Online Payments"          },
  { icon: Package,      title: "Managing Product Inventory"          },
  { icon: Lock,         title: "Resetting Your Account Password"     },
  { icon: BarChart2,    title: "Understanding Your Sales Dashboard"  },
  { icon: ShoppingCart, title: "Setting Up Online Payments"          },
  { icon: Box,          title: "Managing Product Inventory"          },
];

export default function PopularArticles() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-display text-4xl font-bold text-[#241717] uppercase leading-tight mb-2">
            Popular Articles
          </h2>
          <p className="text-sm text-gray-500">
            Most searched and helpful resources chosen by our users.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {articles.map((article, i) => (
            <button
              key={i}
              className="bg-[#241717] hover:bg-[#2e2121] rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-colors"
            >
              <article.icon size={22} className="text-gray-400" />
              <p className="text-sm font-medium text-white leading-snug">
                {article.title}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}