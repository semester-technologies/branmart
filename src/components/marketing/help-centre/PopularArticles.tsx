// src/components/marketing/help-centre/PopularArticles.tsx

import { Globe, Link2, CreditCard, Package, Lock, BarChart2, ShoppingCart, Box } from "lucide-react";
import Link from "next/link";

// update articles array to include slugs
const articles = [
  { icon: Globe,        title: "How to Publish Your Website",          topic: "getting-started",  slug: "how-to-publish-your-website"         },
  { icon: Link2,        title: "How to Connect a Custom Domain",        topic: "domains-hosting",  slug: "how-to-connect-a-custom-domain"       },
  { icon: CreditCard,   title: "Setting Up Online Payments",            topic: "getting-started",  slug: "setting-up-online-payments"           },
  { icon: Package,      title: "Managing Product Inventory",            topic: "getting-started",  slug: "managing-product-inventory"           },
  { icon: Lock,         title: "Resetting Your Account Password",       topic: "account-billing",  slug: "resetting-your-account-password"      },
  { icon: BarChart2,    title: "Understanding Your Sales Dashboard",    topic: "getting-started",  slug: "understanding-your-sales-dashboard"   },
  { icon: ShoppingCart, title: "Setting Up Online Payments",            topic: "getting-started",  slug: "setting-up-online-payments-2"         },
  { icon: Box,          title: "Managing Product Inventory",            topic: "getting-started",  slug: "managing-product-inventory-2"         },
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
            <Link
             href={`/help-centre/${article.topic}/${article.slug}`}
              key={i}
              className="bg-[#241717] hover:bg-[#2e2121] rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-colors"
            >
              <article.icon size={22} className="text-gray-400" />
              <p className="text-sm font-medium text-white leading-snug">
                {article.title}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}